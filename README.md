# Soap-Ecommerce
# Schemas

```javascript

userSchema = {
    firstName,
    LastName,
    Email,
    Password,
    Role, // enum {customer, admin, default customer}
}

ProductSchema = {
    id,
    Images,
    Tittle,
    Description,
    IsAvailable,
    Mrp,
    Price,
    Quantity,
    Category // String
}

```

# Authentication
Register

REQUEST
``` javascript 

endpoint 
/userRegistration
{
    firstName,
    LastName,
    Email,
    Password,
    Role, // enum {customer, admin, default customer}
}

Status Code 201

{
  "message": "Signup success"
}

Status Code 400

{
  "message": "User already exists"
}


```


``` javascript 

endpoint 
/userLogin
{
    
    Email,
    Password,
    
}

# status 200

{
  "token": "jwt_token"
}

status 400
{
  "Message": "Invalid Credentials"
}

```


# Add product
``` javascript 

endpoint post

/product/addItem
{
    id,
    Images,
    Tittle,
    Description,
    IsAvailable,
    Mrp,
    Price,
    Quantity,
    Category // String
    role,
}

# status 200

{
  "message": "Product added Successfull"
}

# status 401
{
  "message": "Not Autherized"
}


# status 400
{
  "message": "Product allreaddy found"
}

# status 500
{
  "message": "Database Error"
}



```



# get All product
``` javascript 

endpoint get

/product
{
    find(ProductSchema) 

    // min 20 data per request  using params
    // implement pagination if needed
}

# status 200
{
  "message": "Product Get Successfull"
}

# status 404
{
  "message": "Product not Found"
}

# status 500
{
  "message": "Database Error"
}
```







# Get product
``` javascript 

endpoint get

/product/GetItem
//params && body
{
    id
}

# status 200

{
  "message": "Product Get Successfull"
}

# status 404
{
  "message": "Product not Found"
}

# status 500
{
  "message": "Database Error"
}
```

