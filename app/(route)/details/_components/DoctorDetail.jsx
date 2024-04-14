import React from 'react';
import Image from 'next/image';
import { GraduationCap, MapPin } from 'lucide-react'

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
    <div className='grid sm:grid-cols-1 md:grid-cols-4'>
      <div className='col-span-3 grid grid-cols-1 md:grid-cols-3'>
        <div>
          <Image
            src={doctor.attributes?.image?.data?.attributes?.url}
            width={200}
            height={200}
            alt='doctor-image'
            className='rounded-lg h-[270px] object-cover w-full'
          />
        </div>
        <div className='col-span-2'>
            <h2 className='font-bold text-2xl'>{doctor.attributes.Name}</h2>
            <h2 className='flex gep-2 text-gray-500'>
                <GraduationCap />
                <span>{doctor.attributes?.Year_of_Experience} of experionce</span>
            </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DoctorDetail;
