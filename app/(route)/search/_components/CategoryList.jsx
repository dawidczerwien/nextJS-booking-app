"use client"
import React, {useState, useEffect} from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    //getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.data.data);
    });
  };
  return (
    <div className='h-screen fixed mt-5 flex flex-col'>
    <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
    {categoryList&&categoryList.map((item, index) => (
      <CommandItem key={index}>
        <Link href="">
          <label>{item.attributes.Name}</label>
        </Link>
      </CommandItem>
    ))}
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  
  </CommandList>
</Command>

    </div>
  )
}

export default CategoryList