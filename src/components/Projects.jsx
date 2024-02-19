import { useState } from "react"
import Project from "./Project"


const projectsAPI = [
    {
        img: "https://media.licdn.com/dms/image/D4E2DAQHnrcj92mpzvg/profile-treasury-image-shrink_800_800/0/1706949779953?e=1708876800&v=beta&t=pZ-uNjdbhxnoE1dzAFpy644owPsPA-7Xd4wP-2F94iA",
        title: "World Wise",
        description: "Interactive travel planning app. Select city by clicking on map.",
        tags: ["react", "javascript"],
        learnMore: "https://github.com/ahmadzafarjs/worldWise"
    },
    {
        img: "https://media.licdn.com/dms/image/D4E2DAQH_2s2MQE_Mgw/profile-treasury-image-shrink_800_800/0/1708230139855?e=1708876800&v=beta&t=Kgfaqg-gEy8tkMEEnSY72EN55skzVfZbO1a9lS802M4",
        title: "The Wild Oasis",
        description: "Interactive hotel management app. Employes can add, delete, update cabins and bookings.",
        tags: ["react", "javascript"],
        learnMore: "https://merry-frangipane-209bcf.netlify.app"
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQGiUnLwoJZy2w/feedshare-shrink_2048_1536/0/1708272942736?e=1710979200&v=beta&t=yi8nDtefR7r8gd_bmWfejSedcVn40qLkeD8Mg244fYQ",
        title: "Personal Portfolio",
        description: "Personal Portfolio Website. Showcase my professional work and achievements.",
        tags: ["react", "javascript"],
        learnMore: "https://www.codebakery.online"
    },
]


function Projects(){
    return <section className="flex items-center justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:w-[930px]  place-items-center items-start gap-10">
            {projectsAPI.map(project=> <Project key={project.title} project={project} />)}
        </div>
    </section>
}
export default Projects