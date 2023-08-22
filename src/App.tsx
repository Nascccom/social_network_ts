import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Nav} from "./components/Section/Nav.tsx";
import {Main} from "./components/Section/Main.tsx";
import {Contacts} from "./components/Section/Contacts.tsx";

export const App = () => {

    return (
      <div className="App">
          <Header/>
          <div className={'section'}>
              <Nav/>
              <Main/>
              <Contacts/>
          </div>
          <Footer/>
      </div>

    )
}
