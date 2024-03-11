const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

router.get(
    "/",
    wrapAsync(async (req, res) => {
        let allListings = await Listing.find();
        res.render("listings/index.ejs", { allListings });
    })
);

router.get(
    "/new",
    wrapAsync((req, res) => {
        res.render("listings/new.ejs");
    })
);

router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing you requested for does not exits!");
            res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    })
);

router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id).populate("reviews");
        if (!listing) {
            req.flash("error", "Listing you requested for does not exits!");
            res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
    })
);

router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res, next) => {
        // let { title, description, image, price, location, country } = req.body;
        await new Listing(req.body.listing).save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    })
);

router.put(
    "/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        if (!req.body.listing) {
            throw new ExpressError(400, "Send valid data for listing");
        }
        let listing = req.body.listing;
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, listing, {
            runValidators: true,
            new: true,
        });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    })
);

router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted!");
        res.redirect("/listings");
    })
);

module.exports = router;
