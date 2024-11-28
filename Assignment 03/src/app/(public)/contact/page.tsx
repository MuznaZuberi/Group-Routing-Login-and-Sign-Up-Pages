export default function Contact() {
	return (
        
        <div>
        	<section className=" body-font relative bg-neutral-200 mt-[100px]">
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
          <h1 className=" text-6xl font-bold font-serif mb-10 text-black">
                             𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black font-serif text-justify">
                             If you have any questions, feedback, or inquiries, feel free to reach out to us! Our dedicated team is here to assist you. Please fill out the form below or contact us directly via email or phone, and we will get back to you as soon as possible
          </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
          <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-black font-bold font-serif">
                                          Name
          </label>
          <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          </div>
          </div>
          <div className="p-2 w-1/2">
          <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-black font-serif font-bold">
                                              Email
          </label>
          <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          </div>
          </div>
          <div className="p-2 w-full">
          <div className="relative">
          <label
              htmlFor="message"
              className="leading-7 text-sm text-black font-serif font-bold"
          >
                                           Message
          </label>
          <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
          />
          </div>
          </div>
          <div className="p-2 w-full">
          <button className="flex mx-auto text-white font-bold font-serif bg-black border-0 py-2 px-8 focus:outline-none  rounded-xl text-lg">
                                         Let's Talk
          </button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-black font-bold font-serif">𝕰𝖒𝖆𝖎𝖑: 𝖒𝖚𝖟𝖓𝖆𝖟𝖚𝖇𝖊𝖗𝖎𝟏𝟐𝟑@𝖌𝖒𝖆𝖎𝖑.𝖈𝖔𝖒</a>
          </div>
          </div>
          </div>
          </div>
          </section>
          </div>
	);
}