'use client'
// import ImageScroll from '@/app/componant/images';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect, useState } from 'react';
// import SpiderWeb from '@/app/componant/SpiderWeb';
// import AboutMyself from '@/app/componant/AboutMyself';
// import TechCube from '@/app/componant/techCube';
// import Navbar from '@/app/componant/navbar';
// import styles from '@/app/componant/style/spiderWeb.module.css';


const project =()=>{

    return (


        <>     
        
                <section id="projects" class="bg-gray-100 py-12 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <!-- العنوان --> */}
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900">مشاريعي</h2>
      <p class="text-gray-600 mt-4">إليك بعض الأعمال التي أنجزتها باستخدام التقنيات الحديثة</p>
    </div>

    {/* <!-- شبكة المشاريع --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* <!-- عنصر مشروع واحد --> */}
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="project-image.jpg" alt="Project 1" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-800">مشروع متابعة خط الإنتاج</h3>
          <p class="text-gray-600 mt-2">نظام متكامل لمتابعة سير الإنتاج داخل المصانع، باستخدام React و Express.</p>
          <div class="mt-4">
            <a href="project-link.com" class="text-blue-600 hover:text-blue-800 font-semibold">عرض المشروع</a>
          </div>
        </div>
      </div>

      {/* <!-- عنصر مشروع آخر --> */}
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="project-image2.jpg" alt="Project 2" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-800">نظام الأفليت</h3>
          <p class="text-gray-600 mt-2">نظام أفليت مصمم لإدارة وتتبع المسوقين ومنتجاتهم عبر MongoDB و Node.js.</p>
          <div class="mt-4">
            <a href="project-link.com" class="text-blue-600 hover:text-blue-800 font-semibold">عرض المشروع</a>
          </div>
        </div>
      </div>

      {/* <!-- إضافة المزيد من المشاريع بنفس الشكل --> */}
    </div>
  </div>
</section>

        </>
              );


}

export default project