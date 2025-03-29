"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    // <div className="relative h-screen flex items-center bg-cover bg-center"
    //      style={{
    //        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format')"
    //      }}>
    //   <div className="container mx-auto px-4 z-10">
    //     <div className="max-w-3xl">
    //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-4 animate-fade-in">
    //         全球领先的 RWA 平台
    //       </h1>
    //       <p className="text-xl text-gray-200 font-opensans mb-8 animate-fade-in delay-100">
    //         StableTrust 致力于通过区块链技术实现实体资产的数字化和代币化，为客户提供安全、合规、高效的数字资产解决方案。
    //       </p>
    //       <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
    //         <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
    //           <Link to="/solutions">探索解决方案</Link>
    //         </Button>
    //         <Button asChild variant="outline" className="border-white text-black hover:bg-white/10 px-8 py-6 text-lg">
    //           <Link to="/contact" className="flex items-center">
    //             联系我们 <ArrowRight className="ml-2 h-5 w-5" />
    //           </Link>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="relative bg-gray-50 overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Abstract geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-50 rounded-full opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gray-100 rounded-full opacity-50"></div>
        </div>
      </div>

      <div className="container-wide relative z-1100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="pl-0 md:pl-8 lg:pl-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              全球领先的 RWA 平台
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              <span className="text-[#FF0302]">开启现实世界资产投资新时代</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              StableTrust
              致力于通过区块链技术实现实体资产的数字化和代币化，为客户提供安全、合规、高效的数字资产解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF0302] hover:bg-red-600 text-white px-8 py-6 rounded-lg text-lg">
                <Link to="/solutions">探索解决方案</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[#FF0302] text-[#FF0302] hover:bg-red-50 px-8 py-6 rounded-lg text-lg"
              >
                <Link to="/contact" className="flex items-center">
                  联系我们 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* 3D Cube animation as in the original website */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-red-100 opacity-70 rounded-xl rotate-12 transform-gpu"></div>
                <div className="absolute w-64 h-64 bg-red-200 opacity-70 rounded-xl -rotate-12 transform-gpu"></div>
                <div className="absolute w-64 h-64 bg-red-300 opacity-70 rounded-xl rotate-45 transform-gpu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
