"use client";

import { ArrowRight, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import IconGradientPanel from "@/components/ui/IconGradientPanel";
import { products } from "@/data/products";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

interface ProductsSectionProps {
  showAll?: boolean;
  compact?: boolean;
}

export default function ProductsSection({ showAll = false, compact = false }: ProductsSectionProps) {
  const displayProducts = showAll || compact ? products : products.slice(0, 6);
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="products" className={`${compact ? "section-padding-compact" : "section-padding"} bg-white overflow-hidden`}>
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Products"
          title="Precision Engineered Components"
        />

        {compact ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {displayProducts.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.03 }}
                  whileHover={canHover && !reducedMotion ? { y: -4 } : undefined}
                  className="bg-light rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/40 transition-all text-center group"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-105 transition-transform`}>
                    <Icon size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-bold text-primary leading-tight">
                    {product.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayProducts.map((product, i) => {
              const Icon = product.icon;
              const materials = product.material.split(", ").slice(0, 3);
              return (
                <AnimatedCard key={product.id} delay={i * 0.08} className="overflow-hidden">
                  <IconGradientPanel icon={Icon} gradient={product.gradient} size="md" />
                  <div className="card-flex-body p-4 sm:p-5 md:p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-primary">{product.name}</h3>
                      <span className="shrink-0 px-2 py-0.5 bg-accent text-white text-[10px] font-semibold rounded-full">
                        Precision
                      </span>
                    </div>
                    <p className="text-steel text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-1">{product.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {materials.map((mat) => (
                        <span
                          key={mat}
                          className="px-2 py-0.5 bg-primary/5 text-primary text-[10px] font-medium rounded-md border border-primary/10"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <Wrench size={14} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-steel break-words"><strong>Process:</strong> {product.process}</span>
                      </div>
                    </div>

                    {showAll && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.slice(0, 4).map((app) => (
                            <span
                              key={app}
                              className="px-2 py-0.5 bg-secondary/5 text-secondary text-[10px] rounded-md"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        )}

        {!showAll && !compact && (
          <div className="text-center mt-8 sm:mt-12">
            <Button href="/products" variant="primary" size="lg" fullWidth className="sm:w-auto sm:min-w-[200px]">
              View All Products
              <ArrowRight size={18} />
            </Button>
          </div>
        )}

        {compact && (
          <div className="text-center mt-4 sm:mt-5">
            <Button href="/products" variant="outline" size="sm" className="sm:min-w-[160px]">
              Full Product Details
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
