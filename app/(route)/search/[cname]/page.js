'use client';
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const Search = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((res) =>
      setDoctorList(res.data.data)
    );
  };
  return (
    <div className='mt-5'>
      <DoctorList heading={params.cname} doctors={doctorList} />
    </div>
  );
};

export default Search;
