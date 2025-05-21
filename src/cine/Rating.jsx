import star from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, i) => (
        <img key={i} src={star} width={14} height={14} alt="star" />
      ))}
    </>
  );
};

export default Rating;
