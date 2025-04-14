# Cre Corner – Desk Buddy Product Launch Website

*Cre Corner* is a pastel-themed, kawaii-inspired product launch page for our handmade Desk Buddy clay keychain. The site features smooth animations, a countdown to launch, pre-order functionality powered by Firebase, and email confirmations using EmailJS.

---

## 🌐 Live Demo

Check out the live version here:  
*[https://crecorner.netlify.app/](https://crecorner.netlify.app/)*

---

## 🛠 Features

- Kawaii-style landing page with pastel theme and animations
- Countdown timer to product launch
- Looping banner animation (image and video)
- Section-wise scroll fade-in animations
- Fully responsive layout
- Firebase integration for storing pre-orders
- EmailJS integration to send confirmation emails

---

## 🚀 How to Run the Project Locally

1. *Clone the Repository*
   bash
   git clone https://github.com/your-username/cre-corner-website.git
   cd cre-corner-website
   

2. **Create config.js**
   Create a file named config.js in the root folder and copy the structure from config.sample.js.

   js
   // config.js (example)
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   export const emailJsPublicKey = "YOUR_EMAILJS_PUBLIC_KEY";
   export const emailJsServiceId = "YOUR_SERVICE_ID";
   export const emailJsTemplateId = "YOUR_TEMPLATE_ID";
   

3. *Open in Browser*
   You can open index.html or form.html directly in your browser. No server is required.

---

## 📦 Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- Firebase Firestore (Client SDK)
- EmailJS (Frontend SDK)
- Netlify (Hosting)

---

## 📁 Folder Structure


cre-corner/
│
├── index.html
├── form.html
├── script.js
├── style.css
├── config.js          # Not pushed to GitHub (in .gitignore)
├── config.sample.js   # Placeholder for credentials
├── .gitignore
├── assets/            # Images, videos, icons
└── README.md


---

## ⚠ Notes

- **Do not push config.js** – it contains sensitive credentials.
- A .gitignore file is already set to exclude config.js.

---

## 📬 Contact

Email: crecorner@gmail.com  
Instagram: [@cre_corner](https://www.instagram.com/cre_corner?igsh=YWM0Z25icDdoNTJp)  
YouTube: [@crecorner954](https://youtube.com/@crecorner954?si=t0IcCSGCnpQsadNS)
