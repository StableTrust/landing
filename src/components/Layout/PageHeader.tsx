import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format",
}) => {
  return (
    <div
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-opensans max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
