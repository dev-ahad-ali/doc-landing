import offerImg from '../../assets/img/offerImg.png';
import logoLight from '../../assets/img/logoLight.png';

const Offer = () => {
  return (
    <section className='relative mx-auto mt-12 max-w-[1200px] px-5 text-white'>
      <img className='absolute inset-0 -z-10 w-full' src={offerImg} alt='' />
      <img className='absolute right-5 top-5' src={logoLight} alt='' />
      <div className='ps-[60px] pt-[107px]'>
        <h2>Get Your First Appointment at 50% Off!</h2>
        <button className='btn border-transparent bg-accent'>
          Appointment
          <svg
            className='fill-[#020043]'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13.3137 1.86314C13.3137 1.31086 12.866 0.863141 12.3137 0.863141L3.31371 0.863141C2.76142 0.863141 2.31371 1.31086 2.31371 1.86314C2.31371 2.41543 2.76142 2.86314 3.31371 2.86314L11.3137 2.86314L11.3137 10.8631C11.3137 11.4154 11.7614 11.8631 12.3137 11.8631C12.866 11.8631 13.3137 11.4154 13.3137 10.8631L13.3137 1.86314ZM1.70711 13.884L13.0208 2.57025L11.6066 1.15603L0.292893 12.4697L1.70711 13.884Z' />
          </svg>
        </button>
        <button className='btn btn-outline border-white text-white'>
          Learn More
          <svg
            className='fill-[#ffffff]'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13.3137 1.86314C13.3137 1.31086 12.866 0.863141 12.3137 0.863141L3.31371 0.863141C2.76142 0.863141 2.31371 1.31086 2.31371 1.86314C2.31371 2.41543 2.76142 2.86314 3.31371 2.86314L11.3137 2.86314L11.3137 10.8631C11.3137 11.4154 11.7614 11.8631 12.3137 11.8631C12.866 11.8631 13.3137 11.4154 13.3137 10.8631L13.3137 1.86314ZM1.70711 13.884L13.0208 2.57025L11.6066 1.15603L0.292893 12.4697L1.70711 13.884Z' />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Offer;
