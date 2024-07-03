import weImg from '../../assets/img/weImg.png';

const GetSolutions = () => {
  return (
    <section className='mx-auto my-[160px] flex max-w-[1200px] justify-between gap-3 px-5'>
      <div className='max-w-[470px]'>
        <div className='badge badge-outline'>Who we are</div>
        <h2 className='text-4xl'>We Help To Get Solutions</h2>
        <p>
          We are proud to be a trusted healthcare provider in our community, and we look forward to
          serving you and your family with excellence, integrity, and compassion. Your health is our
          priority, and we are here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive the attention and
          care they deserve.
        </p>
        <button className='btn bg-accent'>
          Learn more
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
      </div>
      <div className='relative'>
        <img src={weImg} alt='' />
        <div className='absolute -bottom-[40px] -left-[96px] w-2/3 rounded-[32px] bg-primary px-8 py-12 text-white'>
          <h3 className='text-2xl'>Our mission is simple</h3>
          <p>
            To provide high-quality healthcare services that are accessible, personalized, and
            patient-centered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetSolutions;
