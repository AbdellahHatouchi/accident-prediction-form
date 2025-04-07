"use client"

import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

interface ResultsStepProps {
  prediction: string | null
}

export default function ResultsStep({ prediction }: ResultsStepProps) {
  if (!prediction) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p className="text-muted-foreground">Veuillez compléter le formulaire pour obtenir une prédiction.</p>
      </div>
    )
  }

  const isSevere = prediction.includes("Grave")

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">Résultats de la prédiction</h2>

      <Alert variant={isSevere ? "destructive" : "default"} className="border-l-4">
        {isSevere ? <AlertCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
        <AlertTitle className="text-lg font-semibold">Prédiction</AlertTitle>
        <AlertDescription className="text-base text-blue-500">{prediction}</AlertDescription>
      </Alert>

      <Card className="mt-6 bg-muted/40">
        <CardContent className="pt-6">
          <h3 className="font-medium mb-2">Recommandations</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {isSevere ? (
              <>
                <li>Contactez immédiatement les services d'urgence</li>
                <li>Sécurisez la zone pour éviter d'autres accidents</li>
                <li>Fournissez les premiers soins si vous êtes formé</li>
                <li>Documentez la scène pour les rapports d'assurance</li>
              </>
            ) : (
              <>
                <li>Échangez les informations avec les autres parties impliquées</li>
                <li>Prenez des photos de la scène et des dommages</li>
                <li>Contactez votre assurance pour déclarer l'incident</li>
                <li>Consultez un médecin pour vérifier votre état de santé</li>
              </>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

