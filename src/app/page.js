import Footer from './components/Footer'
import NavbarAndHero from './components/NavbarAndHero'
import SearchAndResults from './components/SearchAndResults'
import Statistics from './components/Statistics'

export default function Home() {
  return (
    <main className="">
      <NavbarAndHero />
      <SearchAndResults />
      <Statistics />
      <Footer />
    </main>
  )
}
