import userImg1 from '../../assets/img/user1.png';
import userImg2 from '../../assets/img/user2.png';
import userImg3 from '../../assets/img/user3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ReviewCard from '../Cards/ReviewCard';
import '../Cards/paginationFix.css';

const Testimonial = () => {
  const reviews = [
    {
      title: 'Expertise and Compassion Combined',
      details:
        "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      rating: 5,
      name: 'Sarah D',
      profession: 'IT Professional',
      image: userImg1,
    },
    {
      title: 'Life-Saving Care, Life-Changing Experience',
      details:
        'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
      rating: 4,
      name: 'Michael R',
      profession: 'Business Executive',
      image: userImg2,
    },
    {
      title: 'A Partner in Health and Wellness',
      details:
        "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
      rating: 5,
      name: 'David S',
      profession: 'Lawyer',
      image: userImg3,
    },
    {
      title: 'Expertise and Compassion Combined',
      details:
        "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      rating: 5,
      name: 'Sarah D',
      profession: 'IT Professional',
      image: userImg1,
    },
    {
      title: 'Life-Saving Care, Life-Changing Experience',
      details:
        'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
      rating: 4,
      name: 'Michael R',
      profession: 'Business Executive',
      image: userImg2,
    },
    {
      title: 'A Partner in Health and Wellness',
      details:
        "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
      rating: 5,
      name: 'David S',
      profession: 'Lawyer',
      image: userImg3,
    },
    {
      title: 'Expertise and Compassion Combined',
      details:
        "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      rating: 5,
      name: 'Sarah D',
      profession: 'IT Professional',
      image: userImg1,
    },
    {
      title: 'Life-Saving Care, Life-Changing Experience',
      details:
        'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
      rating: 4,
      name: 'Michael R',
      profession: 'Business Executive',
      image: userImg2,
    },
    {
      title: 'A Partner in Health and Wellness',
      details:
        "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
      rating: 5,
      name: 'David S',
      profession: 'Lawyer',
      image: userImg3,
    },
  ];

  return (
    <section className='mx-auto my-8 max-w-[1200px] px-5 lg:my-[160px]'>
      <div>
        <div className='badge badge-outline h-[32px] w-[142px]'>Testimonial</div>
        <h2 className='mt-4 text-4xl font-semibold'>What they say about us</h2>
      </div>
      <div className='mt-8'>
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination]}
          className='pb-12'
        >
          {reviews?.map((review, idx) => (
            <SwiperSlide key={idx}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
