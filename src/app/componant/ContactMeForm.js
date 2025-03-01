'use client'
import { useState } from 'react'
import { useSelector } from 'react-redux';


export default function ContactMe() {

    const { translations } = useSelector((state) => state.language);
    const [getReq, setGetReq] = useState(false);

  const [data , setData] = useState({
    full_name : "",
    email : "" ,
    phone : "",
    messageText : ""
  })

const handleSupmet = (eo)=>{
eo.preventDefault();

const requestOptions = {
    method: 'POST',
    credentials: "include",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
try {
    fetch(`${process.env.NEXT_PUBLIC_URL}/contact`, requestOptions)
    .then(response => response.json())
    .then(data => {
        setGetReq(data?.message === "تم إرسال الرسالة بنجاح")
            setData({
                full_name : "",
                email : "" ,
                phone : "",
                messageText : ""
              }) ;
            localStorage.setItem("Success", data.Success);
        }
    )
          
} catch (error) {
    console.error('There was an error!', error);
}



} 

if (!translations) {
    return <div>Loading...</div>; 
  }


  return (
    <div className="isolate bg-white px-6 py-24 mt-[150px] sm:py-32 lg:px-8 text-[#fff] ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{translations?.ContactMy?.Contact || "massge"}</h2>
      </div>
      <form onSubmit={handleSupmet} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">
            {translations?.ContactMy?.FullName}
            </label>
            <div className="mt-2.5">
              <input
                required
                id="full-name"
                name="-full-name"
                type="text"
                value={data.full_name}
                autoComplete="given-name"
                onChange={(eo)=> setData({ ...data ,full_name : eo.target.value})}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
            {translations?.ContactMy?.Email}
            </label>
            <div className="mt-2.5">
              <input
                required
                id="email"
                name="email"
                type="email"
                value={data.email}
                autoComplete="email"
                onChange={(eo)=> setData({ ...data ,email : eo.target.value})}

                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">
            {translations?.ContactMy?.phone}
            </label>
            <div className="mt-2.5">
              <input
                required
                id="phone"
                name="phone"
                type="phone"
                value={data.phone}
                autoComplete="phone"
                onChange={(eo)=> setData({ ...data ,phone : eo.target.value})}

                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
            {translations?.ContactMy?.Message}
            </label>
            <div className="mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                value={data.messageText}
                rows={4}
                onChange={(eo)=> setData({ ...data ,messageText : eo.target.value})}

                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
         {getReq && <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {translations?.ContactMy?.follow}
          </button>}
          <button
            type="submit"
            className="block w-full mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {translations?.ContactMy?.Send}
          </button>
        </div>
      </form>
    </div>
  )
}
