const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { registerUser, loginUser } = require("./controllers/auth");
const { dashBoardData } = require("./controllers/dashboard");
const { getUserData, getUserSocials } = require("./controllers/getUserData");
const {
  saveSocials,
  saveProfile,
  saveLinks,
} = require("./controllers/saveItems");
const { loadSocials, loadLinks } = require("./controllers/loadPrevious");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://pravigyajain7:QRqidiZXI1ifbFbs@cluster0.hemldwe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`mongodb COnnected`);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);
app.post("/api/register", registerUser);
app.post("/data/dashboard", dashBoardData);
app.get("/get/:handle", getUserData);
app.post("/save/socials", saveSocials);
app.post("/save/profile", saveProfile);
app.post("/save/links", saveLinks);
app.post("/load/socials", loadSocials);
app.post("/load/links", loadLinks);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
