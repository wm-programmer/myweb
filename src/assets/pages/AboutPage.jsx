import { HeaderAbout } from "../components/HeaderAbout"
import { Profile } from "../components/Profile"
import { Experiences } from "../components/Experiences"
import { Skills } from "../components/Skills"

export const AboutPage = () =>{
    return (
        <>
        <main className='page-content-about'>
        <HeaderAbout/>
        <Profile/>
        <Experiences/>
        <Skills/>
        </main>
        </>
      )
}