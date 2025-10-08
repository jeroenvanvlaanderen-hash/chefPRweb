"use client";

import { GraduationCap, ChefHat, Star } from "lucide-react";
import { ElementType } from "react";

type ExperienceItemType = {
  icon: ElementType;
  value: string;
  title: string;
  subtitle: string;
};

const experienceItems: ExperienceItemType[] = [
  {
    icon: ChefHat,
    value: "item-2",
    title: "Le Cordon Bleu Grand Diplôme",
    subtitle: "Cuisine & Pâtisserie",
  },
  {
    icon: GraduationCap,
    value: "item-1",
    title: "BSc Biomedical Sciences",
    subtitle: "University of Liverpool",
  },
  {
    icon: Star,
    value: "item-3",
    title: "Michelin-Star Restaurant Experience",
    subtitle: "3-month experience at Speilsalen, Trondheim",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-800">
                Experience & Education
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {experienceItems.map(({ icon: Icon, value, title, subtitle }) => (
                <div
                  key={value}
                  className="bg-card p-6 rounded-lg border border-border text-center flex flex-col items-center shadow-sm"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
}
