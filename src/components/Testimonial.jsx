function Testimonial(){
    return <div className="text-center w-[400px] flex flex-col items-center bg-slate-100">
        <p className=" text-lg text-slate-700">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iure veritatis quos ut odit quas, neque voluptas, sequi voluptatum, deleniti ad impedit assumenda eaque a."</p>
        <div className="flex items-center gap-3 mt-6">
            <img className="w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHn4xhhd7Pjr7Z56bIOWuk7xABhvZgt-b6w&usqp=CAU" alt="" />
            <div className="text-left">
                <h4 className="text-slate-900">Ahmad Zafar</h4>
                <p className="font-light text-slate-500 italic text-sm">CEO @ codeBakery</p>
            </div>
        </div>
    </div>
}
export default Testimonial;