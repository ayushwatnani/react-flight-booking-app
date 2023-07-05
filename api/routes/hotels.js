import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
})

export default router;