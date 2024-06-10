document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "Life begins at the end zone.",
    "Dream big, work hard, stay focused.",
    "Create the life you can't regret.",
    "Success is measured by relentless persistence.",
    "Believe in yourself and be unstoppable.",
    "Your attitude determines your life's altitude.",
    "Every day is a new opportunity.",
    "Positive thoughts create a positive life.",
    "Turn obstacles into stepping stones.",
    "Small steps lead to big victories.",
    "Embrace change to achieve new heights.",
    "Never stop learning and growing daily.",
    "Stay humble, work hard, be kind.",
    "Challenges are opportunities in disguise.",
    "Live with purpose, passion, and love.",
    "Happiness is found within, not outside.",
    "Embrace the journey, not the destination.",
    "Courage conquers fear, embrace the unknown.",
    "Every moment is a fresh beginning.",
    "Great things come from small beginnings.",
    "Perseverance transforms dreams into reality.",
    "Your mindset shapes your life’s outcome.",
    "Find joy in the simple things.",
    "Success is built on daily habits.",
    "Stay true to your unique path.",
    "Hope is the heartbeat of life.",
    "In every challenge, find the opportunity.",
    "Live authentically, embrace your true self.",
    "Gratitude transforms ordinary into extraordinary.",
    "Choose kindness, spread love, inspire others.",
  ];
  const quoteDisplay = document.getElementById('quoteDisplay');
  const generateQuoteBtn = document.getElementById('generateQuoteBtn');

  generateQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });
});
