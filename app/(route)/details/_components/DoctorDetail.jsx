import React from 'react';
import Image from 'next/image';
import { GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DoctorDetail = ({ doctor }) => {
  const socialMediaList = [
    {
      id: 1,
      icon: '/youtube.png',
      url: '',
    },
    {
      id: 2,
      icon: '/linkedin.png',
      url: '',
    },
    {
      id: 3,
      icon: '/twitter.png',
      url: '',
    },
    {
      id: 4,
      icon: '/facebook.png',
      url: '',
    },
  ];
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
        <div>
          <Image
            src={doctor.attributes?.image?.data?.attributes?.url}
            width={200}
            height={200}
            alt='doctor-image'
            className='rounded-lg h-[270px] object-cover w-full'
          />
        </div>
        <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
          <h2 className='font-bold text-2xl'>{doctor.attributes.Name}</h2>
          <h2 className='flex gap-2 text-gray-500'>
            <GraduationCap />
            <span>{doctor.attributes?.Year_of_Experience} of experionce</span>
          </h2>
          <h2 className='text-md flex gap-2 text-gray-500'>
            <MapPin />
            <span>{doctor.attributes.Address}</span>
          </h2>
          <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
            {doctor.attributes?.categories.data[0]?.attributes?.Name}
          </h2>
          <div className='flex gap-3'>
            {socialMediaList.map((item, index) => (
              <Image src={item.icon} key={index} width={30} height={30} />
            ))}
          </div>
          <Button className='mt-3 rounded-full'>Book Appointment</Button>
        </div>
      </div>
      <div className='p-3 border-[1px] rounded-lg mt-5'>
        <h2 className='font-bold text-[20px]'>About Me</h2>
        <p className='text-gray-500 tracking-wide mt-2'>
          {doctor.attributes.About}
        </p>
      </div>
    </>
  );
};

export default DoctorDetail;
