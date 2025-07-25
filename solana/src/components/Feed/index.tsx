import { cn } from "@/lib/utils";

// Dummy data for tokenized Reddit posts
const dummyFeedData = [
  {
    id: 1,
    user: {
      name: "CryptoEnthusiast",
      username: "crypto_eth",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    content: "Just discovered this amazing DeFi protocol that's revolutionizing yield farming! The APY is insane and the tokenomics are solid. DYOR but this could be huge! 🚀",
    subreddit: "r/CryptoCurrency",
    timestamp: "2h ago",
    engagement: {
      upvotes: 1247,
      comments: 89,
      shares: 23
    },
    tokenPrice: "$12.45",
    priceChange: "+15.3%",
    marketCap: "$2.1M"
  },
  {
    id: 2,
    user: {
      name: "BlockchainDev",
      username: "dev_blockchain",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    content: "Built my first smart contract on Solana today! The speed and low fees are incredible compared to Ethereum. Here's what I learned about program development...",
    subreddit: "r/solana",
    timestamp: "4h ago",
    engagement: {
      upvotes: 892,
      comments: 156,
      shares: 45
    },
    tokenPrice: "$8.92",
    priceChange: "+7.8%",
    marketCap: "$1.8M"
  },
  {
    id: 3,
    user: {
      name: "NFTCollector",
      username: "nft_whale",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    content: "This NFT collection just dropped and it's already selling out! The art is phenomenal and the utility roadmap looks promising. Floor price went from 0.1 to 2.5 SOL in 2 hours! 🔥",
    subreddit: "r/NFT",
    timestamp: "6h ago",
    engagement: {
      upvotes: 2156,
      comments: 234,
      shares: 78
    },
    tokenPrice: "$25.67",
    priceChange: "+42.1%",
    marketCap: "$5.2M"
  },
  {
    id: 4,
    user: {
      name: "DeFiAnalyst",
      username: "defi_research",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    content: "Deep dive analysis: Why this new AMM protocol could disrupt the entire DeFi landscape. The math behind their constant product formula is genius! 🧮📊",
    subreddit: "r/DeFi",
    timestamp: "8h ago",
    engagement: {
      upvotes: 756,
      comments: 67,
      shares: 34
    },
    tokenPrice: "$6.78",
    priceChange: "-2.4%",
    marketCap: "$987K"
  },
  {
    id: 5,
    user: {
      name: "Web3Builder",
      username: "web3_dev",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    content: "Just launched my first dApp on Solana! It's a decentralized social platform where users can tokenize their posts. Early beta testers welcome! 🌐",
    subreddit: "r/Web3",
    timestamp: "12h ago",
    engagement: {
      upvotes: 445,
      comments: 89,
      shares: 12
    },
    tokenPrice: "$3.21",
    priceChange: "+5.7%",
    marketCap: "$654K"
  }
];

const VerifiedIcon = () => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className="h-4 w-4 text-blue-500"
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
);

const PostCard = ({ post }: { post: typeof dummyFeedData[0] }) => {
  const isPricePositive = post.priceChange.startsWith('+');
  
  return (
    <div className={cn(
      "relative flex w-full max-w-2xl flex-col gap-4 overflow-hidden rounded-lg border border-gray-800 bg-gray-900/90 p-6 backdrop-blur-md",
      "hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 hover:border-gray-700"
    )}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="h-12 w-12 rounded-full border-2 border-gray-700"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">
                {post.user.name}
              </span>
              {post.user.verified && <VerifiedIcon />}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>@{post.user.username}</span>
              <span>•</span>
              <span>{post.subreddit}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        
        {/* Token Price Badge */}
        <div className="flex flex-col items-end">
          <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm font-semibold text-white">
            {post.tokenPrice}
          </div>
          <div className={cn(
            "mt-1 text-xs font-medium",
            isPricePositive ? "text-green-400" : "text-red-400"
          )}>
            {post.priceChange}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-200 leading-relaxed">
        {post.content}
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{post.engagement.upvotes.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span>{post.engagement.comments}</span>
          </div>
          
          <div className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition-colors">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>{post.engagement.shares}</span>
          </div>
        </div>
        
        {/* Market Cap */}
        <div className="text-sm text-gray-400">
          <span className="font-medium">Market Cap:</span> {post.marketCap}
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            TokenReddit Feed
          </h1>
          <p className="text-gray-400">
            Discover and trade tokenized Reddit posts
          </p>
        </div>
        
        {/* Feed */}
        <div className="flex flex-col items-center space-y-6">
          {dummyFeedData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feed