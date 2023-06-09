import * as React from 'react';
import BtnDarkMode from "./components/BtnDarkMode";

export default function App() {

	const [count, setCount] = React.useState(0)

    return (
		<main className="w-full h-screen flex flex-col justify-center items-center gap-4">
			<img src="../src/assets/react.svg" alt="logo" className="w-[150px]"/>
			<h1 className="text-3xl font-bold dark:text-zinc-100">Started Template App</h1>
			<BtnDarkMode />
			<button 
			onClick={()=>setCount( prev => prev + 1)}
			className="flex gap-2 items-center rounded p-3 border border-green-800 dark:border-green-600 text-md dark:text-white">
				Count {count}
			</button>
			<div className='dark:text-white'>
				created by &copy; Sandesta Reza 
			</div>
		</main>
	)
}
