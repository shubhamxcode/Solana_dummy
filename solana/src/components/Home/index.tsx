import Link from "next/link"
import { ArrowRight, Coins, TrendingUp, Users, Shield, Zap, Globe } from "lucide-react"

const Home = function () {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">TokenReddit</h1>
            <p className="text-xl md:text-2xl mb-4">
              Turn Reddit Posts into Tradeable Coins
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Tokenize any Reddit post on Solana blockchain. Trade, earn rewards, and discover viral content before it explodes. Early buyers and original authors earn based on performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/feed"
              className="group bg-white text-black hover:bg-gray-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Explore Feed
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-black">
              Join Waitlist
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div>Posts Tokenized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">$2.5M</div>
              <div>Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5K+</div>
              <div>Active Traders</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Three simple steps to start trading Reddit posts as tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Coins className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Tokenize Posts</h3>
              <p>
                Select any Reddit post and create a tradeable token on Solana. Use our API or manual interface to mint coins instantly.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Trade & Invest</h3>
              <p>
                Buy and sell post tokens using SOL or custom tokens. Early investors benefit from viral content discovery.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Earn Rewards</h3>
              <p>
                Original authors and early buyers earn rewards based on post performance, engagement, and token trading activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TokenReddit */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why TokenReddit?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The future of social content monetization on blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Shield, Zap, TrendingUp, Users, Globe, Coins].map((Icon, i) => (
              <div
                key={i}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-white transition-all duration-200 hover:shadow-lg"
              >
                <Icon className="w-12 h-12 text-white mb-6" />
                <h3 className="text-xl font-bold mb-4">Feature {i + 1}</h3>
                <p>Some descriptive content about feature {i + 1} and how it helps users.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built For Everyone</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Whether you're a crypto native or Reddit enthusiast, TokenReddit is for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Web3 Enthusiasts" },
              { icon: "📱", title: "Reddit Users" },
              { icon: "⚡", title: "Early Adopters" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>
                  Description for {item.title}. This explains how they can use TokenReddit effectively.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800 p-12 rounded-2xl border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users already tokenizing and trading Reddit posts. Be part of the social content revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/feed"
                className="group bg-white text-black hover:bg-gray-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Explore Feed Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-black">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
