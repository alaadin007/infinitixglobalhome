import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Cosmedocs",
    category: "Healthcare Platform",
    description: "Modern aesthetic clinic promoting natural results with a focus on confidence and beauty",
    image: "/cosmedocs-hero.jpg",
    link: "https://cosmedocs.com",
    featured: true
  },
  {
    title: "Harley Street Institute",
    category: "Medical Education",
    description: "Professional medical training institute website",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    link: "https://harleystreetinstitute.com"
  },
  {
    title: "PrivaDr",
    category: "Healthcare Software",
    description: "Private healthcare consultation platform",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634",
    link: "https://privadr.com"
  },
  {
    title: "Online Learning Platform",
    category: "Education Technology",
    description: "Interactive e-learning platform with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    link: "#"
  }
];

export default function Portfolio() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const handleImageError = (projectTitle: string) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Transforming businesses through digital innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
            >
              <Card className={`overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                project.featured ? 'ring-2 ring-primary ring-opacity-50' : ''
              }`}>
                <div className="relative h-64">
                  {!imageError[project.title] ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      onError={() => handleImageError(project.title)}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400">Image not available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4 text-white">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-primary">{project.category}</p>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}