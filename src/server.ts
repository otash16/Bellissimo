import dotenv from 'dotenv';
dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MONGO:", process.env.MONGO_URL);