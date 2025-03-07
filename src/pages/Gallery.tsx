
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'café' | 'coffee' | 'people';
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample gallery data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Café interior with wooden tables and natural light",
      category: 'café'
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Rustic café counter with pastry display",
      category: 'café'
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Outdoor seating area with umbrellas",
      category: 'café'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww",
      alt: "Close-up of latte art in a ceramic cup",
      category: 'coffee'
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Barista carefully preparing pour-over coffee",
      category: 'people'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Coffee beans being roasted in a professional machine",
      category: 'coffee'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
      alt: "Hands sorting freshly harvested coffee beans",
      category: 'coffee'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Barista creating latte art with steady hands",
      category: 'people'
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
      alt: "Corner of the café with bookshelves and cozy seating",
      category: 'café'
    }
  ];

  // Sample blog data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Brewing the Perfect Pour-Over",
      excerpt: "Discover the techniques that elevate a simple pour-over into a transcendent coffee experience.",
      content: `
        <p>There's a reason pour-over coffee has become the method of choice for coffee enthusiasts around the world. When executed with precision and care, it produces a clean, flavorful cup that highlights the unique characteristics of the beans.</p>
        
        <h3>The Essentials</h3>
        <p>To brew the perfect pour-over, start with freshly roasted beans ground to a medium-fine consistency, similar to table salt. The grind is crucial—too fine and the water won't flow properly, too coarse and the extraction will be weak.</p>
        
        <p>Your equipment matters as well. We recommend a ceramic or glass dripper, a gooseneck kettle for precise pouring, a scale for measuring, and high-quality paper filters that have been properly rinsed to remove any paper taste.</p>
        
        <h3>The Technique</h3>
        <p>Begin with the bloom: add just enough water (about twice the weight of your coffee) to saturate all the grounds and let it sit for 30-45 seconds. This allows CO2 to escape and prepares the coffee for even extraction.</p>
        
        <p>After blooming, pour in slow, steady spirals from the center outward, then back to the center. Maintain a consistent flow rate and keep the water level in the dripper steady. The entire brew should take between 2:30 and 3:30, depending on your dose.</p>
        
        <h3>The Variables</h3>
        <p>Water temperature should be between 195°F and 205°F—hot enough to extract properly but not so hot that it burns the coffee. Your water-to-coffee ratio is personal, but we recommend starting with 1:16 (1g of coffee to 16g of water) and adjusting to taste.</p>
        
        <p>At AROMA, our baristas are trained in the art of pour-over, ensuring each cup is brewed to perfection. Join us for a taste, or try these techniques at home to elevate your coffee routine.</p>
      `,
      author: "David Chen",
      date: "June 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      title: "From Seed to Cup: The Journey of Our Coffee",
      excerpt: "Follow the remarkable journey our coffee takes from carefully tended plants to your morning brew.",
      content: `
        <p>Every cup of coffee you enjoy at AROMA represents the culmination of years of careful cultivation, processing, and craftsmanship. The journey begins long before the beans arrive at our roastery, and understanding this process enhances appreciation for this extraordinary beverage.</p>
        
        <h3>The Growing Phase</h3>
        <p>Coffee plants require specific conditions to thrive—elevation, climate, soil composition, and rainfall all contribute to the eventual flavor profile. Most specialty coffee grows at elevations between 1,200 and 2,200 meters above sea level, where cooler temperatures slow development and concentrate flavors.</p>
        
        <p>After planting, coffee trees take 3-5 years to mature and produce their first harvest. Each tree is carefully tended throughout the year, with particular attention during the flowering and fruiting periods.</p>
        
        <h3>Harvesting and Processing</h3>
        <p>When coffee cherries reach their peak ripeness—typically a vibrant red color—they're harvested by hand, with pickers selecting only the perfectly ripe fruits. This labor-intensive process ensures quality from the very beginning.</p>
        
        <p>After harvesting, the coffee undergoes processing to remove the fruit surrounding the seeds (the beans we ultimately roast). The method used—whether washed, natural, or honey process—significantly impacts the final flavor profile.</p>
        
        <h3>The Journey to Our Roastery</h3>
        <p>Once processed and dried, the green coffee is sorted, graded, and packed for export. We work directly with producers whenever possible, developing relationships that ensure both quality coffee and fair compensation.</p>
        
        <p>When the beans arrive at our roastery, our head roaster develops a custom profile for each lot, highlighting its inherent characteristics while ensuring balanced, approachable flavors. Finally, after resting to allow CO2 release, the coffee is ready to be brewed and enjoyed.</p>
        
        <p>Next time you visit AROMA, ask your barista about the origins of the coffee you're drinking. Each bean has a story to tell, and we're passionate about sharing it.</p>
      `,
      author: "Elena Rodriguez",
      date: "July 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMHBsYW50YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "The Perfect Coffee and Food Pairings",
      excerpt: "Elevate your coffee experience by discovering complementary flavor combinations with food.",
      content: `
        <p>Coffee, like wine, has a complex flavor profile that can be enhanced when paired thoughtfully with food. The right pairing creates harmony and balance, while the wrong one can overwhelm either the coffee or the food. Here are our favorite combinations to try at home or during your next visit to AROMA.</p>
        
        <h3>Light, Bright Coffees</h3>
        <p>Our Ethiopian and Kenyan single-origins, with their citrus notes and floral aromatics, pair beautifully with:</p>
        <ul>
          <li>Citrus-based pastries, such as lemon scones or orange-cranberry muffins</li>
          <li>Fresh fruit, particularly berries and stone fruits</li>
          <li>Light, creamy cheeses like ricotta or mascarpone</li>
        </ul>
        
        <h3>Medium, Balanced Coffees</h3>
        <p>Our Colombian and Guatemalan offerings, with their caramel sweetness and medium body, complement:</p>
        <ul>
          <li>Toasted nuts and nut-based pastries</li>
          <li>Milk chocolate</li>
          <li>Vanilla or caramel desserts</li>
          <li>Egg-based breakfast dishes</li>
        </ul>
        
        <h3>Full-Bodied, Bold Coffees</h3>
        <p>Our Signature Espresso Blend and Sumatra single-origin, with their chocolate notes and robust presence, stand up well to:</p>
        <ul>
          <li>Dark chocolate desserts</li>
          <li>Spiced baked goods, like gingerbread or cinnamon rolls</li>
          <li>Savory breakfast sandwiches</li>
          <li>Aged cheeses with intense flavors</li>
        </ul>
        
        <h3>Creating Your Own Pairings</h3>
        <p>When experimenting with coffee and food pairings, consider both complementary and contrasting elements. Sometimes, similar flavor notes create harmony (like a chocolatey coffee with chocolate cake), while other times, contrasting elements create excitement (like a bright, acidic coffee cutting through the richness of a buttery pastry).</p>
        
        <p>At AROMA, we regularly host pairing events where you can explore these combinations guided by our knowledgeable staff. Join us to discover how the right pairing can elevate both your coffee and culinary experience.</p>
      `,
      author: "Sophia Martinez",
      date: "August 12, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGFuZCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
    }
  ];

  const getImagesByCategory = (category: string) => {
    if (category === 'all') return galleryImages;
    return galleryImages.filter(image => image.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Gallery & Blog</h1>
            <p className="text-coffee-medium max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              Visual stories from our café and articles exploring the world of coffee.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mb-24 opacity-0 animate-fade-in animate-delay-200">
            <h2 className="text-3xl font-semibold text-coffee-dark mb-8 text-center">Gallery</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mx-auto mb-8 bg-coffee-cream">
                <TabsTrigger value="all" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  All Photos
                </TabsTrigger>
                <TabsTrigger value="café" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Our Café
                </TabsTrigger>
                <TabsTrigger value="coffee" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Coffee
                </TabsTrigger>
                <TabsTrigger value="people" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Our People
                </TabsTrigger>
              </TabsList>

              {/* All Photos Tab */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getImagesByCategory('all').map((image) => (
                    <GalleryItem 
                      key={image.id} 
                      image={image} 
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Café Tab */}
              <TabsContent value="café" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getImagesByCategory('café').map((image) => (
                    <GalleryItem 
                      key={image.id} 
                      image={image} 
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Coffee Tab */}
              <TabsContent value="coffee" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getImagesByCategory('coffee').map((image) => (
                    <GalleryItem 
                      key={image.id} 
                      image={image} 
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* People Tab */}
              <TabsContent value="people" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getImagesByCategory('people').map((image) => (
                    <GalleryItem 
                      key={image.id} 
                      image={image} 
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Image Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogContent className="max-w-4xl p-1 bg-white">
                {selectedImage && (
                  <div>
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.alt} 
                      className="w-full h-auto rounded"
                    />
                    <div className="p-4">
                      <p className="text-coffee-medium text-sm">{selectedImage.alt}</p>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Blog Section */}
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <h2 className="text-3xl font-semibold text-coffee-dark mb-8 text-center">From Our Blog</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
      onClick={onClick}
    >
      <AspectRatio ratio={4/3}>
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </AspectRatio>
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl text-coffee-dark mb-2">{post.title}</h3>
          <p className="text-coffee-medium mb-4 text-sm">{post.excerpt}</p>
          
          <div className="flex items-center text-coffee-medium text-xs mb-4">
            <div className="flex items-center mr-4">
              <User size={14} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full border-coffee-medium/30 hover:bg-coffee-cream text-coffee-dark">
                <span className="flex items-center">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-coffee-dark mb-2">{post.title}</h2>
                
                <div className="flex items-center text-coffee-medium text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div 
                  className="prose prose-coffee max-w-none text-coffee-medium"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Gallery;
