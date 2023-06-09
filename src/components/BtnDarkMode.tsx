import { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

function BtnDarkMode() {

    const [darkMode, setDarkMode] = useState<boolean>(typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? true : false)
    
    const root = window.document.documentElement
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme: string | null = null;

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        root.classList.add(theme);
    } else {
        root.classList.add(lightTheme)
    }

    const handleDarkMode = () => {
        
        if (theme === darkTheme) {
            root.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme
            setDarkMode(false)
        } else {
            root.classList.replace(lightTheme, darkTheme)
            localStorage.setItem("theme", 'dark')
            setDarkMode(true)
        }
    }

    return (
        <div className="flex">
            <button className='flex gap-2 items-center rounded p-3 bg-green-800 dark:bg-green-600 text-md text-white font-bold hover:bg-green-900' onClick={handleDarkMode}>
                Dark mode
                {
                    darkMode ?
                    <BsFillSunFill className='group-hover:text-slate-300'/>
                    :
                    <BsFillMoonFill className='group-hover:text-slate-300'/>
                }
            </button>            
        </div>
    )
}

export default BtnDarkMode