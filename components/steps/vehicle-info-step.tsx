"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { FormValues } from "@/components/accident-prediction-form"

interface VehicleInfoStepProps {
  form: UseFormReturn<FormValues>
}

export default function VehicleInfoStep({ form }: VehicleInfoStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">Informations sur le véhicule</h2>

      <FormField
        control={form.control}
        name="day_of_week"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Jour de la semaine</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un jour" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Monday">Lundi</SelectItem>
                <SelectItem value="Tuesday">Mardi</SelectItem>
                <SelectItem value="Wednesday">Mercredi</SelectItem>
                <SelectItem value="Thursday">Jeudi</SelectItem>
                <SelectItem value="Friday">Vendredi</SelectItem>
                <SelectItem value="Saturday">Samedi</SelectItem>
                <SelectItem value="Sunday">Dimanche</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="type_of_vehicle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de véhicule</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de véhicule" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Automobile">Automobile</SelectItem>
                <SelectItem value="Public (&gt; 45 seats)">Public (&gt; 45 places)</SelectItem>
                <SelectItem value="Lorry (41-100Q)">Camion (41-100Q)</SelectItem>
                <SelectItem value="Public (13-45 seats)">Public (13-45 places)</SelectItem>
                <SelectItem value="Taxi">Taxi</SelectItem>
                <SelectItem value="Bicycle">Vélo</SelectItem>
                <SelectItem value="Motorcycle">Moto</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="num_vehicles"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre de véhicules impliqués</FormLabel>
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
    </div>
  )
}

