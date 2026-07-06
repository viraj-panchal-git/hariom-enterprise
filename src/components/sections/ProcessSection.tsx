"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Package, Scissors, RotateCw, Cpu, Disc, Microscope,
  ShieldCheck, Box, Truck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { manufacturingSteps } from "@/data/industries";
import { usePrefersReducedMotion } from "@/lib/hooks";

const stepIcons = [
  Package, Scissors, RotateCw, Cpu, Disc, Microscope, ShieldCheck, Box, Truck,
];

export default function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !timelineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const steps = timelineRef.current.querySelectorAll(".process-step");
    gsap.fromTo(
      steps,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.5,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reducedMotion]);

  return (
    <section id="process" className="section-padding bg-white overflow-hidden relative">
      <div className="absolute inset-0 blueprint-overlay opacity-[0.03] pointer-events-none" />
      <div className="w-full max-w-4xl mx-auto px-0 sm:px-4 relative z-10">
        <SectionHeading
          subtitle="Manufacturing Process"
          title="From Raw Material to Dispatch"
        />

        <div ref={timelineRef} className="relative pl-2 sm:pl-0">
          <div className="absolute left-[1.65rem] sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary md:-translate-x-0.5" />

          {manufacturingSteps.map((step, i) => {
            const StepIcon = stepIcons[i];
            return (
              <div
                key={step.step}
                className={`process-step relative flex items-start sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-5 pl-10 sm:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 min-w-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <div className="inline-block bg-light rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm max-w-sm hover-lift">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <StepIcon size={16} className="text-white" />
                      </div>
                      <h3 className="font-bold text-primary text-base sm:text-lg">{step.title}</h3>
                    </div>
                    <p className="text-steel text-xs sm:text-sm mt-1">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-0 sm:relative sm:left-auto z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shrink-0 ring-4 ring-white">
                  {step.step}
                </div>

                <div className="flex-1 min-w-0 md:hidden pt-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <StepIcon size={14} className="text-white" />
                    </div>
                    <h3 className="font-bold text-primary text-sm sm:text-base">{step.title}</h3>
                  </div>
                  <p className="text-steel text-xs sm:text-sm mt-1 leading-relaxed pl-9">{step.description}</p>
                </div>

                <div className={`flex-1 hidden md:block ${i % 2 !== 0 ? "md:text-right" : "md:text-left"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
