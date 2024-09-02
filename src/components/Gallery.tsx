"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from './ui/input';
import { Label } from './ui/label';


const Gallery = () => {
  const [image, setImage] = useState('');
  let num = 3;
  const items = [
    { id: 1, content: 'Slide 1 Content' },
    { id: 2, content: 'Slide 2 Content' },
    { id: 3, content: 'Slide 3 Content' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white mt-4">
      {/* Top section with Gallery and Add Image buttons */}
      <div className="flex justify-between items-center mb-4">
        <Button className="bg-black text-white px-4 py-2 rounded-lg">
          Gallery
        </Button>
        <div className="flex space-x-4">
          
          <Popover>
            <PopoverTrigger>
              <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">+ Add Image</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" value={image} onChange={(e) => { e.target.value; setImage(image); console.log('uploaded') }}/>
                
              </div>
            </PopoverContent>
          
          </Popover>

          
          <Button onClick={prevSlide} className="bg-gray-700 text-white p-2 rounded-full">
            ←
          </Button>
          <Button onClick={nextSlide} className="bg-gray-700 text-white p-2 rounded-full">
            →
          </Button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full flex-shrink-0">
              <div className="flex justify-center items-center h-64 bg-gray-700 rounded-lg">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
