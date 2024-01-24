import './App.css'
import '../src/assets/styles/Follow.css'
import { Header } from './assets/components/Header'
import { Follow } from './assets/components/Follow'
import { Paginas } from './assets/components/Paginas'


export function App() {
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
