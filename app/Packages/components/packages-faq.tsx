"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ type
type FAQ = {
  question: string
  answer: string
}

// Sample FAQ data
const faqData: FAQ[] = [
  {
    question: "What is the difference between Hajj and Umrah packages?",
    answer:
      "Hajj packages are designed for the annual pilgrimage that takes place during specific dates in the Islamic month of Dhul Hijjah. These packages typically last 2-3 weeks and include all necessary arrangements for performing the mandatory Hajj rituals. Umrah packages, on the other hand, are for the 'lesser pilgrimage' that can be performed at any time of the year. Umrah packages are generally shorter (7-14 days) and focus on rituals in Makkah, with optional visits to Madinah.",
  },
  {
    question: "How far in advance should I book my Hajj or Umrah package?",
    answer:
      "For Hajj packages, we recommend booking at least 6-8 months in advance due to limited availability and visa quotas. For Umrah packages, booking 2-3 months ahead is generally sufficient, though during peak seasons like Ramadan, we recommend booking 4-6 months in advance to secure your preferred accommodations and flights.",
  },
  {
    question: "What documents do I need for Hajj and Umrah?",
    answer:
      "Required documents typically include a valid passport with at least 6 months validity beyond your return date, passport-sized photographs with white background, completed visa application forms, and proof of vaccination (including meningitis ACWY vaccine and any other vaccines required at the time of travel). For Hajj, additional documents may be required depending on your country of residence. Our team will provide detailed document requirements upon booking.",
  },
  {
    question: "Are flights included in your packages?",
    answer:
      "Most of our Hajj and Umrah packages include round-trip flights from major international airports. However, we also offer land-only packages for those who prefer to arrange their own flights. Transportation packages (like Makkah to Madinah transfers) do not include international flights. Please check the specific package details or contact our customer service for clarification.",
  },
  {
    question: "What type of accommodations do you offer?",
    answer:
      "We offer a range of accommodations to suit different preferences and budgets, from 3-star to 5-star hotels. Our premium and luxury packages feature hotels located closer to the Haram (within 500 meters), while standard packages may have accommodations a bit further away. All hotels are clean, comfortable, and meet our quality standards. Room configurations include double, triple, and quad options, with private bathrooms.",
  },
  {
    question: "Do you provide special assistance for elderly or disabled pilgrims?",
    answer:
      "Yes, we offer special assistance services for elderly and disabled pilgrims. These include wheelchair arrangements, accessible transportation, special accommodations, and dedicated helpers if required. Please specify any special requirements during the booking process so we can make appropriate arrangements. Additional charges may apply for some services.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Our cancellation policy varies depending on the package and time of cancellation. Generally, cancellations made 60+ days before departure may receive a full refund minus administrative fees. Cancellations 30-59 days before departure may receive a partial refund. Cancellations less than 30 days before departure are typically non-refundable. We strongly recommend purchasing travel insurance to protect against unforeseen circumstances. Please refer to your booking agreement for specific terms.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Yes, we offer customization options for most of our packages. You can add extra nights, upgrade your accommodations, include additional Ziyarat tours, or request special meal arrangements. For significant customizations, please contact our customer service team directly to discuss your specific requirements and receive a personalized quote.",
  },
]

export default function PackagesFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our packages, booking process, and travel arrangements.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions? Contact our customer support team.</p>
          <a
            href="/Contact"
            className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
          >
            Contact Us <span className="ml-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
