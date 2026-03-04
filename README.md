# 🎬 AI Movie Insight Builder

A full-stack web application that allows users to search for movies using an IMDb ID and view detailed movie information along with audience sentiment analysis.

The application fetches movie data from the OMDb API and analyzes audience sentiment based on IMDb ratings.

---

## 🚀 Features

- Search movies using IMDb ID
- Display movie poster, actors, rating, and plot
- Sentiment analysis (Positive / Mixed / Negative)
- Loading spinner while fetching data
- Error handling for invalid movie IDs
- Clean responsive UI using Bootstrap

---

## 🛠 Tech Stack

Frontend:
- Angular
- Bootstrap

Backend:
- Node.js
- Express.js

API:
- OMDb API

Tools:
- Git
- GitHub

---

## 📂 Project Structure
AI-Movie-Insight-Builder
│
├── backend
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── src
│ └── angular.json
│
└── README.md

---

## ⚙️ How It Works

1. User enters an IMDb ID in the Angular interface.
2. Angular sends a request to the Node.js backend.
3. The backend fetches movie data from the OMDb API.
4. Sentiment is generated based on IMDb rating.
5. Angular displays movie details and audience insight.

---

## ▶️ Running the Project Locally

### 1️⃣ Clone the repository
git clone https://github.com/YOUR\PR4THYUDH/ai-movie-insight-builder.git
---

### 2️⃣ Start Backend
cd backend
npm install
node server.js
Backend runs on:
http://localhost:5000
---

### 3️⃣ Start Frontend
cd frontend
npm install
ng serve
Frontend runs on:


http://localhost:4200
---

## 📸 Example Usage

Enter an IMDb ID such as:


tt3896198


The application will display:

- Movie poster
- Title
- Actors
- Plot
- IMDb rating
- Audience sentiment

---

## ⭐ Future Improvements

- Deploy application on AWS
- Add movie search by name
- Improve sentiment analysis using AI models
- Add user favorites feature

---

## 👨‍💻 Author

**Prathyudh Prem**

GitHub:  
https://github.com/YOUR_USERNAME

---

## 📜 License

This project is for learning and demonstration purposes.
