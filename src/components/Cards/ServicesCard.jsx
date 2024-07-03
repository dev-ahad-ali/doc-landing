const ServicesCard = ({ service }) => {
  const { name, details, image } = service;
  return (
    <div className='relative'>
      <img className='w-full' src={image} alt='' />
      <div className='bottom-5 left-5 rounded-[20px] bg-primary/60 p-5 text-secondary md:absolute md:w-2/3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <div className='flex items-end gap-4'>
          <p className='mt-2 text-xs'>{details}</p>
          <button className='btn btn-circle border-transparent bg-accent'>
            <svg
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.1421 1.85786C16.1421 1.30558 15.6944 0.857864 15.1421 0.857864L6.14214 0.857865C5.58985 0.857865 5.14214 1.30558 5.14214 1.85786C5.14214 2.41015 5.58985 2.85786 6.14214 2.85786L14.1421 2.85786L14.1421 10.8579C14.1421 11.4101 14.5899 11.8579 15.1421 11.8579C15.6944 11.8579 16.1421 11.4101 16.1421 10.8579L16.1421 1.85786ZM1.70711 16.7071L15.8492 2.56497L14.435 1.15076L0.292893 15.2929L1.70711 16.7071Z'
                fill='#FFFFF5'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
