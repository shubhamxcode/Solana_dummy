const footer=()=>{
    return(
         <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-white">TokenReddit</span>
          </div>
          <p className="text-gray-400 mb-6">
            Tokenizing social content on Solana blockchain
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Telegram</a>
            <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    )
}
export default footer