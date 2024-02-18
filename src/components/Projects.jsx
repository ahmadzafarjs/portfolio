import Project from "./Project"

function Projects(){
    return <section className="flex items-center justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:w-[930px]  place-items-center gap-10">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </section>
}
export default Projects