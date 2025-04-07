"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { FormValues } from "@/components/accident-prediction-form"

interface CasualtyInfoStepProps {
  form: UseFormReturn<FormValues>
}

export default function CasualtyInfoStep({ form }: CasualtyInfoStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">Informations sur la victime</h2>

      <FormField
        control={form.control}
        name="num_casualties"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre de victimes</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={1}
                max={10}
                {...field}
                onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="casualty_class"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Classe de la victime</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une classe" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Driver or rider">Conducteur ou passager</SelectItem>
                <SelectItem value="Pedestrian">Piéton</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sex_casualty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sexe de la victime</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un sexe" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Male">Homme</SelectItem>
                <SelectItem value="Female">Femme</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="age_band_casualty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tranche d'âge de la victime</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une tranche d'âge" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="18-30">18-30</SelectItem>
                <SelectItem value="31-50">31-50</SelectItem>
                <SelectItem value="Under 18">Moins de 18</SelectItem>
                <SelectItem value="Over 51">Plus de 51</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="casualty_severity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gravité de la victime</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une gravité" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">Grave</SelectItem>
                <SelectItem value="2">Légère</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

