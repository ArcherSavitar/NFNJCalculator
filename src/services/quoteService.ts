import { Quote } from '../types';
import { quotes } from '../data/quotes';

export const quoteService = {
  // Get today's quote based on date
  getDailyQuote(): Quote {
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const index = dayOfYear % quotes.length;
    return quotes[index];
  },

  // Get a random quote
  getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  },

  // Get the current date string for comparison
  getCurrentDateString(): string {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  },
};

// Helper function to get day of year
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
