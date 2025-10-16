import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Log the data to console as requested
    console.log("=== NEW ESTIMATE REQUEST ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Form Data:", JSON.stringify(validatedData, null, 2));
    console.log("===========================");
    
    // Send email notifications
    try {
      // Email to business owner
      const businessEmailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: [process.env.EMAIL_TO!],
        subject: `New Free Estimate Request from ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Free Estimate Request
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Project Location</h3>
              <p><strong>Address:</strong> ${validatedData.address}</p>
              ${validatedData.address2 ? `<p><strong>Address 2:</strong> ${validatedData.address2}</p>` : ''}
              <p><strong>City:</strong> ${validatedData.city}</p>
              <p><strong>Zip Code:</strong> ${validatedData.zipCode}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Project Description</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.projectDescription}</p>
            </div>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                This email was sent from the Gelel Remodeling contact form.
              </p>
            </div>
          </div>
        `,
      });

      // Confirmation email to customer
      const customerEmailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: [validatedData.email],
        subject: "Thank you for your estimate request - Gelel Remodeling",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              Thank You for Your Request!
            </h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Dear ${validatedData.name},
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Thank you for requesting a free estimate for your ceramic tile project. We have received your information and our team will contact you within 24 hours to discuss your project in detail.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Your Project Summary</h3>
              <p><strong>Project Location:</strong> ${validatedData.address}, ${validatedData.city}, ${validatedData.zipCode}</p>
              <p><strong>Project Description:</strong></p>
              <p style="white-space: pre-wrap; line-height: 1.6; background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
                ${validatedData.projectDescription}
              </p>
            </div>
            
            <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
              <h3 style="color: #007bff; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>Our team will review your project details</li>
                <li>We'll contact you within 24 hours to schedule a consultation</li>
                <li>We'll provide a detailed estimate for your ceramic tile project</li>
                <li>We'll answer any questions you may have</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #555; font-size: 14px;">
                If you have any immediate questions, please don't hesitate to contact us.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                <strong>Gelel Remodeling</strong><br>
                Professional Ceramic Tile Services
              </p>
            </div>
          </div>
        `,
      });
      
      console.log("Business email sent successfully:", businessEmailResult);
      console.log("Customer confirmation email sent successfully:", customerEmailResult);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the entire request if email fails, but log the error
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Estimate request received successfully",
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error processing estimate request:", error);
    
    if (error instanceof z.ZodError) {
      // Get the first validation error message for user-friendly display
      const firstError = error.issues[0];
      const errorMessage = firstError 
        ? `${firstError.path.join('.')}: ${firstError.message}`
        : "Please check your form data and try again";
        
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error" 
      },
      { status: 500 }
    );
  }
}
