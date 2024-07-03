import serviceImg1 from '../../assets/img/service1.png';
import serviceImg2 from '../../assets/img/service2.png';
import serviceImg3 from '../../assets/img/service3.png';
import ServicesCard from '../Cards/ServicesCard';

const Services = () => {
  const services = [
    {
      name: 'Advanced Technology',
      details:
        'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      image: serviceImg1,
    },
    {
      name: 'Online Doctor Meet',
      details:
        'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      image: serviceImg2,
    },
    {
      name: 'Consultancy your health',
      details:
        'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      image: serviceImg3,
    },
  ];
  return (
    <section className='mx-auto max-w-[1200px] px-5'>
      <div className='grid gap-5 rounded-[32px] bg-secondary md:p-10 lg:grid-cols-2'>
        <div className='max-w-[428px] space-y-6'>
          <div className='badge badge-outline h-[40px] w-[105px]'>Service</div>
          <h2 className='text-4xl font-semibold'>Empowering Health, Enriching Lives</h2>
          <p>
            We are committed to providing high-quality, compassionate care to every patient we
            serve. Whatever your healthcare needs may be, you can trust us to be your partner in
            health and wellness.
          </p>
          <div>
            <button className='btn bg-accent'>
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
          </div>
        </div>
        {services?.map((service, idx) => (
          <ServicesCard key={idx} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
