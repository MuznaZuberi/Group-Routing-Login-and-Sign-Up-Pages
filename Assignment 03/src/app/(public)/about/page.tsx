import Image from "next/image";

export default function About() {
	return (
    
    <div>
    	<section className="text-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-center rounded-xl"
        alt="group-routes_img"
        src={require("/image/about_img.JPG")}
      />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="lg:text-2xl md:text-2xl text-xl mb-4 font-bold text-gray-900">
                 𝕮𝖔𝖒𝖕𝖗𝖊𝖍𝖊𝖓𝖘𝖎𝖛𝖊 𝕴𝖒𝖕𝖑𝖊𝖒𝖊𝖓𝖙𝖆𝖙𝖎𝖔𝖓 𝖔𝖋 𝕲𝖗𝖔𝖚𝖕 𝕽𝖔𝖚𝖙𝖎𝖓𝖌 𝖋𝖔𝖗 𝕾𝖈𝖆𝖑𝖆𝖇𝖑𝖊 𝖂𝖊𝖇 𝕬𝖕𝖕𝖑𝖎𝖈𝖆𝖙𝖎𝖔𝖓𝖘     
      </h1>  
      <p className="mb-8 leading-relaxed text-justify">
                 You have successfully implemented group routing in a web application to streamline navigation and improve code organization. Group routing allows for a cleaner, more maintainable code architecture by structuring related routes under a unified parent. This approach not only simplifies the routing structure, but also improves scalability, making it easier to add new features or update existing ones without breaking the overall navigation flow.
      </p>
      <p className="mb-8 leading-relaxed text-justify">
                 The project focused on using advanced routing techniques to manage nested and dynamic routes efficiently, providing smooth transitions between grouped components. This implementation provides a logical and intuitive navigation structure, resulting in a positive user experience. By implementing best practices for route configuration, this solution provides flexibility for future enhancements while maintaining high performance and code reuse. This professional routing setup is ideal for applications that require complex navigation systems, such as e-commerce platforms, dashboards, and content management systems.
      </p>
      </div>
      </div>
      </section>
      </div>
 );
}