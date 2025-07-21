## React + Vite + Redux

- **React** + **Vite** for fast development and modern UI
- **Redux Toolkit** for global state management
- **RTK Query** for API calls and caching
- **PropTypes** for prop validation
- **Email.js** for contact form functionality
- **MockAPI** for simulating user data and admin operations

## 📄 Pages Overview

### 🏠 About Page

- Introduction to the animal center
- Carousel showcasing adoptable pets
- Highlights benefits of pet adoption
- Links to other pages

### 🐶 Pets Page

- Search form to filter pets by `animal`, `breed`, and `location`
- Pet cards display name, image, and breed
- Details button navigates to `/details/:id` using `useParams`
- Adoption modal asks for confirmation
- Adopted pet appears on the Pets page via Redux state

### 📋 Contact Page

- Functional form using **Email.js**
- Links to social profiles

### 🛠️ Admin Page

- User management using **MockAPI**
- Features:
  - Add / Edit / Delete users
  - Display users and their assigned pets
- Uses Redux thunks to fetch and combine user and pet data

### 🧠 State Management with Redux

The app uses Redux Toolkit for:

- Managing **adopted pets** globally (`adoptedPetSlice`)
- Handling **search parameters** (`searchParamsSlice`)
- Fetching pet data via **reduxjs/toolkit/query/react** (`petApiService`)
- Managing **users and their pets** in Admin (`userReducer`)

Live Demo: https://little-pets-shop.vercel.app
