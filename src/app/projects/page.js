'use client'
import Navbar from '@/app/componant/navbar';
// import styles from '@/app/componant/style/spiderWeb.module.css';
import project from '@/app/componant/projects';
import BookFlip from '@/app/componant/bookFlip';


const Projects = ()=>{

    return (


        <>

                <Navbar/>

                <section id="projects" className="bg-[#2859a305] py-12 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <!-- العنوان --> */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#fff]">مشاريعي</h2>
      <p className="text-[#fff] mt-4">إليك بعض الأعمال التي أنجزتها باستخدام التقنيات الحديثة</p>
    </div>

    {/* <!-- شبكة المشاريع --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* <!-- عنصر مشروع واحد --> */}
      <div className="bg-[#233] shadow-lg rounded-lg overflow-hidden">
        <img src="project-image.jpg" alt="Project 1" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-lg font-semibold  text-[#fff]">مشروع متابعة خط الإنتاج</h3>
          <p className=" text-[#fff] mt-2">نظام متكامل لمتابعة سير الإنتاج داخل المصانع، باستخدام React و Express.</p>
          <div className="mt-4">
            <a href="project-link.com" className="text-blue-600 hover:text-blue-800 font-semibold">عرض المشروع</a>
          </div>
        </div>
      </div>

      {/* <!-- عنصر مشروع آخر --> */}
      <div className="bg-[url('https://img.freepik.com/fotos-premium/patron-hoja-sobre-fondo-blanco-estilo-acuarela-generado-ai-ilustracion-postal-diseno-o-impresion-ia-generativa_185452-3040.jpg')] shadow-lg rounded-lg overflow-hidden">
        <img src="project-image2.jpg" alt="Project 2" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">نظام الأفليت</h3>
          <p className="text-gray-600 mt-2">نظام أفليت مصمم لإدارة وتتبع المسوقين ومنتجاتهم عبر MongoDB و Node.js.</p>
          <div className="mt-4">
            <a href="project-link.com" className="text-blue-600 hover:text-blue-800 font-semibold">عرض المشروع</a>
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


export default Projects;