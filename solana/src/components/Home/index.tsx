import Link from "next/link"
import { ArrowRight, Coins, TrendingUp, Users, Shield, Zap, Globe } from "lucide-react"

const Home = function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              TokenReddit
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Turn Reddit Posts into Tradeable Coins
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              Tokenize any Reddit post on Solana blockchain. Trade, earn rewards, and discover viral content before it explodes. Early buyers and original authors earn based on performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/feed"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Explore Feed
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25">
              Join Waitlist
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-gray-300">Posts Tokenized</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-200">
              <div className="text-3xl font-bold text-cyan-400">$2.5M</div>
              <div className="text-gray-300">Trading Volume</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-200">
              <div className="text-3xl font-bold text-teal-400">5K+</div>
              <div className="text-gray-300">Active Traders</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">How It Works</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Three simple steps to start trading Reddit posts as tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-500/25">
                <Coins className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">1. Tokenize Posts</h3>
              <p className="text-gray-300">
                Select any Reddit post and create a tradeable token on Solana. Use our API or manual interface to mint coins instantly.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-500/25">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">2. Trade & Invest</h3>
              <p className="text-gray-300">
                Buy and sell post tokens using SOL or custom tokens. Early investors benefit from viral content discovery.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-teal-500/25">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">3. Earn Rewards</h3>
              <p className="text-gray-300">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Why TokenReddit?</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              The future of social content monetization on blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Shield, title: "Secure & Transparent", desc: "Built on Solana blockchain with full transparency and security for all transactions.", color: "blue" },
              { Icon: Zap, title: "Lightning Fast", desc: "Instant tokenization and trading with Solana's high-speed, low-cost infrastructure.", color: "cyan" },
              { Icon: TrendingUp, title: "Viral Discovery", desc: "Identify trending content early and profit from viral posts before they explode.", color: "teal" },
              { Icon: Users, title: "Community Driven", desc: "Powered by Reddit's massive community with fair reward distribution for creators.", color: "green" },
              { Icon: Globe, title: "Global Access", desc: "Trade tokenized posts from any subreddit, anywhere in the world, 24/7.", color: "blue" },
              { Icon: Coins, title: "Multiple Rewards", desc: "Earn from trading, holding, creating content, and early discovery of viral posts.", color: "cyan" }
            ].map((feature, i) => (
              <div
                key={i}
                className={`bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-${feature.color}-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-${feature.color}-500/10 group`}
              >
                <feature.Icon className={`w-12 h-12 text-${feature.color}-400 mb-6 group-hover:scale-110 transition-transform duration-200`} />
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Built For Everyone</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Whether you're a crypto native or Reddit enthusiast, TokenReddit is for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Web3 Enthusiasts", desc: "Advanced traders and DeFi users looking for new opportunities in social token trading.", color: "blue" },
              { icon: "📱", title: "Reddit Users", desc: "Content creators and active community members ready to monetize their posts and engagement.", color: "cyan" },
              { icon: "⚡", title: "Early Adopters", desc: "Forward-thinking individuals who want to be first in the social tokenization revolution.", color: "teal" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 text-4xl shadow-lg shadow-${item.color}-500/25`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-12 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Join thousands of users already tokenizing and trading Reddit posts. Be part of the social content revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/feed"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                Explore Feed Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25">
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
