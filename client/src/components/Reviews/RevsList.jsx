const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const RevsListItem = require("./RevsListItem.jsx");
const AddReview = require("./AddReview.jsx");
const SortReviewSelect = require("./SortReviewSelect.jsx");
const ShowMoreReviews = require("../shared/ShowMoreButton.jsx");
const ThumbnailModal = require("./ThumbnailModal.jsx");

module.exports = ({
  reviews,
  reviewsMeta,
  changeSortBy,
  sortingBy,
  increaseDisplayCount,
  showShowMore,
  currentProduct
}) => {
  const [currThumbnail, setCurrThumbnail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <Grid item xs={9}>
      <SortReviewSelect changeSortBy={changeSortBy} sortingBy={sortingBy} />
      <Grid container>
        {reviews.map(review => (
          <RevsListItem
            setCurrThumbnail={url => {
              setCurrThumbnail(url);
              setOpenModal(true);
            }}
            key={review.review_id}
            review={review}
          />
        ))}
      </Grid>
      <Grid container>
        <AddReview currentProduct={currentProduct} reviewsMeta={reviewsMeta} />
        {showShowMore ? (
          <ShowMoreReviews onClick={increaseDisplayCount} />
        ) : null}
      </Grid>
      <ThumbnailModal
        thumbnail={currThumbnail}
        isOpen={openModal}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
    </Grid>
  );
};
