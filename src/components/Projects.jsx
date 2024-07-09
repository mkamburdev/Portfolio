import React from 'react'
import antalya from '../assets/images/antalya.jpg'
import converter from '../assets/images/converter.jpg'
import hayadmu from '../assets/images/hayadmu.jpg'
import zuolingo from '../assets/images/zuolingo.jpg'

export default function Projects() {
	return (
		<div className="w-11/12 mx-auto mt-5 max-w-6xl">
			<div className="project-title flex justify-between">
				<span>projects</span>
				<a
					href="https://github.com/mkamburdev"
					target="_blank"
					className="text-secondary"
				>
					all projects &#8227;
				</a>
			</div>
			<div className="grid grid-cols-1 text-center xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-3 gap-y-3 py-4">
				<div className="project-item">
					<a
						href="https://github.com/mkamburdev/Hotel-Resort-Project"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="font-gluten">Hayadmu Hotel</span>
						<img
							src={hayadmu}
							alt="Hayadmu Hotel"
							className="rounded-xl w-full xs:h-96 sm:h-40 object-cover"
						/>
					</a>
				</div>
				<div className="project-item">
					<a
						href="https://github.com/mkamburdev/Antalya-Travel"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="font-gluten">Antalya Travel</span>
						<img
							src={antalya}
							alt="Antalya Travel"
							className="rounded-xl w-full xs:h-96 sm:h-40 object-cover"
						/>
					</a>
				</div>
				<div className="project-item">
					<a
						href="https://github.com/mkamburdev/Zuolingo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="font-gluten">Zuolingo</span>
						<img
							src={zuolingo}
							alt="Zuolingo"
							className="rounded-xl w-full xs:h-96 sm:h-40 object-cover"
						/>
					</a>
				</div>
				<div className="project-item">
					<a
						href="https://github.com/mkamburdev/Currency-Converter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="font-gluten">Currency Converter</span>
						<img
							src={converter}
							alt="Currency Converter"
							className="rounded-xl w-full xs:h-96 sm:h-40 object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
