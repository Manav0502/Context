# Shoe Store - Payment Integration with React Context API

This project is an e-commerce shoe website built with **React**, **React Router DOM**, and **Context API**. It features full shopping cart functionality and a seamless payment workflow.

## Features

- **Global State Management:** Uses React Context API (`CartContext`) to manage cart items and calculate total prices across pages.
- **Routing:** Navigates between Home (`/`) and Payment Page (`/payment`) using `react-router-dom`.
- **Cart Operations:** Users can add products, increase/decrease item quantities, and view cart updates in real time.
- **Payment Gateway UI:** Provides payment options (Cash on Delivery / Credit Card) and a form for credit card details.
- **Cart Persistence across Navigation:** Items added on the Home page stay intact on the Payment page and vice-versa.

## Tech Stack

- React (Vite)
- React Router DOM v6
- Context API & Custom Hooks (`useContext`, `useState`)
- Plain CSS3 (Flexbox & Grid Layouts)

## Getting Started

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd shoe-store-payment