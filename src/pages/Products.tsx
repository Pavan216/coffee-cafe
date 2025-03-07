
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'hot' | 'cold' | 'beans';
  tags: string[];
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Signature Espresso Blend",
      description: "Our flagship blend with notes of chocolate, caramel, and a hint of citrus. Perfect for espresso and milk-based drinks.",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww",
      category: 'beans',
      tags: ['signature', 'espresso', 'blend']
    },
    {
      id: 2,
      name: "Ethiopian Yirgacheffe",
      description: "A single-origin coffee with bright acidity, floral notes, and a clean, tea-like body. Ideal for pour-over brewing.",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
      category: 'beans',
      tags: ['single-origin', 'ethiopian', 'floral']
    },
    {
      id: 3,
      name: "Colombian Supremo",
      description: "Well-balanced medium roast with notes of brown sugar, nuts, and a subtle fruitiness. Versatile for any brewing method.",
      price: "$17.99",
      image: "https://images.unsplash.com/photo-1611854779409-4d2b35cf322c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
      category: 'beans',
      tags: ['colombian', 'medium-roast', 'balanced']
    },
    {
      id: 4,
      name: "Classic Cappuccino",
      description: "Equal parts espresso, steamed milk, and velvety microfoam. The perfect balance of strong coffee and creamy sweetness.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
      category: 'hot',
      tags: ['cappuccino', 'espresso', 'milk', 'classic']
    },
    {
      id: 5,
      name: "Iced Caramel Macchiato",
      description: "Espresso poured over cold milk and vanilla syrup, topped with our house-made caramel sauce.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
      category: 'cold',
      tags: ['iced', 'caramel', 'macchiato', 'sweet']
    },
    {
      id: 6,
      name: "Cold Brew",
      description: "Coffee steeped in cold water for 18 hours, creating a smooth, low-acidity brew with chocolate notes.",
      price: "$4.49",
      image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D",
      category: 'cold',
      tags: ['cold-brew', 'smooth', 'refreshing']
    },
    {
      id: 7,
      name: "Caramel Latte",
      description: "Our signature espresso combined with steamed milk and rich caramel syrup, topped with whipped cream.",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdHRlfGVufDB8fDB8fHww",
      category: 'hot',
      tags: ['latte', 'caramel', 'sweet', 'espresso']
    },
    {
      id: 8,
      name: "Vanilla Nitro Cold Brew",
      description: "Our signature cold brew infused with nitrogen for a creamy texture, enhanced with vanilla syrup.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1560704429-1b0cf246dbba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D",
      category: 'cold',
      tags: ['nitro', 'cold-brew', 'vanilla', 'creamy']
    },
    {
      id: 9,
      name: "Decaf House Blend",
      description: "All the flavor without the caffeine. A smooth, medium-bodied blend with nutty undertones.",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww",
      category: 'beans',
      tags: ['decaf', 'house-blend', 'smooth']
    },
  ];

  useEffect(() => {
    // Filter products based on search term
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProductsByCategory = (category: string) => {
    if (category === 'all') return filteredProducts;
    return filteredProducts.filter(product => product.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Our Products</h1>
            <p className="text-coffee-medium max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              Explore our range of expertly roasted coffee beans and signature beverages, each crafted to deliver an exceptional experience.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coffee-medium" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 bg-white border-coffee-medium/20 focus:border-coffee-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mx-auto mb-8 bg-coffee-cream">
                <TabsTrigger value="all" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  All Products
                </TabsTrigger>
                <TabsTrigger value="hot" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Hot Drinks
                </TabsTrigger>
                <TabsTrigger value="cold" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Cold Drinks
                </TabsTrigger>
                <TabsTrigger value="beans" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Coffee Beans
                </TabsTrigger>
              </TabsList>

              {/* All Products Tab */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getProductsByCategory('all').map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {getProductsByCategory('all').length === 0 && (
                  <p className="text-center text-coffee-medium py-8">No products found. Try a different search term.</p>
                )}
              </TabsContent>

              {/* Hot Drinks Tab */}
              <TabsContent value="hot" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getProductsByCategory('hot').map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {getProductsByCategory('hot').length === 0 && (
                  <p className="text-center text-coffee-medium py-8">No hot drinks found. Try a different search term.</p>
                )}
              </TabsContent>

              {/* Cold Drinks Tab */}
              <TabsContent value="cold" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getProductsByCategory('cold').map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {getProductsByCategory('cold').length === 0 && (
                  <p className="text-center text-coffee-medium py-8">No cold drinks found. Try a different search term.</p>
                )}
              </TabsContent>

              {/* Coffee Beans Tab */}
              <TabsContent value="beans" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getProductsByCategory('beans').map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {getProductsByCategory('beans').length === 0 && (
                  <p className="text-center text-coffee-medium py-8">No coffee beans found. Try a different search term.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-xl text-coffee-dark">{product.name}</h3>
          <span className="font-semibold text-coffee-medium">{product.price}</span>
        </div>
        <p className="text-coffee-medium mb-4 text-sm">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-coffee-cream text-coffee-dark px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
