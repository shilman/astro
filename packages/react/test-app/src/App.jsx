import { Button } from './components/RuxButton'
import { Accordion } from './components/RuxAccordion'
import '../../node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
// import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
function App() {

  return (
    <div className="App">
      <Accordion />
      {/* <Button /> */}
    </div>
  )
}

export default App
