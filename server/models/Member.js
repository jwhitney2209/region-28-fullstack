import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street1: {
    type: String,
    required: [true, "Street address is required"],
    minlength: [5, "Street address must be at least 5 characters long"],
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
    required: [true, "City is required"],
    minlength: [2, "City must be at least 2 characters long"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
    minlength: [2, "State must be at least 2 characters long"],
  },
  zip: {
    type: String,
    required: [true, "Zip code is required"],
    minlength: [5, "Zip code must be at least 5 characters long"],
  },
});

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "School name is required"],
    minlength: [2, "School name must be at least 2 characters long"],
  },
  phone: {
    type: String,
    required: [true, "School phone number is required"],
    minlength: [10, "School phone number must be at least 10 characters long"],
  },
  extension: {
    type: String,
  },
  address: addressSchema,
});

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "Last name must be at least 2 characters long"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
    enum: ["Head Director", "Assistant Director", "Accompanist", "Assistant Director/Accompanist"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  school: schoolSchema,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schoolSchema.pre('validate', function (next) {
  if (this.phone && typeof this.phone === 'string') {
      this.phone = this.phone.replace(/\D/g, '');  // Remove all non-digit characters
      if (this.phone.length === 10) {
          this.phone = `${this.phone.slice(0, 3)}-${this.phone.slice(3, 6)}-${this.phone.slice(6, 10)}`;
      }
  }
  next();
});

const Member = mongoose.model("Member", memberSchema);

export default Member;
