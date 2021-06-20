# Kuber Eats

The Backend of K(= Korean)-uber Eats Clone

## Preparation

#1 DATABASE CONFIGURATION ( for mac )

1.  Install PostgreSQL
2.  (Optional) Install postico (https://eggerapps.at/postico/)
3.  Create database for 'Kuber-Eats'
4.  Login to the database you create
5.  Create admin user with password

```
ex)
ALTER USER [YOUR_USERNAME] WITH PASSWORD '12345'
```

## STACK

1. Nest JS
2. NODE JS
3. TypeScript
4. GraphQL

## User Model:

- id
- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)

## User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email

## Restaurant Model

- name
- category
- address
- coverImage

## Restaurant CRUD:

- See Categories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)
- See Restaurant

- Edit Restaurant
- Delete Restaurant

- Create Dish
- Edit Dish
- Delete Dish
