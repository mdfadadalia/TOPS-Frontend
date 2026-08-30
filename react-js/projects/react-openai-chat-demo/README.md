# React + Node.js OpenAI Chat Demo

A simple full-stack OpenAI chatbot:

React frontend → Node/Express backend → OpenAI Responses API

## Requirements
- Node.js 18+
- An OpenAI API key

## Setup

### Backend
```bash
cd backend
npm install
copy .env.example .env
```

Edit `.env`:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.6
PORT=5000
```

Then:
```bash
npm run dev
```

### Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, normally:
http://localhost:5173

## Security
The OpenAI API key stays on the Node.js backend. Do NOT put the key in React/Vite environment variables such as `VITE_OPENAI_API_KEY`.

## If your account uses a different API model
Change `OPENAI_MODEL` in `backend/.env`.
