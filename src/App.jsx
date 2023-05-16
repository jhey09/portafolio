
import './App.css'
import Header from './componentes/header/header'
import Footer from './componentes/footer/Footer'
import Section from './componentes/sections/SectionMe'
import SectionImg from './componentes/sections/SectionImg'
import SectionSkill from './componentes/sections/sectionSkill'
import SectionProject from './componentes/sections/sectionProject'
SectionProject
function App() {
  
  return (
    <>
      <Header/>
      <SectionImg/>
      <Section/>
      <SectionProject/>
      <SectionSkill/>
      <Footer/>
    </>
  )
}

export default App
