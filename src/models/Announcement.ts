import mongoose, { Schema, Document } from "mongoose";

// Define the User schema for embedding in the Announcement
interface IUser {
  name: string;
  image?: string; // Optional field
}

export interface IAnnouncement extends Document {
  user: IUser;
  date: Date;
  content: string;
}

// Schema definition for the Announcement model
const AnnouncementSchema: Schema = new Schema({
  user: {
    name: { type: String, required: true },
    image: { type: String }, // Optional field
  },
  date: { type: Date, required: true, default: Date.now },
  content: { type: String, required: true },
});

// Export the model
export default mongoose.model<IAnnouncement>(
  "Announcement",
  AnnouncementSchema
);
