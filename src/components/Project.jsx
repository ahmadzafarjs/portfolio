function Project({project}){
    const {projectTitle, projectDescShort, projectDetails: link, projectTags, projectImgCover} = project
    let tags = projectTags.split(" ")
    return <div className="w-[300px] rounded">
        <div className="w-[300px] bg-slate-300 overflow-hidden rounded">
            <img className="object-cover" src={projectImgCover} alt="" />
        </div>
        <div>
            <div className="flex gap-3 items-center py-3">
                {tags.map(tag=> <span key={tag} className="px-3 py-2 text-sm bg-slate-100 roundes-full text-slate-700">{tag}</span>)}
                
            </div>
            <h2 className="text-xl font-semibold text-slate-800">{projectTitle}</h2>
            <p className="text-slate-400 text-base">{projectDescShort}</p>
            <div className="flex items-center justify-between  mt-3 ">
                <a className="text-orange-700 underline" target="_blank" href={link} >learn more ...</a>
                {/* <a href=""><img className="w-7" src="images/icons8-github-120.png" alt="" />
                </a> */}
            </div>
        </div>
    </div>
}
export default Project