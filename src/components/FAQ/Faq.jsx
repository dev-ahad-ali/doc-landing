const Faq = () => {
  return (
    <section className='mx-auto max-w-[1200px] px-5'>
      <div>
        <div className='badge badge-outline h-[32px] w-[140px]'>Faq</div>
        <h2 className='mt-4 text-4xl font-semibold'>Frequently Asked Question</h2>
      </div>
      <div className='mt-8 space-y-3'>
        <div className='collapse collapse-arrow bg-secondary'>
          <input type='radio' name='my-accordion-2' defaultChecked />
          <div className='collapse-title text-xl font-semibold'>What are your office hours?</div>
          <div className='collapse-content'>
            <p className='opacity-80'>
              Our office hours vary by location, but typically we are open Monday through Friday
              from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend
              appointments. Please contact your nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-secondary'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-semibold'>
            How can I schedule an appointment?
          </div>
          <div className='collapse-content'>
            <p className='opacity-80'>
              Our office hours vary by location, but typically we are open Monday through Friday
              from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend
              appointments. Please contact your nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-secondary'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-semibold'>Do you accept insurance?</div>
          <div className='collapse-content'>
            <p className='opacity-80'>
              Our office hours vary by location, but typically we are open Monday through Friday
              from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend
              appointments. Please contact your nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-secondary'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-semibold'>
            What should I bring to my appointment?
          </div>
          <div className='collapse-content'>
            <p className='opacity-80'>
              Our office hours vary by location, but typically we are open Monday through Friday
              from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend
              appointments. Please contact your nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-secondary'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-semibold'>
            Do you offer telemedicine appointments?
          </div>
          <div className='collapse-content'>
            <p className='opacity-80'>
              Our office hours vary by location, but typically we are open Monday through Friday
              from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend
              appointments. Please contact your nearest clinic for specific hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
