// Write your code in this file!
const currentUser = 'Sebastian Santos';
// const welcomeMessage = 'Welcome to Flatbook, ';
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = "Welcome, !";
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;