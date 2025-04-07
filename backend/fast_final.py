from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend domain for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model and preprocessors
# model = joblib.load("random_forest_model2.pkl")
# label_encoders = joblib.load("label_encoders_updated.pkl")
# scaler = joblib.load("scaler.pkl")

@app.post("/predict")
async def predict(request: Request):
    try:
        data = await request.json()
        print(data)
        # Encoding categorical values
        # encoded_inputs = {}
        # for col in [
        #     "Day_of_week", "Type_of_vehicle", "Area_accident_occured",
        #     "Road_surface_type", "Type_of_collision", "Casualty_class",
        #     "Sex_of_casualty", "Age_band_of_casualty", "Casualty_severity", "Weather_conditions"
        # ]:
        #     if data[col] in label_encoders[col].classes_:
        #         encoded_inputs[col] = label_encoders[col].transform([data[col]])[0]
        #     else:
        #         raise HTTPException(status_code=400, detail=f"Invalid value for {col}")

        # Prepare the input DataFrame
        # input_data = pd.DataFrame({
        #     "Day_of_week": [encoded_inputs["Day_of_week"]],
        #     "Type_of_vehicle": [encoded_inputs["Type_of_vehicle"]],
        #     "Area_accident_occured": [encoded_inputs["Area_accident_occured"]],
        #     "Road_surface_type": [encoded_inputs["Road_surface_type"]],
        #     "Type_of_collision": [encoded_inputs["Type_of_collision"]],
        #     "Number_of_vehicles_involved": [data["num_vehicles"]],
        #     "Number_of_casualties": [data["num_casualties"]],
        #     "Casualty_class": [encoded_inputs["Casualty_class"]],
        #     "Sex_of_casualty": [encoded_inputs["Sex_of_casualty"]],
        #     "Age_band_of_casualty": [encoded_inputs["Age_band_of_casualty"]],
        #     "Casualty_severity": [encoded_inputs["Casualty_severity"]],
        #     "Weather_conditions": [encoded_inputs["Weather_conditions"]]
        # })

        # Ensure all expected features are present
        # expected_features = scaler.feature_names_in_
        # input_data_corrected = pd.DataFrame(0, index=[0], columns=expected_features)
        # for col in input_data.columns:
        #     input_data_corrected[col] = input_data[col]

        # # Normalize the input data
        # input_data_scaled = scaler.transform(input_data_corrected)

        # # Make a prediction
        # prediction = model.predict(input_data_scaled)
        # prediction_text = "Severe Accident" if prediction[0] == 1 else "Minor Accident"
        prediction_text= "Severe Accident"
        return {"prediction": prediction_text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
