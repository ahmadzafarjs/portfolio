import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

function AppLayout() {
    return <>
    <Navbar />
    <main className="w-[90vw] m-auto">
    <Hero />
    <Projects />
    {/* <Testimonials /> */}
    </main>
    <Footer />
    </>
}
export default AppLayout;