const mongoose = require("mongooses");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: String,
    dob: String,
  },
  { timestamps: true },
);
