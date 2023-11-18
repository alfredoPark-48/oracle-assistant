# Oracle-Assistant
## Usage
To run use `npm start`

# API 
## User
### Create a user
**URL**: `/user/`

**Method**: `POST`
#### Request body
```
{
    "displayName": "New user name"
}
```
#### Sucess response
```
{
    "displayName":"Created user name"
    "_id":"Created user id"
}
```

### Get all users
**URL**: `/user/`

**Method**: `GET`
#### Sucess response
```
[
    {
        "displayName":"User 1",
        "_id":"User id 1"
    }, 
    {
        "displayName":"User 2"
        "_id":"User id 2"
    }
]
```
### Get a user
**URL**: `/user/{userId}`

**Method**: `GET`
#### Sucess response
```
{
    "displayName":"Some user name"
    "_id":"Some user name id"
}
```

### Update a user
**URL**: `/user/{userId}`

**Method**: `PATCH`
#### Request body
```
{
    "displayName": "Updated user name"
}
```
#### Sucess response
```
{
    "displayName":"Updated user name",
    "_id":"Some updated user name id"
}
```

### Delete a user
**URL**: `/user/{userId}`

**Method**: `DELETE`
#### Sucess response
```
{
    "displayName":"Deleted user name",
    "_id":"Some deleted user name id"
}
```

## Product
### Create a product 
**URL**: `/product/`

**Method**: `POST`
#### Request body
```
{
    "productName": "Sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Sample Brand", 
    "description": "A sample product description"
}
```
#### Sucess response
```
{
    "productName": "Created sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Created sample Brand", 
    "description": "Created sample product description"
    "_id":"Created sample product id"
}
```

### Get all products 
**URL**: `/product/`

**Method**: `GET`
#### Sucess response
```
[
    {
        "productName": "Sample Product 1", 
        "price": 19.99, 
        "quantity": 10, 
        "brandName": "Sample Brand 1", 
        "description": "A sample product description 1",
        "_id":"Sample product id 1"
    }, 
    {
        "productName": "Sample Product 2", 
        "price": 19.99, 
        "quantity": 10, 
        "brandName": "Sample Brand 2", 
        "description": "A sample product description 2",
        "_id":"Sample product id 2"
    }
]
```
### Get a product 
**URL**: `/product/{productId}`

**Method**: `GET`
#### Sucess response
```
{
    "productName": "Sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Sample Brand", 
    "description": "A sample product description",
    "_id":"Sample product id"
}
```

### Update a product 
**URL**: `/product/{productId}`

**Method**: `PATCH`
#### Request body
```
{
    "productName": "Updated Sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Updated Sample Brand", 
    "description": "Updated sample product description"
}
```
#### Sucess response
```
{
    "productName": "Updated Sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Updated Sample Brand", 
    "description": "Updated sample product description",
    "_id":"Updated sample product id"
}
```

### Delete a product 
**URL**: `/product/{productId}`

**Method**: `DELETE`
#### Sucess response
```
{
    "productName": "Deleted Sample Product", 
    "price": 19.99, 
    "quantity": 10, 
    "brandName": "Deleted Sample Brand", 
    "description": "Deleted sample product description",
    "_id":"Deleted sample product id"
}
```

## Order
### Create an order 
**URL**: `/order/`

**Method**: `POST`
#### Request body
```
{
    "user": "Some user id",
    "products": [
        "Some product id 1", 
        "Some product id 2"
    ]
}
```
#### Sucess response
```
{
    "user": "Some user id",
    "products": [
        "Some product id 1", 
        "Some product id 2"
    ],
    "_id": "Created order id"
}
```

### Get all products 
**URL**: `/order/`

**Method**: `GET`
#### Sucess response
```
{
    "user": "Some user id",
    "products": [
        "Some product id 1", 
        "Some product id 2"
    ],
    "_id": "Created order id"
}
```
### Get a product 
**URL**: `/order/{orderId}`

**Method**: `GET`
#### Sucess response
```
{
    "user": "Some user id",
    "products": [
        "Some product id 1", 
        "Some product id 2"
    ],
    "_id": "Created order id"
}
```

### Update a product 
**URL**: `/order/{orderId}`

**Method**: `PATCH`
#### Request body
```
{
    "user": "Updated user id",
    "products": [
        "Updated product id 1", 
        "Updated product id 2"
    ],
}
```
#### Sucess response
```
{
    "user": "Updated user id",
    "products": [
        "Updated product id 1", 
        "Updated product id 2"
    ],
}
```

### Delete a product 
**URL**: `/order/{orderId}`

**Method**: `DELETE`
#### Sucess response
```
{
    "user": "Some user id",
    "products": [
        "Some product id 1", 
        "Some product id 2"
    ],
    "_id": "Created order id"
}
```