import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <div className="flex justify-start items-center flex-col">
      <img
        src={imgURL}
        alt="Kunden"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0 max-sm:w-[14px]"
        />
        <p className="text-xl font-montserrat text-slate-gray max-sm:text-[18px]">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold max-sm:text-[18px]">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
