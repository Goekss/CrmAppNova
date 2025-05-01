const askQuestion = async (text) => {
  const res = await fetch('https://localhost:XXXX/api/kunden/ask-ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Prompt: text })
  });
  const data = await res.json();
  console.log("AI Cevabı:", data.answer);
};