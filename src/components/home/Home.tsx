import { Button } from "../ui/button";
import { FaAndroid, FaApple } from "react-icons/fa";




export default function Home() {
  const handleDownload = () => {
    // Directly set the file URL
    const apkUrl = "/Klik.apk";
  
    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Klik.apk"); // Sets the download filename
    document.body.appendChild(link);
    link.click();
  
    // Clean up the temporary link element
    document.body.removeChild(link);
  };
  
  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-white to-purple-500 text-transparent bg-clip-text">IND</span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text">IA'S</span> BEST ONLINE GAMING PLATFORM
            </h1>

            <h2 className="text-5xl md:text-7xl font-bold mb-16">
              5+ Crores Daily<br />Winnings
            </h2>

            <p className="text-xl mb-8">Download now and get Rs 10 Bonus</p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <p className="text-4xl font-bold">10+</p>
                <p>Games</p>
              </div>
              <div className="text-center">
                <p className="bg-gradient-to-r from-purple-500 to-purple-600 text-4xl font-bold bg-clip-text text-transparent">200+</p>
                <p>Winners</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">500+</p>
                <p>Happy Customer</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-bold py-6 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90">
                <FaApple className="mr-2 h-5 w-5" />
                DOWNLOAD
              </Button>
              <Button onClick={handleDownload} variant="outline" className="bg-gray-800 text-purple-600 font-bold py-6 px-8 rounded-full border-purple-600 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-400 hover:text-white hover:border-purple-400">
                <FaAndroid className="mr-2 h-5 w-5" />
                DOWNLOAD
              </Button>
            </div>
          </div>
        </section>
  )
}
