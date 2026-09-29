"use client";

import React, { useState, useEffect } from "react";
import {
  Eye,
  Sparkles,
  Truck,
  ShieldCheck,
  Leaf,
  Star,
  Mail,
  Phone,
  MapPin,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  price: number;
  customFields?: {
    imageUrl?: string;
    description?: string;
    badge?: string;
    category?: string;
    features?: string[];
  };
}

const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "e317e634-93c7-4aa8-a5e5-5038a122e7f0",
    title: "Apex Carbon Grips & Straps",
    price: 48,
    customFields: {
      badge: "Pro Athlete",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80",
      description:
        "Aerospace carbon fiber weave for maximum barbell grip security and wrist support.",
      category: "Gear",
      stock: 60,
    },
  },
  {
    id: "2c1795b0-33a8-4378-9427-7961c6f3a448",
    title: "HydroFlow Thermal Insulated Flask",
    price: 36,
    customFields: {
      badge: "Essential",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
      description:
        "Triple-wall vacuum insulation keeps ice frozen for 36 hours. 32oz capacity.",
      category: "Hydration",
      stock: 120,
    },
  },
  {
    id: "ef9df9fa-4108-4c89-80a0-e150c0d217b6",
    title: "Elite Pro Resistance Band System",
    price: 65,
    customFields: {
      badge: "Top Seller",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
      description:
        "Multi-layered natural latex with heavy-duty carabiners and door anchor system.",
      category: "Training",
      stock: 85,
    },
  },
];

export default function SingleFileTenantStore() {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="font-sans text-gray-900">
      {/* Announcement Bar */}
      <div className="bg-[#090d16] text-slate-100 py-2 text-center text-sm">
        Welcome to Testing! Free shipping on orders over $99. <a href="#contact" className="underline">Contact us</a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">T</span>
            <span className="text-xl font-semibold">Testing</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#products" className="hover:text-indigo-600">
              Products
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">The Future of Tech Gear</h1>
            <p className="text-xl mb-8">
              Experience boundary-pushing audio precision, smart ergonomics, and aerospace-grade accessories designed for performance.
            </p>
            <a
              href="#products"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Browse Collection <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="flex justify-center">
            <Sparkles className="w-48 h-48 text-indigo-200" />
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">1,200+</h3>
            <p className="text-sm text-gray-600">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">3,500+</h3>
            <p className="text-sm text-gray-600">Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">99%</h3>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={product.customFields?.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  {product.customFields?.badge && (
                    <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      {product.customFields.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                  <p className="text-indigo-600 font-bold mb-2">${product.price}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.customFields?.description?.slice(0, 80)}...
                  </p>
                  {product.customFields?.features?.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-200 text-xs px-2 py-1 rounded mr-1 mb-1"
                    >
                      {feat}
                    </span>
                  ))}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Eye className="mr-1" size={16} /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProduct.customFields?.imageUrl}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-64 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{selectedProduct.title}</h3>
                <p className="text-indigo-600 font-bold text-xl mb-4">${selectedProduct.price}</p>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.customFields?.description}
                </p>
                <h4 className="font-semibold mb-2">Key Specifications</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedProduct.customFields?.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="mr-1 text-green-500" size={16} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                  >
                    <Mail className="mr-1" size={16} /> Inquire
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                  >
                    <ArrowRight className="mr-1" size={16} /> Back to Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <ShieldCheck className="mx-auto text-indigo-600 mb-4" size={48} />
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure durability and performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Truck className="mx-auto text-indigo-600 mb-4" size={48} />
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Get your gear delivered in record time with our reliable logistics partners.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Leaf className="mx-auto text-indigo-600 mb-4" size={48} />
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We prioritize sustainable materials and packaging to protect the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Have questions? Reach out to our concierge team.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded px-3 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p>or contact us directly:</p>
            <p className="mt-2">
              <Mail className="inline mr-1" size={16} /> concierge@auratech.io
            </p>
            <p>
              <Phone className="inline mr-1" size={16} /> +1 (800) 555-0199
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090d16] text-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Testing. All rights reserved.</p>
          <a
            href="https://webblock.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 mt-2 md:mt-0"
          >
            <Zap size={20} className="text-indigo-400" />
            <span className="text-indigo-400">Powered by WebBlock</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
