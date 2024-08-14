import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
console.log('MongoDB URI:', MONGODB_URI); // Ensure this logs the correct URI


if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing');
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'event-bazaar',
            bufferCommands: false,
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
            throw new Error('Failed to connect to MongoDB');
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};
