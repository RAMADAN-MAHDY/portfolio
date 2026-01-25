'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const Vismeforms = () => {
  return (
    <div className='w-full rounded-l-[100px] rounded-r-[100px] h-[200px] relative flex items-center justify-center mt-[20%] sm:mt-[10%]'>
        {/* Image container with fixed dimensions to prevent CLS */}
        <div className='absolute flex items-center justify-center mr-[-39px]' style={{ width: '110px', height: '130px', marginTop: '-48px' }}>
            <Image 
                src='/ramadan-mahdy-fullstack-developer3.jpg' 
                width={110} 
                height={130} 
                className='z-20 object-cover' 
                style={{clipPath: 'polygon(34% 0, 100% 31%, 100% 100%, 34% 66%)'}} 
                alt='Ramadan Mahdy Full-Stack Web Developer Profile Picture' 
                priority
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
            />
        </div>
        <DotLottieReact
            className='absolute h-[200px]'
            src="https://lottie.host/66cb797a-5652-4998-8b9b-42542b1d8b17/z49M1iCPo5.lottie"
            autoplay
        />
    </div>
  );
};

export default Vismeforms;
 
















// import SpiderWeb from '@/app/componant/SpiderWeb';



// const Vismeforms =() =>{

// return(
//     <>
//    <div className="relative mt-[0px] h-[10%] sm:h-[30%]  w-[100%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
// {/* SpiderWeb as background */}
//  <div className="absolute top-0 left-0 w-full h-full -z-10">
//     <SpiderWeb height="100%" />
// </div>
// <div className="visme_d" data-title="Untitled Project" data-url="y4v7xmqg-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="87718"></div>
// <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js" async></script>
// <div className="bg-[#0c0c0c93] w-full h-6 sm:mt-[-90px] mt-[-120px]"></div>
// <div className="bg-[#fa070700] w-full h-full top-0 left-0 z-50 absolute"></div>
// </div>
    
//  </>
// )

// }
// export default Vismeforms ;
