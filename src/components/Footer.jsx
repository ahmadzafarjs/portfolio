function Footer(){
    return <footer className="text-center bg-orange-200 py-5 text-slate-700 mt-20">
        <nav className="flex justify-center items-center gap-3 mb-3">
            <a target="_blank" href="https://www.linkedin.com/in/ahmadzafarjs" className="w-8 cursor-pointer">
                <img src="/images/icons8-linkedin-144.png" alt="" />
            </a>
            <a target="_blank" href="https://www.github.com/ahmadzafarjs" className="w-8 cursor-pointer">
                <img src="/images/icons8-github-120.png" alt="" />
            </a>
            <a target="_blank" href="https://www.inatagram.com/ahmadzafarjs" className="w-8 cursor-pointer">
                <img src="/images/icons8-instagram-144.png" alt="" />
            </a>
        </nav>
        <p>&copy; 2024 - Ahmad Zafar</p>
    </footer>
}
export default Footer;