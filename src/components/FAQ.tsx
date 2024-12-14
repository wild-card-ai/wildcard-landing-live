import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why is Wildcard better than using tool calling directly?",
      answer: "Wildcard outperforms traditional function calling methods by maintaining high accuracy across thousands of endpoints, while traditional methods struggle beyond 5-10 functions."
    },
    {
      question: "Which agent frameworks are supported?",
      answer: "Wildcard currently supports LangGraph. We are working on support for CrewAI, AutoGen, and other frameworks. Please book a call if you'd like to integrate with your custom framework."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can start immediately with our developer package of 12 popular APIs and 2000+ endpoints. Integration typically takes less than a few hours."
    },
    {
      question: "Do you support custom APIs?",
      answer: "Yes, you can add your own APIs while maintaining the same high accuracy and performance as our pre-integrated endpoints. Please book a call to discuss your use case."
    },
    {
      question: "How does authentication work?",
      answer: "We offer both managed cloud authentication and self-hosted options, giving you complete control over your credentials management."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, you can execute functions locally on your own infrastructure, ensuring your customer data never passes through our servers."
    },
    {
      question: "What about rate limiting and error handling?",
      answer: "Wildcard automatically handles rate limiting, retries, and authentication issues across all integrated APIs."
    },
  ];

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="text-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;