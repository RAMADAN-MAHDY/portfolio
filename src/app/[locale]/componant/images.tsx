// components/ImageScroll.js
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const images = [
  { src: '/4723250.jpg', alt: 'Image 1', text: 'Description 1' },
  { src: '/OIP.jpeg', alt: 'Image 2', text: 'Description 2' },
  { src: '/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.avif', alt: 'Image 3', text: 'Description 3' },
];

const ImageScroll = () => {
  return (
    <div className="flex space-x-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0 w-64">
          <Image
            src={image.src}
            alt={image.alt}
            width={256}
            height={256}
            className="rounded-lg"
          />
          <p className="mt-2 text-center">{image.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageScroll;
