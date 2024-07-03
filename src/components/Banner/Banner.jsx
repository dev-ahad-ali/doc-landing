import bannerImg from '../../assets/img/banner.png';

const Banner = () => {
  return (
    <div className='relative mx-auto mt-10 max-w-[1200px] rounded-[48px] px-5'>
      <img src={bannerImg} alt='banner' />
      <span className='absolute inset-0 mx-5 rounded-[48px] bg-gradient-to-t from-[#02004378] to-[#00C19D00]'></span>
    </div>
  );
};

export default Banner;
