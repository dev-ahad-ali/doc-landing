import offerImg from '../../assets/img/offerImg.png';
import logoLight from '../../assets/img/logoLight.png';

const Offer = () => {
  return (
    <section className='relative mx-4 my-8 max-w-[1200px] px-5 text-white md:h-[300px] lg:mx-auto lg:my-[160px] lg:h-[494px]'>
      <img className='absolute inset-0 -z-10 w-full' src={offerImg} alt='' />
      <img className='absolute right-5 top-5 hidden md:block' src={logoLight} alt='' />
      <div className='pt-3 md:ps-[60px] md:pt-[107px]'>
        <h2 className='max-w-[450px] text-xl font-semibold leading-normal lg:text-[40px]'>
          Get Your First Appointment at 50% Off!
        </h2>
        <div className='mt-6 flex items-center gap-6'>
          <button className='btn btn-sm border-transparent bg-accent lg:btn-md'>
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
          <button className='btn btn-outline btn-sm border-white text-white lg:btn-md'>
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
      </div>
    </section>
  );
};

export default Offer;
