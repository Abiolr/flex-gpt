import logoImg from "/src/assets/logo.png"

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