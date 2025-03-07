
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'sandwich';
  special?: boolean;
}

const Menu = () => {
  const [cart, setCart] = useState<MenuItem[]>([]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample menu data
  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: 1,
      name: "Espresso",
      description: "A concentrated coffee served in a small, strong shot",
      price: 3.49,
      category: 'coffee'
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam",
      price: 4.99,
      category: 'coffee'
    },
    {
      id: 3,
      name: "Caffè Latte",
      description: "Espresso with steamed milk and a light layer of foam",
      price: 4.79,
      category: 'coffee'
    },
    {
      id: 4,
      name: "Caffè Mocha",
      description: "Espresso with chocolate, steamed milk and whipped cream",
      price: 5.29,
      category: 'coffee'
    },
    {
      id: 5,
      name: "Americano",
      description: "Espresso diluted with hot water",
      price: 3.99,
      category: 'coffee'
    },
    {
      id: 6,
      name: "Caramel Macchiato",
      description: "Vanilla-flavored espresso with caramel and steamed milk",
      price: 5.49,
      category: 'coffee',
      special: true
    },
    // Tea
    {
      id: 7,
      name: "Earl Grey",
      description: "Black tea with bergamot oil",
      price: 3.99,
      category: 'tea'
    },
    {
      id: 8,
      name: "Green Tea",
      description: "Traditional Japanese green tea",
      price: 3.99,
      category: 'tea'
    },
    {
      id: 9,
      name: "Chai Tea Latte",
      description: "Spiced black tea with steamed milk",
      price: 4.79,
      category: 'tea',
      special: true
    },
    {
      id: 10,
      name: "Herbal Infusion",
      description: "Caffeine-free herbal tea blend",
      price: 3.79,
      category: 'tea'
    },
    // Pastries
    {
      id: 11,
      name: "Croissant",
      description: "Buttery, flaky pastry",
      price: 3.29,
      category: 'pastry'
    },
    {
      id: 12,
      name: "Chocolate Muffin",
      description: "Rich chocolate muffin with chocolate chips",
      price: 3.99,
      category: 'pastry'
    },
    {
      id: 13,
      name: "Cinnamon Roll",
      description: "Soft roll with cinnamon and cream cheese frosting",
      price: 4.49,
      category: 'pastry',
      special: true
    },
    {
      id: 14,
      name: "Blueberry Scone",
      description: "Buttery scone with fresh blueberries",
      price: 3.79,
      category: 'pastry'
    },
    // Sandwiches
    {
      id: 15,
      name: "Avocado & Egg",
      description: "Smashed avocado with poached egg on sourdough",
      price: 8.99,
      category: 'sandwich'
    },
    {
      id: 16,
      name: "Turkey & Brie",
      description: "Roasted turkey with brie and cranberry sauce",
      price: 9.49,
      category: 'sandwich',
      special: true
    },
    {
      id: 17,
      name: "Caprese Panini",
      description: "Fresh mozzarella, tomato, and basil on ciabatta",
      price: 8.49,
      category: 'sandwich'
    },
    {
      id: 18,
      name: "Hummus & Veggie Wrap",
      description: "House-made hummus with seasonal vegetables",
      price: 7.99,
      category: 'sandwich'
    },
  ];

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
    toast.success(`Added ${item.name} to cart`);
  };

  const getMenuItemsByCategory = (category: string) => {
    if (category === 'all') return menuItems;
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Our Menu</h1>
            <p className="text-coffee-medium max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              Discover our selection of handcrafted beverages and freshly made food items, prepared with the finest ingredients.
            </p>
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mb-8 bg-coffee-cream p-4 rounded-lg opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingBag className="text-coffee-dark mr-2" size={20} />
                  <span className="font-medium text-coffee-dark">
                    {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-coffee-dark mr-4">
                    Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                  </span>
                  <Button 
                    variant="default" 
                    className="bg-coffee-dark hover:bg-coffee-espresso"
                    onClick={() => {
                      toast.success("Order placed successfully!");
                      setCart([]);
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Menu Tabs */}
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mx-auto mb-8 bg-coffee-cream">
                <TabsTrigger value="all" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  All Items
                </TabsTrigger>
                <TabsTrigger value="coffee" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Coffee
                </TabsTrigger>
                <TabsTrigger value="tea" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Tea
                </TabsTrigger>
                <TabsTrigger value="pastry" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Pastries
                </TabsTrigger>
                <TabsTrigger value="sandwich" className="data-[state=active]:bg-coffee-dark data-[state=active]:text-white">
                  Sandwiches
                </TabsTrigger>
              </TabsList>

              {/* All Items Tab */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getMenuItemsByCategory('all').map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onAddToCart={() => addToCart(item)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Coffee Tab */}
              <TabsContent value="coffee" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getMenuItemsByCategory('coffee').map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onAddToCart={() => addToCart(item)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Tea Tab */}
              <TabsContent value="tea" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getMenuItemsByCategory('tea').map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onAddToCart={() => addToCart(item)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Pastries Tab */}
              <TabsContent value="pastry" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getMenuItemsByCategory('pastry').map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onAddToCart={() => addToCart(item)} 
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Sandwiches Tab */}
              <TabsContent value="sandwich" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getMenuItemsByCategory('sandwich').map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onAddToCart={() => addToCart(item)} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface MenuItemProps {
  item: MenuItem;
  onAddToCart: () => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  return (
    <div className={`p-6 rounded-lg ${item.special ? 'bg-coffee-cream/70' : 'bg-white'} shadow-md hover:shadow-lg transition-all`}>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-coffee-dark flex items-center">
            {item.name}
            {item.special && (
              <span className="ml-2 text-xs bg-coffee-medium text-white px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </h3>
          <p className="text-coffee-medium text-sm mt-1">{item.description}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-medium text-coffee-dark mb-2">${item.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            className="bg-coffee-dark hover:bg-coffee-espresso text-white"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
