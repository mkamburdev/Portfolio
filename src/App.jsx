import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Icons from './components/Icons'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<div className="h-svh w-full">
				<Header />
				<Content />
				<Icons />
				<Projects />
				<Footer />
			</div>
		</>
	)
}

export default App
