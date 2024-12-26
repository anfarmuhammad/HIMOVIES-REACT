import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer/Footer';

function Home() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/movies")
    }
    return (
        <div>
            <NavBar />
            <div className='w-[100%] h-[50px]'></div>
            <div className="w-full h-[500px] sm:w-[2000px] xl:h-[530px] md:h-[1300px] xl:w-full sm:h-[1000px] bg-zinc-950 flex items-center justify-center">
                <div className="w-[90%] flex pt-20 md:pt-40 lg:pt-52 rounded-md items-center justify-center flex-col h-[90%] bg-white bg-[url('https://getwallpapers.com/wallpaper/full/c/c/c/1363177-top-hd-wallpaper-1920x1080-of-movies-1920x1080-picture.jpg')] bg-cover opacity-75 text-white">
                    <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                        Unlimited movies, TV
                    </h1>
                    <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                        shows and more
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-center mt-4">
                        Start at ₹149. Cancel at any time.
                    </p>
                </div>
            </div>
            <div className="w-full h- sm:w-[2000px] md:h-[270px]  xl:w-full xl:h-[149px] bg-zinc-950 flex items-center justify-center text-white flex-col py-6">
                <p className="text-center px-4">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="flex flex-col sm:flex-row   sm:h-[50px] items-center mt-4">
                    <input
                        className="w-[300px] sm:w-[350px] h-[50px] border-2 border-rose-600 bg-zinc-800 rounded-3xl text-white p-4"
                        type="text"
                        placeholder="Email address"
                    />
                    <button onClick={handleNavigate} className="w-[150px] sm:w-[200px] h-[50px] bg-red-800 mt-4  xl:mt-[15px] sm:mb-[20px] sm:ml-4 rounded-3xl text-white">
                        Get Started
                    </button>
                </div>
                
            </div>
            <Footer/>
           




        </div>
    )
}

export default Home
