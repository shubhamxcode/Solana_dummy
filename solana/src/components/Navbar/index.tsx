"use client"
import React, { useState} from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-200">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="ml-2 text-white font-semibold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">TokenReddit</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <Link href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
                  </Link>
                </div>
                
                <div className="relative group">
                  <Link href="/feed" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 relative">
                    Feed
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-200"></span>
                  </Link>
                </div>
                
                <div className="relative group">
                  <Link href='/leaderboard' className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 relative">
                    Leaderboard
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-200"></span>
                  </Link>
                </div>
                
                <div className="relative group">
                  <button className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 relative">
                    Docs
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
                  </button>
                </div>
                
                <div className="relative group">
                  <button className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative">
                    Socials
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-200"></span>
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 backdrop-blur-sm transition-all duration-200 hover:border-gray-600"
              />
            </div>
            
            {/* Login Button */}
            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
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
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
              Home
            </Link>
            <Link href="/feed" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
              Feed
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
              Leaderboard
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
              Docs
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
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
                className="bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full backdrop-blur-sm transition-all duration-200"
              />
            </div>
            <button className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-200">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}