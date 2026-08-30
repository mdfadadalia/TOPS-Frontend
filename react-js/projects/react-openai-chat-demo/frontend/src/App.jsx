import { useState } from "react";

const API_URL = "http://localhost:5000/api/chat";

export default function App() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(event) {
    event.preventDefault();

    if (!message.trim() || loading) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Request failed");
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(err.message || "Unable to contact the backend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="chat-card">
        <div className="header">
          <h1>OpenAI Chat Demo</h1>
          <p>React → Node.js → OpenAI Responses API</p>
        </div>

        <form onSubmit={sendMessage}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something, e.g. Explain React lazy loading..."
            rows={6}
            disabled={loading}
          />

          <button type="submit" disabled={loading || !message.trim()}>
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </form>

        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {answer && (
          <div className="answer">
            <h2>AI Response</h2>
            <div className="answer-text">{answer}</div>
          </div>
        )}
      </section>
    </main>
  );
}
