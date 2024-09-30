import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
}))

const imageKit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
})

app.get("/api/upload", (req,res)=>{
    const result = imageKit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, ()=>{
    console.log("Server is running...");
})