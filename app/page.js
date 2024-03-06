'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Hero from './_components/Hero';
import CategorySearch from './_components/CategorySearch';
import DoctorList from './_components/DoctorList';
import { useState, useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((res) => {
      setDoctors(res.data.data);
    });
  };
  return (
    <div>
      {/* Hero Section */}
      {/* <Hero /> */}
      {/* Search bar + Categories */}
      {/* <CategorySearch /> */}
      {/* Popular Doctor List */}
      <DoctorList doctors={doctors}/>
    </div>
  );
}
