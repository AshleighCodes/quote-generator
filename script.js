const quotes = [
    {
        text: "Your authenticity is your superpower. The more you can be true to who you are, the more impact you can have on the world.",
        author: "Simone Biles"
    },
    {
        text: "What makes you different or weird, that's your strength.",
        author: "Meryl Streep"
    },
    {
        text: "Everyone deserves to show up fully as themselves and feel safe and supported.",
        author: "Laverne Cox"
    },
    {
        text: "When you've worked hard, and done well, and walked through that doorway of opportunity, you do not slam it shut behind you. You reach back.",
        author: "Michelle Obama"
    },
    {
        text: "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes – understanding that failure is not the opposite of success, it's part of success.",
        author: "Arianna Huffington"
    },
    {
        text: "Don't ever feel like your best isn't good enough. If you feel that way, that shows you're growing as a person.",
        author: "Emma Watson"
    },
    {
        text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall"
    },
    {
        text: "The things that make me different are the things that make me me.",
        author: "Winnie Harlow"
    },
    {
        text: "You can't let fear of judgment stop you from doing what you want to do.",
        author: "Zendaya"
    },
    {
        text: "Imperfections are not inadequacies; they are reminders that we're all in this together.",
        author: "Brené Brown"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const refreshIcon = document.getElementById('refresh-icon');

function generateQuote() {
    // Add rotation class to refresh icon
    refreshIcon.classList.add('rotate');
    
    // Get random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Update text
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;
    
    // Remove rotation class after animation
    setTimeout(() => {
        refreshIcon.classList.remove('rotate');
    }, 500);
}

// Generate initial quote
generateQuote();