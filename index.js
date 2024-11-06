const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let chats = [];

app.use(express.json());
app.use(cors());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(chats);
});

app.post('/api/data', (req, res) => {
    // Access the data sent in the request body
    const { name, content } = req.body;

    // Create a new object with only 'name' and 'message'
    const chatData = {
      name,
      message: content // Renaming 'content' to 'message'
    };

    // Add the chat data to the array
    chats.push(chatData);

    // Send a response with only 'name' and 'message'
    res.json({
      name: chatData.name,
      message: chatData.message
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
