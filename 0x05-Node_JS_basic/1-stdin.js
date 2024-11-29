// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
  // Trim the input to remove extra whitespace or newlines
  const input = data.toString().trim();

  // Display the user's input
  console.log(`Your name is: ${input}`);

  // Close the stdin stream
  process.stdin.end();
});

// Handle the end of the input stream
process.stdin.on('end', () => {
  // Display the closing message
  console.log("This important software is now closing");
});
