const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//Post route
router.post(
    "/",
    validateReview,
    wrapAsync(async (req, res) => {
        let listing = await Listing.findById(req.params.id);
        let review = new Review(req.body.review);
        listing.reviews.push(review);
        await review.save();
        await listing.save();
        req.flash("success", "Review Created!");
        res.redirect(`/listings/${listing._id}`);
    })
);

router.delete(
    "/:review_id",
    wrapAsync(async (req, res) => {
        let { id, review_id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, {
            $pull: { reviews: review_id },
        });
        await Review.findByIdAndDelete(review_id);
        req.flash("success", "Review Deleted!");
        res.redirect(`/listings/${listing._id}`);
    })
);

module.exports = router;
