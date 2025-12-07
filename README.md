# Inventory Management Application
This is an web application to management inventory of a grocery store.  Full list of products will be displayed with basic information such as product name, quantity and price.  For each product, there is a detail page showing the image of the product and a brief description in addition to the basic information.

## Table of Contents
Features  
Installation  
Usage  
Project Structure  

### Features
Written with react and Typescript without CSS frameworks.  The initial project is scaffolded using "npm create vite@latest CS601_HW6_YAN -- --template react-ts".  React Router is also added to the project for dynamic routing to the individual detail page.  

As both ProductList.tsx and ProductDetail.tsx require the inventory data, one of the solutions is to up lift the local state to ProductList.tsx.  Hence, a separate component called ProductLoad.tsx is created for fetching inventory data from json file and pass the data as props to child components ProductList.tsx and ProductDetails.tsx.

### Installation
Clone the repository:

bash  
git clone https://github.com/whyanbu/CS601_HW6_YAN.git  
cd CS601_HW6_YAN
run the application locally using "npm run dev" in terminal.

### Usage
Start the app locally by "npm run dev" in terminal.  For deployment, use "npm run build".

### Project Structure
```
CS601_HW6_YAN
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── apples.jpg
│   │   ├── bananas.jpg
│   │   ├── lettuce.jpg
│   │   ├── oranges.jpg
│   │   ├── site_logo_transparent.png
│   │   └── tomatos.jpg
│   └── inventory.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Footer.css
│   │   ├── Footer.tsx
│   │   ├── Header.css
│   │   ├── Header.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProductDetail.css
│   │   ├── ProductDetail.tsx
│   │   ├── ProductList.css
│   │   ├── ProductList.tsx
│   │   ├── ProductListItem.css
│   │   ├── ProductListItem.tsx
│   │   └── ProductLoader.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
