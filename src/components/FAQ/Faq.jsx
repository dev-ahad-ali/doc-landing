const Faq = () => {
  return (
    <section className='mx-auto max-w-[1200px] px-5'>
      <div>
        <div className='badge badge-outline'>Faq</div>
        <h2 className='text-4xl'>Frequently Asked Question</h2>
      </div>
      <div className='space-y-5'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' defaultChecked />
          <div className='collapse-title text-xl font-medium'>
            Click to open this one and close others
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            Click to open this one and close others
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            Click to open this one and close others
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            Click to open this one and close others
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            Click to open this one and close others
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
