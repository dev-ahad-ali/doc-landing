const ReviewCard = ({ review }) => {
  const { title, name, details, image, rating, profession } = review;
  return (
    <div className='flex flex-col justify-between rounded-xl bg-secondary p-5'>
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
      <div className='flex'>
        <div className='avatar'>
          <div className='w-12'>
            <img src={image} />
          </div>
        </div>
        <div>
          <p>
            {name},{profession}
          </p>
          <div className='flex'>
            {[...Array(rating).keys()]?.map((rating, idx) => (
              <p key={idx}>{rating}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
