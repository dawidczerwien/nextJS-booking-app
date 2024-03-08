"use client"
import React, {useState, useEffect} from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.data.data);
    });
  };
  return (
    <div>CategoryList</div>
  )
}

export default CategoryList