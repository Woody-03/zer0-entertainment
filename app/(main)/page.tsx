import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Featured from '../components/Featured'
import Explore from '../components/Explore'
import Footer from '../components/Footer'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <Hero />
      <Trending />
      <Featured />
      <Explore />
      <Footer />
    </main>
  )
}