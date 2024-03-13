const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
    validateReview,
    isLoggedIn,
    isReviewAuthor,
} = require("../middleware.js");

//Post route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(async (req, res) => {
        let listing = await Listing.findById(req.params.id);
        let review = new Review(req.body.review);
        review.author = req.user._id;
        listing.reviews.push(review);
        await review.save();
        await listing.save();
        req.flash("success", "Review Created!");
        res.redirect(`/listings/${listing._id}`);
    })
);

router.delete(
    "/:review_id",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async (req, res) => {
        console.log("hello");
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
