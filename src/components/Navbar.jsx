function Navbar() {
    return <header className="border-b-2 border-slate-100 backdrop-blur-sm fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center w-[90vw] m-auto h-20">
        <h1 className="text-orange-500 text-[25px] font-semibold">ahmad.</h1>
        <nav className="flex justify-center items-center gap-3">
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
        </div>
    </header>
}
export default Navbar;