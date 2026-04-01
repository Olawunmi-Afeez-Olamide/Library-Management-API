const mongoose = require("mongooses");

const bookSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      unique: true,
    },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "author" }],
    status: { type: String, enum: ["IN", "OUT"], default: "IN" },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    issuedBy: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true },
);
