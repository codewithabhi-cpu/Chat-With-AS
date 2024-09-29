// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');


// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {

  const greetings = ['hello', 'hi', 'hey', 'howdy', 'hola']; // List of greeting words

  // If the input contains a greeting word, return the specific response
  if (greetings.includes(input)) {
    return "I am good very well, what about you? 😊";
  }
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      "I'm here to assist you with any questions or concerns you may have. 📩",
      "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
      "What would you like to know? 🤔",
      "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
      "Is there anything specific you'd like to talk about? 💬",
      "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
      "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
      "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
      "I’m doing well, thank you! How about you? 😊 ",
      "Not much, just here to help you. What’s on your mind?",
      "It’s been great so far! How’s yours going? 🤔 ",
      "It’s sunny and warm today, perfect for a walk outside.",
      "I’m here on your screen, always ready to chat with you!",
      "How about a nice salad or a sandwich? Something quick but tasty!",
      "I’ve heard great things about it! Are you a coffee person?",
      " It’s currently insert time. Is there anything you need to schedule?",
      "Sure thing! Staying hydrated is important.",
      "Maybe take a short break or grab a quick nap. Rest is important!",
      "Break tasks into smaller steps, set timers, and take short breaks in between.",
      "Regular exercise, a balanced diet, and staying hydrated are key!",
      "Try a mix of cardio, strength training, and stretching for a balanced routine.",
      "You could try painting, gardening, or learning a new language!",
      " Practice consistently, set small goals, and keep challenging yourself!",
      " It depends on your needs—look for something that fits your budget and has the features you want.",
      "Try restarting your router or checking your cables. Sometimes, a quick reset does the trick!",
      "It’s okay to feel that way sometimes. Take a moment to relax, do something you enjoy, or talk to a friend.",
      "Focus on the good things, even the small ones, and remind yourself of your strengths.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      " I think all colors are great, but green seems to stand out!",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  //tab switch

  window.onblur = function (tabs) { 
alert('trying to switch tabs eh !'); 
  };
  
  