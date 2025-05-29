import GitHubLink from "http://github.com/Abiolr"
import LinkedinLink from "http://linkedin.com/in/abiola-raji/"

export default function Footer() {
    return (
        <footer>
            <small>
                © Abiola Raji 2025
                <div>
                    <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <span> | </span>
                    <a href={LinkedinLink} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </small>
        </footer>
    )
}