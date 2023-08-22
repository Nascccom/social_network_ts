import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Nav} from "./components/Section/Nav/Nav.tsx";
import {Main} from "./components/Section/Main/Main.tsx";

export const App = () => {
    // const dispatch = useAppDispatch()

    return (
      <div className="App">
          <Header/>
          <div className={'section'}>
              <Nav/>
              <Main/>
              {/*<Contacts/>*/}
          </div>
          {/*<Footer/>*/}
      </div>

    )
}
