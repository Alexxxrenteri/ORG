import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href="https://www.facebook.com/alejandro.renteria.35380">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href="https://www.instagram.com/alexxrenteri/">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alejandro</strong>
    </footer>
}

export default Footer