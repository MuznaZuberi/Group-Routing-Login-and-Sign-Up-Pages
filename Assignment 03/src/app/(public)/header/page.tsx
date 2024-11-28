import Link from "next/link";

export default function Header() {
  return (
    
    <div>
        <header className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> 
        <span className="ml-3 text-4xl text-white font-bold font-serif">𝗭𝗘𝗡𝗜𝗧𝗛.</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href = "/" className="mr-5 text-white font-bold font-serif">Home</Link>
        <Link href = "/about" className="mr-5 text-white font-bold font-serif">About</Link>
        <Link href = "/testimonial" className="mr-5 text-white font-bold font-serif">Testimonial</Link>
        <Link href = "/contact" className="mr-5 text-white font-bold font-serif">Contact</Link>
        </nav>
        <Link href = "/login" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none font-bold font-serif rounded-lg text-black mt-4 md:mt-0">
                                               LogIn
        </Link>
        <Link href = "/signup" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none font-bold font-serif rounded-lg text-black mt-4 md:mt-0 ml-3">
                                               SignUp 
        </Link>
        </div>
        </header>
        </div>
  );
}