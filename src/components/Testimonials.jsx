import { useState } from "react";
import Testimonial from "./Testimonial"
function Testimonials(){
    return <section className="flex items-center justify-center flex-col h-[600px]">
        <div className="bg-slate-200 w-[400px] border-2">
        <div className={`grid grid-flow-col translate-x-2`}>
        
        <Testimonial />
        </div>
        </div>
        
    </section>
}
export default Testimonials;