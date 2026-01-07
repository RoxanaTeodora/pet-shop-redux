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

Live Demo: https://littlest-pet-shop.vercel.app/

Preview video: 
[https://github.com/user-attachments/assets/d47ff6b9-259a-4287-90a8-53d32e677e71](https://github-production-user-asset-6210df.s3.amazonaws.com/142969879/532977710-d47ff6b9-259a-4287-90a8-53d32e677e71.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260107T183226Z&X-Amz-Expires=300&X-Amz-Signature=73c71acfeb9fa64fe100231412e3d6f73aa0084db797b5b3d23b911809e3d9d5&X-Amz-SignedHeaders=host)

