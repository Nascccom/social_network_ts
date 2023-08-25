import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Nav} from "./components/Section/Nav/Nav.tsx";
import {Main} from "./components/Section/Main/Main.tsx";
import {Contacts} from "./components/Section/Contacts/Contacts.tsx";

export const App = () => {
    // const dispatch = useAppDispatch()

    // const [section, setSection] = useState<SectionCSSType>("sectionAll")

    return (
      <div className="App">
          <Header />
          <div className={'sectionAll'}>
              <Nav />
              <Main />
              <Contacts/>
          </div>
          {/*<Footer/>*/}
      </div>
    )
}

export type SectionCSSType =
  | "sectionAll"
  | "sectionMessages"