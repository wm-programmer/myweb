import { Follow } from "../components/Follow"
import { Header } from "../components/Header"
import { Paginas } from "../components/Paginas"

export const HomePage = () =>{
    return (
        <>
        <main className='page-content'>
        <Header/>
        <Follow/>
        <Paginas/>
        </main>
        </>
      )
}