
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, ChefHat, Star } from "lucide-react";
import { ElementType } from "react";

type AccordionItemType = {
  icon: ElementType;
  value: string;
  question: string;
  answer: string;
};

const experienceItems: AccordionItemType[] = [
  {
    icon: ChefHat,
    value: "item-2",
    question: "Le Cordon Bleu Grand Diplôme",
    answer: "Cuisine & Pâtisserie",
  },
  {
    icon: GraduationCap,
    value: "item-1",
    question: "BSc Biomedical Sciences",
    answer: "University of Liverpool",
  },
  {
    icon: Star,
    value: "item-3",
    question: "Michelin-Star Restaurant Experience",
    answer: "3-month experience at Speilsalen, Trondheim",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-800">
                Experience
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3 max-w-3xl mx-auto">
              {experienceItems.map(({ icon: Icon, value, question, answer }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className="group border border-border rounded-md overflow-hidden transition-all duration-300 bg-card"
                >
                  <AccordionTrigger
                    className="flex items-center justify-between w-full px-4 py-3 bg-transparent text-left group-data-[state=open]:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Icon className="w-5 h-5 transition-colors duration-300 text-foreground/60 group-data-[state=open]:text-primary" />
                      <span className="text-base font-medium text-foreground">
                        {question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="relative px-4 py-3 text-sm text-foreground/80 border-t border-border before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary before:opacity-0 group-data-[state=open]:before:opacity-100 transition-all duration-300">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
      </div>
    </section>
  );
}
