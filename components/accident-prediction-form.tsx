"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import FormStepper from "@/components/form-stepper"
import VehicleInfoStep from "@/components/steps/vehicle-info-step"
import AccidentDetailsStep from "@/components/steps/accident-details-step"
import CasualtyInfoStep from "@/components/steps/casualty-info-step"
import ResultsStep from "@/components/steps/results-step"
import axios from "axios"
import { toast } from "sonner"

// Define the form schema with Zod
export const formSchema = z.object({
  // Vehicle Info
  day_of_week: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
  type_of_vehicle: z.enum([
    "Automobile",
    "Public (> 45 seats)",
    "Lorry (41-100Q)",
    "Public (13-45 seats)",
    "Taxi",
    "Bicycle",
    "Motorcycle",
  ]),
  num_vehicles: z.coerce.number().min(1).max(10),

  // Accident Details
  area_accident_occured: z.enum([
    "Residential areas",
    "Office areas",
    "Recreational areas",
    "Industrial areas",
    "Other",
  ]),
  road_surface: z.enum(["Asphalt roads", "Earth roads", "Gravel roads"]),
  collision_type: z.enum([
    "Vehicle with vehicle collision",
    "Collision with pedestrians",
    "Collision with roadside objects",
  ]),
  weather_conditions: z.enum(["Normal", "Raining", "Windy", "Fog or mist"]),

  // Casualty Info
  num_casualties: z.coerce.number().min(1).max(10),
  casualty_class: z.enum(["Driver or rider", "Pedestrian"]),
  sex_casualty: z.enum(["Male", "Female"]),
  age_band_casualty: z.enum(["18-30", "31-50", "Under 18", "Over 51"]),
  casualty_severity: z.enum(["1", "2"]),
})

export type FormValues = z.infer<typeof formSchema>

export default function AccidentPredictionForm() {
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [prediction, setPrediction] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day_of_week: "Monday",
      type_of_vehicle: "Automobile",
      num_vehicles: 2,
      area_accident_occured: "Residential areas",
      road_surface: "Asphalt roads",
      collision_type: "Vehicle with vehicle collision",
      weather_conditions: "Normal",
      num_casualties: 1,
      casualty_class: "Driver or rider",
      sex_casualty: "Male",
      age_band_casualty: "18-30",
      casualty_severity: "1",
    },
  })

  const steps = [
    { title: "Véhicule", component: <VehicleInfoStep form={form} /> },
    { title: "Accident", component: <AccidentDetailsStep form={form} /> },
    { title: "Victime", component: <CasualtyInfoStep form={form} /> },
    { title: "Résultats", component: <ResultsStep prediction={prediction} /> },
  ]

  const nextStep = async () => {
    const fields = [
      ["day_of_week", "type_of_vehicle", "num_vehicles"],
      ["area_accident_occured", "road_surface", "collision_type", "weather_conditions"],
      ["num_casualties", "casualty_class", "sex_casualty", "age_band_casualty", "casualty_severity"],
    ][step]

    const isValid = await form.trigger(fields as any)

    if (isValid) {
      if (step === steps.length - 2) {
        await onSubmit(form.getValues())
      } else {
        setStep((prev) => prev + 1)
      }
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Simulate API call for prediction
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock prediction result
      const severityLevel = data.casualty_severity === "1" ? "Grave" : "Légère"
      // change url to your backend endpoint
      const response = await axios.post("http://127.0.0.1:8000/predict", data)
      console.log(response.data);
      
      setPrediction(response.data.prediction)
      setPrediction(`Accident avec blessure ${severityLevel.toLowerCase()}`)

      setStep(steps.length - 1)
    } catch (error) {
      toast.error( "Une erreur s'est produite lors de la prédiction.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-primary">
      <CardHeader className="pb-4">
        <FormStepper steps={steps.map((s) => s.title)} currentStep={step} />
      </CardHeader>

      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <CardContent className="min-h-[400px] sm:min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {steps[step].component}
              </motion.div>
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              variant="outline"
              type="button"
              onClick={prevStep}
              disabled={step === 0 || isSubmitting || step === steps.length - 1}
            >
              Précédent
            </Button>

            {step < steps.length - 1 ? (
              <Button onClick={nextStep} type="button" disabled={isSubmitting}>
                {step === steps.length - 2 ? (
                  <>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Prédiction en cours...
                      </>
                    ) : (
                      "Prédire"
                    )}
                  </>
                ) : (
                  "Suivant"
                )}
              </Button>
            ) : (
              <Button onClick={() => setStep(0)} type="button" variant="default">
                Nouvelle prédiction
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

