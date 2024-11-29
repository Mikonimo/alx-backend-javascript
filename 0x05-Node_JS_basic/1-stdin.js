// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const data = process.stdin.read();

  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

// Handle the end of the input stream
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});
