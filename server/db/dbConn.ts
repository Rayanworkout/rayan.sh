import mongoose from 'mongoose';

export const connectDb = async () => {

    // Using environment variables in Nuxt.js
    const config = useRuntimeConfig();

    const URI: string | undefined = config.MONGO_URI;

    if (!URI) {
        console.error("MONGO_URI environment variable is not defined.");
        process.exit(1);
    }

    try {

        await mongoose.connect(URI);
        console.log("Database Connected ...");

    } catch (err) {
        console.error(err);
    }
}