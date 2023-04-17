import './style.css'

function Rodape() {
    return (
    <footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/facebook.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/twitter.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="instagram.svg" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/Logo.svg" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Alura.
        </p>
       </section>
    </footer>)
}

export default Rodape