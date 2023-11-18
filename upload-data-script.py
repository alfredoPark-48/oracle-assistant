import requests
import pandas as pd

df = pd.read_csv('data/product-dataset.csv')
df.dropna(inplace=True)

for index, row in df.iterrows():
    
    product_name = row['Product Name']
    list_price = row['List Price']
    brand_name = row['Brand']
    description = row['Description']
    
    payload = {
        'productName': product_name,
        'price': list_price,
        'brandName': brand_name,
        'quantity': 100,
        'description': description
    }

    url = 'http://158.101.21.48:3000/product/'

    response = requests.post(url, json=payload)

#     print(response.text)
