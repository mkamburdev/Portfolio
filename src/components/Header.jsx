import React, { useState } from 'react'
import profile from '../assets/images/profile.webp'

export default function Header() {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div className="pt-10 flex w-11/12 mx-auto">
			<div className="logo flex-none">
				<img src={profile} alt="logo" width={65} className="rounded-xl" />
			</div>
			{/* <div className="bg-gradient bg-red-700 w-full py-32 absolute top-0 left-0 -z-10"></div> */}
			<div className="title ml-5 flex flex-col gap-1 flex-1 m-auto">
				<h1 className="text-xl">muhammed kambur</h1>
				<span className="text-secondary">web developer</span>
			</div>
			<div
				className="openwork flex-none m-auto relative"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className=" absolute animate-ping w-3 h-3 rounded-full bg-greeny"></div>
				<p className="circle w-3 h-3 rounded-full bg-greeny"></p>
				{isHovered && (
					<span className="opentowork absolute -left-32 -top-3 w-28 text-center bg-darkgray text-sm font-light p-2 rounded-md">
						Open to work
					</span>
				)}
			</div>
		</div>
	)
}
