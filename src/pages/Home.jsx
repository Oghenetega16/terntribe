import Features from '../components/Features'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <NavBar />
            <HeroSection />
            <Features />
            <Footer />
        </main>
    )
}