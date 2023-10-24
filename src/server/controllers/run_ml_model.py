import pickle
import sys
import json

if len(sys.argv) != 2:
    print("Usage: python script.py <input_json>")
    sys.exit(1)

input_json = sys.argv[1]

with open('./model.pickle', 'rb') as file:
    model = pickle.load(file)

try:
    # load JSON string as a Python dictionary
    input_data = json.loads(input_json)

    prediction = model.predict(input_data)

    # xonvert the prediction to a JSON string and print it to stdout
    prediction_json = json.dumps(prediction)
    print(prediction_json)
    
except json.JSONDecodeError:
    print("Invalid JSON input")
    sys.exit(1)

    
