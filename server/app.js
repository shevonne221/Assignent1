const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const _ = require("lodash");


app.use(cors());

app.get("/getEdu", (req, res) => {
  res.json([
    { degree: "B.Sc. in Computer Science", institution: "University A" },
    { degree: "M.Sc. in Software Engineering", institution: "University B" }
  ]);
});

app.get("/getExp", (req, res) => {
  res.json([
    { position: "Software Developer", company: "Tech Corp" },
    { position: "Senior Engineer", company: "Innovatech" }
  ]);
});

app.get("/getOverview", (req, res) => {
  res.json("A hard-working passionate software developer with experience in various technologies, looking for work to integrate skills...");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API Server" });
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});