"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface InquiryFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  productRequirement: string;
  quantity: string;
  message: string;
}

const inputClasses =
  "w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-base sm:text-sm min-h-[48px]";

function buildWhatsAppMessage(data: InquiryFormData, drawingFileName?: string) {
  const lines = [
    "Hello Hariom Enterprise,",
    "",
    "New inquiry from website:",
    "",
    `Name: ${data.fullName}`,
    `Company: ${data.companyName.trim() || "Not provided"}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Product Requirement: ${data.productRequirement}`,
    `Quantity: ${data.quantity.trim() || "Not specified"}`,
    `Message: ${data.message.trim() || "Not provided"}`,
  ];

  if (drawingFileName) {
    lines.push(`Drawing File: ${drawingFileName}`);
    lines.push("(Customer will attach the drawing file in WhatsApp chat)");
  }

  return lines.join("\n");
}

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [fileName, setFileName] = useState("");
  const reducedMotion = usePrefersReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>();

  const onSubmit = (data: InquiryFormData) => {
    const message = buildWhatsAppMessage(data, fileName || undefined);
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setStatus("success");
    reset();
    setFileName("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="w-full min-w-0">
          <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-1.5">Full Name *</label>
          <input
            id="fullName"
            {...register("fullName", { required: "Name is required" })}
            className={inputClasses}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div className="w-full min-w-0">
          <label htmlFor="companyName" className="block text-sm font-medium text-primary mb-1.5">Company Name</label>
          <input
            id="companyName"
            {...register("companyName")}
            className={inputClasses}
            placeholder="Your company name"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="w-full min-w-0">
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone Number *</label>
          <input
            id="phone"
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            className={inputClasses}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full min-w-0">
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email *</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            type="email"
            className={inputClasses}
            placeholder="your@email.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="w-full min-w-0">
          <label htmlFor="productRequirement" className="block text-sm font-medium text-primary mb-1.5">Product Requirement *</label>
          <input
            id="productRequirement"
            {...register("productRequirement", { required: "Requirement is required" })}
            className={inputClasses}
            placeholder="e.g. Dowel Pins, CNC Components"
          />
          {errors.productRequirement && (
            <p className="text-red-500 text-xs mt-1">{errors.productRequirement.message}</p>
          )}
        </div>
        <div className="w-full min-w-0">
          <label htmlFor="quantity" className="block text-sm font-medium text-primary mb-1.5">Quantity</label>
          <input
            id="quantity"
            {...register("quantity")}
            className={inputClasses}
            placeholder="e.g. 100 pcs"
          />
        </div>
      </div>

      <div className="w-full min-w-0">
        <label htmlFor="drawing" className="block text-sm font-medium text-primary mb-1.5">Upload Drawing</label>
        <label
          htmlFor="drawing"
          className="flex items-center gap-3 px-4 py-3.5 sm:py-3 rounded-lg border-2 border-dashed border-gray-200 hover:border-secondary cursor-pointer transition-colors min-h-[48px] w-full"
        >
          <Upload size={20} className="text-steel shrink-0" />
          <span className="text-steel text-xs sm:text-sm truncate">{fileName || "Upload PDF, DWG, or image file"}</span>
          <input
            id="drawing"
            type="file"
            accept=".pdf,.dwg,.dxf,.step,.jpg,.png"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
        {fileName && (
          <p className="text-steel text-[10px] sm:text-xs mt-1.5">
            File name will be included in WhatsApp — attach the file manually in the chat after it opens.
          </p>
        )}
      </div>

      <div className="w-full min-w-0">
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className={`${inputClasses} resize-none min-h-[120px]`}
          placeholder="Additional details about your requirement..."
        />
      </div>

      {status === "success" && (
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 text-green-600 bg-green-50 p-4 rounded-lg text-sm"
          role="status"
        >
          <CheckCircle size={20} className="shrink-0 mt-0.5" />
          Opening WhatsApp with your inquiry details. Send the message to complete your request.
        </motion.div>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} fullWidth className="md:w-auto md:min-w-[200px]">
        <Send size={18} />
        Submit Inquiry via WhatsApp
      </Button>
    </form>
  );
}
