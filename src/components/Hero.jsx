function Hero(){
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("ahmad.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);   
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "ahmad.pdf";
                alink.click();
            });
        });
    };
    return <section className="">
        <div className="h-[650px] flex flex-col justify-center items-center text-center">
            <h1 className="text-[50px] font-bold text-slate-700">I'm <span className="text-orange-300">Ahmad</span></h1>
            <h2 className="text-slate-500 italic text-lg">Web Technologies Developer</h2>
            <div className="flex items-center justify-center gap-5 py-7">
                <img className="sm:w-12 w-10" src="/images/icons8-javascript-96.png" alt="" />
                <img className="sm:w-12 w-10" src="/images/icons8-react-js-80.png" alt="" />
                <img className="sm:w-12 w-10" src="/images/icons8-nodejs-96.png" alt="" />
                <img className="sm:w-12 w-10" src="/images/icons8-tailwind-css-96.png" alt="" />
                <img className="sm:w-12 w-10" src="/images/icons8-database-96.png" alt="" />
            </div>
            <p className="text-slate-400 sm:w-[400px]">I'm a highly motivated and skilled web developer with a deep understanding of modern web technologies and a particular expertise in React.js.</p>
            <div className="flex items-center justify-center gap-5 mt-8">
            <a target="_blank" href="https://www.linkedin.com/in/ahmadzafarjs" className=" bg-orange-600 px-6 rounded text-slate-100 font-semibold cursor-pointer py-3">Hire me</a>
            <button className="text-orange-500 px-6 py-2.5 border-2 border-orange-500 rounded font-semibold" onClick={onButtonClick}>Download CV</button>
            </div>
        </div>
    </section>
}
export default Hero;