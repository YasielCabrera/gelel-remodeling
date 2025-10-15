"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive remodeling services including kitchen renovations, bathroom remodeling, basement finishing, home additions, and complete home renovations. Our team handles everything from design to completion."
  },
  {
    question: "How long does a typical remodeling project take?",
    answer: "Project timelines vary depending on scope and complexity. A kitchen remodel typically takes 4-8 weeks, bathroom renovations 2-4 weeks, and whole-home remodels can take 3-6 months. We provide detailed timelines during the consultation phase."
  },
  {
    question: "Do you provide design services?",
    answer: "Yes! Our experienced design team works with you to create beautiful, functional spaces that match your vision and budget. We offer 3D renderings and detailed plans to help you visualize your project before construction begins."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed contractors with comprehensive insurance coverage. We carry both general liability and workers' compensation insurance to protect you and our team throughout the project."
  },
  {
    question: "What is your warranty policy?",
    answer: "We stand behind our work with comprehensive warranties. All workmanship is covered for 2 years, and we provide manufacturer warranties on all materials and fixtures used in your project."
  },
  {
    question: "How do you handle permits and inspections?",
    answer: "We handle all necessary permits and coordinate with local building inspectors to ensure your project meets all code requirements. This is included in our service - you don't need to worry about the paperwork."
  }
]

export function FAQ() {
  return (
    <section id="faqs" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-0 md:scroll-mt-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've compiled the most important information to help you get the most out of your remodeling experience. 
          Can't find what you're looking for? <a href="#contact" className="font-semibold hover:underline">Contact us.</a>
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mb-16">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
        <p className="text-muted-foreground mb-6">
          Have questions or need assistance? Our team is here to help!
        </p>
        <Button asChild>
          <a href="#contact">Contact us</a>
        </Button>
      </div>
    </section>
  )
}
