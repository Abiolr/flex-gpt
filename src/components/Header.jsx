import logoImg from "/public/logo.png"

export default function Header () {
    return (
        <header>
            <img 
                className="logo"
                src={logoImg}
                alt="logo"
            />
            <p>FlexGPT</p>
        </header>
    )
}