import React from 'react'
import { FaAt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'

export default function Icons() {
	return (
		<div className="w-11/12 m-auto flex mb-10 gap-5">
			<a
				href="https://github.com/mkamburdev"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub className="text-2xl" />
			</a>
			<a
				href="https://www.linkedin.com/in/mkambur/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin className="text-2xl" />
			</a>
			<a
				href="mailto:info@mkambur.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaAt className="text-2xl" />
			</a>
			<a
				href="https://twitter.com/mkambur_"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaTwitter className="text-2xl" />
			</a>
			<a
				rel="noopener noreferrer"
				href="https://mkambur.com/resume.pdf"
				target="_blank"
			>
				<TbFileCv className="text-2xl cursor-pointer" />
			</a>
		</div>
	)
}
