import SpiderWeb from '@/app/componant/SpiderWeb';



const Vismeforms =() =>{

return(
    <>
   <main className="relative mt-[0px] h-[20%] sm:h-[30%]  w-[100%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
{/* SpiderWeb as background */}
 <div className="absolute top-0 left-0 w-full h-full -z-10">
    <SpiderWeb height="100%" />
</div>
<div className="visme_d" data-title="Untitled Project" data-url="y4v7xmqg-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="87718"></div>
<script src="https://static-bundles.visme.co/forms/vismeforms-embed.js" async></script>
<div className="bg-[#0c0c0c93] w-full h-6 sm:mt-[-90px] mt-[-120px]"></div>
<div className="bg-[#fa070700] w-full h-full top-0 left-0 z-50 absolute"></div>
</main>
    
 </>
)

}
export default Vismeforms ;