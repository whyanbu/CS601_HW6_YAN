# Inventory Management Application
This is an web application to management inventory of a grocery store.  Full list of products will be displayed with basic information such as product name, quantity and price.  For each product, there is a detail page showing the image of the product and a brief description in addition to the basic information.

## Table of Contents
Features  
Installation  
Usage  
Project Structure  

### Features
Written with react and Typescript without CSS frameworks.  The initial project is scaffolded using "npm create vite@latest CS601_HW6_YAN -- --template react-ts".  React Router is also added to the project for dynamic routing to the individual detail page.  

Native React API createContext and useContext hook are used for storing the fetched inventory data as global state.  Although there might be a bit of over-engineering, the use of global state can showcase the practical use of React Context and avoid props drilling.  

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
│   │   └── ProductListItem.tsx
│   ├── context
│   │   └── ProductContext.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
