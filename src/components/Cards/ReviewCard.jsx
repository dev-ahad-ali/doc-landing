import star from '../../assets/img/star.png';

const ReviewCard = ({ review }) => {
  const { title, name, details, image, rating, profession } = review;
  return (
    <div className='flex max-w-full flex-col justify-between rounded-xl bg-secondary p-5'>
      <div>
        <h3 className='mb-3 text-xl font-semibold'>{title}</h3>
        <p className='text-sm opacity-70'>{details}</p>
      </div>
      <div className='mt-4 flex items-center gap-2'>
        <div className='avatar'>
          <div className='w-12'>
            <img src={image} />
          </div>
        </div>
        <div>
          <p className='text-xs'>
            <span className='font-semibold'>{name}</span>,{profession}
          </p>
          <div className='mt-1 flex gap-1'>
            {[...Array(rating).keys()]?.map((rating, idx) => (
              <img key={idx} className='w-[14px]' src={star} alt='' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
