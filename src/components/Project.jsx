function Project(){
    
    return <div className="w-[300px] rounded">
        <div className="w-[300px] bg-slate-300 overflow-hidden rounded">
            <img className="object-cover" src="https://s3.amazonaws.com/creativetim_bucket/products/587/thumb/opt_mk_react_thumbnail.jpeg?1641895506" alt="" />
        </div>
        <div>
            <div className="flex gap-3 items-center py-3">
                <span className="px-3 py-2 text-sm bg-slate-100 roundes-full text-slate-700">React</span>
                <span className="px-3 py-2 text-sm bg-slate-100 roundes-full text-slate-700">JavaScript</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-800">The World Oasis</h2>
            <p className="text-slate-400 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas possimus consequatur molestiae.</p>
            <div className="flex items-center justify-between  mt-3 ">
                <a className="text-orange-700 underline" target="_blank" href="https://bobbyhadz.com/blog/react-redirect-to-external-url" >learn more</a>
                {/* <a href=""><img className="w-7" src="images/icons8-github-120.png" alt="" />
                </a> */}
            </div>
        </div>
    </div>
}
export default Project