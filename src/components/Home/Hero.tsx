
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-cover bg-center" 
         style={{ 
           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format')" 
         }}>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-4 animate-fade-in">
            全球领先的RWA区块链解决方案
          </h1>
          <p className="text-xl text-gray-200 font-opensans mb-8 animate-fade-in delay-100">
            StableTrust致力于通过区块链技术实现实物资产的数字化和通证化，为企业提供安全、合规、高效的区块链资产解决方案。
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              <Link to="/solutions">探索解决方案</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center">
                联系我们 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
