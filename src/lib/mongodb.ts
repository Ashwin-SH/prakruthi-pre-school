import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const cached = global as typeof globalThis & {
  mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    cached.mongoose.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    cached.mongoose.conn = await cached.mongoose.promise;
  } catch (err) {
    // Don't cache a failed connection (e.g. cluster paused / transient DNS) —
    // clear it so the next request retries with a fresh connection.
    cached.mongoose.promise = null;
    throw err;
  }

  return cached.mongoose.conn;
}
