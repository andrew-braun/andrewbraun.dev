import { helloWorld } from "./components/HelloWorld"
import { home } from "./pages/home"
import { about } from "./pages/about"
import { contact } from "./pages/contact"
import { error404 } from "./pages/error404"

const routes = {
	"/": home,
	"/about": about,
	"/contact": contact,
	"/404": error404,
}

const root = document.querySelector("#root")

const renderRoute = path => {
	window.history.pushState({}, path, window.location.origin + path)
	root.innerHTML = routes[path] || error404

	document.querySelectorAll('[href^="/"]').forEach(link =>
		link.addEventListener("click", event => {
			event.preventDefault()
			const { pathname: path } = new URL(event.target.href)
			window.history.pushState({ path }, path, path)
			renderRoute(path)
		})
	)
	window.addEventListener("popstate", event =>
		renderRoute(new URL(window.location.href).pathname)
	)
}

renderRoute("/")
