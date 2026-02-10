const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "contactData.txt");

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const data = `
-------------------------
Name: ${name}
Email: ${email}
Message: ${message}
Time: ${new Date().toLocaleString()}
-------------------------
`;

  fs.appendFile(filePath, data, (err) => {
    if (err) {
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
