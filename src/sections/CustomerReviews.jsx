import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold max-sm:text-[36px] max-sm:leading-[42px]">
        Was unsere
        <span className="text-coral-red"> Kunden </span> sagen?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hören Sie authentische Geschichten von unseren zufriedenen Kunden über
        ihre außergewöhnlichen Erfahrungen mit uns.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-start max-lg:flex-col sm:items-center gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
