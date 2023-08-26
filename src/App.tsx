import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Nav} from "./components/Section/Nav/Nav.tsx";
import {Main} from "./components/Section/Main/Main.tsx";
import {Contacts} from "./components/Section/Contacts/Contacts.tsx";
import {useEffect} from "react";
import {getAuthMeTC} from "./redux/reducers/authReducer.ts";
import {useAppDispatch} from "./hooks/useAppDispatch.ts";

export const App = () => {
    const dispatch = useAppDispatch()

    // const [section, setSection] = useState<SectionCSSType>("sectionAll")

    useEffect(() => {
        dispatch(getAuthMeTC())
    }, [dispatch])

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