import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage:"url/img/footer.png" }}>
        <div className='redes'>
            <a href="https://www.facebook.com/alejandro.renteria.35380">
                <img src="/img/facebook.png" alt="Facebook " />
            </a>
            <a href="https://www.instagram.com/alexxrenteri/">
                <img src="/img/instagram.png" alt=" Instagram " />
            </a>
        </div>
       <a>
        <img src="/img/Logo.png" alt="Org" />
        </a> 
        <a className="estilo" href="https://github.com/Alexxxrenteri">
            <h4>Desarrolado por Alejandro</h4>
        </a>
    </footer>
}

export default Footer