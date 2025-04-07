"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { FormValues } from "@/components/accident-prediction-form"

interface AccidentDetailsStepProps {
  form: UseFormReturn<FormValues>
}

export default function AccidentDetailsStep({ form }: AccidentDetailsStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">Détails de l'accident</h2>

      <FormField
        control={form.control}
        name="area_accident_occured"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Zone de l'accident</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une zone" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Residential areas">Zones résidentielles</SelectItem>
                <SelectItem value="Office areas">Zones de bureaux</SelectItem>
                <SelectItem value="Recreational areas">Zones récréatives</SelectItem>
                <SelectItem value="Industrial areas">Zones industrielles</SelectItem>
                <SelectItem value="Other">Autre</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="road_surface"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de surface de la route</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de surface" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Asphalt roads">Asphalte</SelectItem>
                <SelectItem value="Earth roads">Terre</SelectItem>
                <SelectItem value="Gravel roads">Gravier</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="collision_type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de collision</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de collision" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Vehicle with vehicle collision">Collision véhicule-véhicule</SelectItem>
                <SelectItem value="Collision with pedestrians">Collision avec des piétons</SelectItem>
                <SelectItem value="Collision with roadside objects">
                  Collision avec des objets sur le bord de la route
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="weather_conditions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Conditions météorologiques</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez des conditions météorologiques" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Raining">Pluie</SelectItem>
                <SelectItem value="Windy">Venteux</SelectItem>
                <SelectItem value="Fog or mist">Brouillard</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

