"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .transform((val) => val.replace(/[\s\-\(\)]/g, "")),
  address: z
    .string()
    .min(1, "Address is required")
    .min(5, "Please enter a complete address"),
  address2: z.string().optional(),
  city: z
    .string()
    .min(1, "City is required")
    .min(2, "Please enter a valid city name"),
  zipCode: z
    .string()
    .min(1, "Zip code is required")
    .regex(
      /^\d{5}(-\d{4})?$/,
      "Please enter a valid US zip code (e.g., 12345 or 12345-6789)"
    ),
  projectDescription: z
    .string()
    .min(1, "Project description is required")
    .min(
      20,
      "Please provide a more detailed description (at least 20 characters)"
    )
    .max(1000, "Description must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      address2: "",
      city: "",
      zipCode: "",
      projectDescription: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Thank You!
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've received your request for a free estimate. Our team will
                contact you within 24 hours to discuss your ceramic tile
                project.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3"
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="free-estimate"
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden scroll-mt-0 md:scroll-mt-14 "
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get Your Free Estimate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we'll provide you with a detailed quote
            for your ceramic tile project
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Two Column Layout for Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Personal Information
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mx-auto lg:mx-0 rounded-full"></div>
                  </div>

                  <div className="space-y-6">
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="name"
                            className="text-sm font-medium text-foreground/90"
                          >
                            Full Name *
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              className={`transition-all duration-200 ${
                                fieldState.invalid
                                  ? "border-destructive ring-2 ring-destructive/20"
                                  : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="email"
                            className="text-sm font-medium text-foreground/90"
                          >
                            Email Address *
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              placeholder="Enter your email address"
                              className={`transition-all duration-200 ${
                                fieldState.invalid
                                  ? "border-destructive ring-2 ring-destructive/20"
                                  : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="phone"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground/90"
                          >
                            Phone Number *
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              className={`transition-all duration-200 ${
                                fieldState.invalid
                                  ? "border-destructive ring-2 ring-destructive/20"
                                  : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    />
                  </div>
                </div>

                {/* Address Information Section */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Project Location
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mx-auto lg:mx-0 rounded-full"></div>
                  </div>

                  <div className="space-y-6">
                    <Controller
                      name="address"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="address"
                            className="text-sm font-medium text-foreground/90"
                          >
                            Address *
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="address"
                              type="text"
                              placeholder="Street address"
                              className={`transition-all duration-200 ${
                                fieldState.invalid
                                  ? "border-destructive ring-2 ring-destructive/20"
                                  : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="address2"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="address2"
                            className="text-sm font-medium text-foreground/90"
                          >
                            Address 2
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="address2"
                              type="text"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              className={`transition-all duration-200 ${
                                fieldState.invalid
                                  ? "border-destructive ring-2 ring-destructive/20"
                                  : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Controller
                        name="city"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                              htmlFor="city"
                              className="text-sm font-medium text-foreground/90"
                            >
                              City *
                            </FieldLabel>
                            <FieldContent>
                              <Input
                                {...field}
                                id="city"
                                type="text"
                                placeholder="City"
                                className={`transition-all duration-200 ${
                                  fieldState.invalid
                                    ? "border-destructive ring-2 ring-destructive/20"
                                    : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                }`}
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </FieldContent>
                          </Field>
                        )}
                      />

                      <Controller
                        name="zipCode"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                              htmlFor="zipCode"
                              className="text-sm font-medium text-foreground/90"
                            >
                              Zip Code *
                            </FieldLabel>
                            <FieldContent>
                              <Input
                                {...field}
                                id="zipCode"
                                type="text"
                                placeholder="12345"
                                className={`transition-all duration-200 ${
                                  fieldState.invalid
                                    ? "border-destructive ring-2 ring-destructive/20"
                                    : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                }`}
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </FieldContent>
                          </Field>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description Section */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Project Details
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mx-auto rounded-full"></div>
                </div>

                <Controller
                  name="projectDescription"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor="projectDescription"
                        className="text-sm font-medium text-foreground/90"
                      >
                        Project Description *
                      </FieldLabel>
                      <FieldContent>
                        <Textarea
                          {...field}
                          id="projectDescription"
                          placeholder="Please describe your ceramic tile project in detail. Include room dimensions, tile preferences, timeline, and any specific requirements..."
                          className={`min-h-32 transition-all duration-200 ${
                            fieldState.invalid
                              ? "border-destructive ring-2 ring-destructive/20"
                              : "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          }`}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                    </Field>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Get Free Estimate
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
