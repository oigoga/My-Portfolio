import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Home() {
  return (
    <main>
      <nav className="flex justify-center gap-10 mt-5">
       <button className="bg-grey border border-orange rounded-full px-2 py-2 h-12 w-12 flex justify-center items-center">
      <FaLinkedinIn className="text-gray3"/>
       </button>
       <button className="bg-grey border border-orange rounded-full px-2 py-2 h-12 w-12 flex justify-center items-center">
      <FaGithub className="text-gray3"/>
       </button>
       <button className="bg-grey border border-orange rounded-full px-2 py-2 h-12 w-12 flex justify-center items-center">
      <FaTwitter className="text-gray3"/>
       </button>
       <button className="bg-grey border border-orange rounded-full px-2 py-2 h-12 w-12 flex justify-center items-center">
      <p className="text-gray3 font-bold font-urbanist">DEV</p>
       </button>
       <button className="bg-grey border border-orange rounded-full px-2 py-2 h-12 w-12 flex justify-center items-center">
      <MdEmail className="text-gray3 h-1/2 w-1/2"/>
       </button>
      </nav>
      <div className=" min-h-screen flex flex-col gap-10 items-center justify-center font-urbanist bg-black ">
        <div className="bg-grey border border-orange w-full rounded-md py-2  flex flex-col justify-center items-center">
          <h1 className=" font-urbanist font-light text-gray3 text-6xl ">
            Hi there, I'm Oigoga
          </h1>
          
          <p className="font-Urbanist text-2xl text-gray3">A software <span className="line-through">developer</span> baddie </p>

        </div>
        <div className="w-full flex justify-center items-center gap-10 text-gray3">
          <div className="bg-grey border border-orange w-1/2 rounded-md py-2 text-center">About</div>
          <div className="bg-grey border border-orange w-1/2 rounded-md py-2 text-center">Projects </div>
        </div>
      </div>
    </main>
  );
}
