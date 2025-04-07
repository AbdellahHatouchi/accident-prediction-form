"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormStepperProps {
  steps: string[]
  currentStep: number
}

export default function FormStepper({ steps, currentStep }: FormStepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-all duration-200",
                index < currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : index === currentStep
                    ? "border-primary text-primary"
                    : "border-muted-foreground/30 text-muted-foreground",
              )}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
            </div>
            <span
              className={cn(
                "mt-2 text-xs font-medium",
                index <= currentStep ? "text-primary" : "text-muted-foreground",
              )}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="relative mt-4">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted" />
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-500"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

