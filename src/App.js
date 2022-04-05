import Title from './components/Title'
import Banner from './components/Banner'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title firstline="Creativity" secondline="meets technology" />
      </div>

      <Banner />

      <div className="container">
        <Title firstline="Have an idea?" secondline="hello@cyrilgouv.com" />
      </div>
    </div>
  )
}

export default App
