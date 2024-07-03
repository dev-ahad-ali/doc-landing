import crt from '../../assets/img/crt.png';
import chart from '../../assets/img/cart.png';
import pataint from '../../assets/img/pataint.png';
import star from '../../assets/img/star.png';
import coin from '../../assets/img/coin.png';
import vid from '../../assets/img/vid.png';

const Stats = () => {
  return (
    <section className='mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-5 px-5 lg:grid-cols-5'>
      <div className='order-2 rounded-3xl border border-[#02004333] bg-[#ffffff] p-5 lg:-order-1'>
        <h3 className='text-[40px] font-semibold'>90%</h3>
        <p className='text-sm'>Patient satisfaction rate, reflecting our commitment.</p>
        <div className='mt-6 grid place-items-center'>
          <img src={chart} alt='' />
        </div>
      </div>
      <div className='flex flex-col gap-5 md:col-span-3'>
        <h2 className='text-center text-3xl font-semibold md:text-5xl'>
          Comprehensive Care for Every Patient
        </h2>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <div className='rounded-3xl border border-[#02004333] bg-[#FFFFF5] p-5'>
            <h3 className='text-[40px] font-semibold'>500+</h3>
            <p className='text-sm'>Board-certified doctors</p>
            <div className='grid place-items-end'>
              <img src={crt} alt='' />
            </div>
          </div>
          <div className='mt-8 rounded-3xl border border-[#02004333] bg-[#FFFFFF] p-5'>
            <h3 className='flex items-center gap-1 text-[40px] font-semibold'>
              4.8 <img className='h-10' src={star} alt='' />
            </h3>
            <p className='text-sm'>Over 20,000 Patient</p>
            <div className='mt-1 grid place-items-baseline'>
              <img src={pataint} alt='' />
            </div>
          </div>
          <div className='rounded-3xl border border-[#02004333] bg-[#FFFFF5] p-5'>
            <h3 className='text-[40px] font-semibold'>$5000</h3>
            <p className='text-sm'>Money spend for poor patient</p>
            <div className='grid place-items-end'>
              <img src={coin} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl border border-[#02004333] bg-[#ffffff] p-5'>
        <h3 className='text-[40px] font-semibold'>50+</h3>
        <p className='text-sm'>Free lession video for patient</p>
        <div className='mt-6 grid place-items-center'>
          <img src={vid} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Stats;
