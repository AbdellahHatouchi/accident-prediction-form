import AccidentPredictionForm from "@/components/accident-prediction-form"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">Prédiction d'Accidents de la Route</h1>
      <p className="text-center text-muted-foreground mb-8">
        Entrez les informations ci-dessous pour obtenir une prédiction.
      </p>
      <AccidentPredictionForm />
    </main>
  )
}

