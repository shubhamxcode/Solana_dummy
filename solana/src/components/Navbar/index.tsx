"use client"
import React, { useState} from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">T</span>
              </div>
              <span className="ml-2 text-white font-semibold text-xl">TokenReddit</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                    Home
                  </Link>
                </div>
                
                <div className="relative group">
                  <Link href="/feed" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                    Feed
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="relative group">
                  <Link href='/leaderboard' className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                    Leaderboard
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                    Docs
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                    Socials
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Login */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Users or Markets"
                className="bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            
            {/* Login Button */}
            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/feed" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 text-base font-medium">
              Feed
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Leaderboard
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Docs
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Socials
            </Link>
          </div>
          <div className="border-t border-gray-800 px-2 py-3">
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Users or Markets"
                className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>
            <button className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}