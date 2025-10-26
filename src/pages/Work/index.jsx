import BorderReveal from '../../components/BorderRevealEffect'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Reveal from './Reveal'
import StickyScrollSection from './StickyScrollSection'

const WorkPage = () => {
    return (
        <div>
            <Hero>
                ALL
                <br />
                WORK
            </Hero>
            <BorderReveal direction="left" />
            <Reveal />
            <BorderReveal direction="left" />
            <Reveal />
            <BorderReveal direction="left" />
            <Reveal />
            <StickyScrollSection />
            <Footer />
        </div>
    )
}

export default WorkPage
