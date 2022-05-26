import Home from "./_home";
import About from "./_about";
import Projects from './_projects'
import Contact from "./_contact";

export default function SwitchComponent({ component }) {
    switch (component) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        case 'projects':
            return <Projects />
        case 'contact':
            return <Contact />
        default:
            return <Home />
    }
}