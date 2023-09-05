import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Nav} from "./components/Section/Nav/Nav.tsx";
import {Main} from "./components/Section/Main/Main.tsx";
import {Contacts} from "./components/Section/Contacts/Contacts.tsx";
import {memo, useEffect} from "react";
import {getAuthMeTC} from "./redux/reducers/authReducer.ts";
import {useAppDispatch} from "./hooks/useAppDispatch.ts";
import {Logout} from "./components/Section/Main/Logout/Logout.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {useStatePageSize} from "./hooks/useStatePageSize.ts";


export const App = memo(() => {

    const dispatch = useAppDispatch()
    const {
        section,
        setSection,
        showContacts
    } = useStatePageSize()

    useEffect(() => {
        dispatch(getAuthMeTC())
    }, [dispatch])

    const changePageLayout = (value: SectionCSSType) => {
        setSection(value)
    }

    return (
      <div className="App">
          <Header section={section}/>
          <div className={section}>
              <Nav section={section} changePageLayout={changePageLayout} showContacts={showContacts}/>
              <Main section={section} changePageLayout={changePageLayout}/>
              {section === "sectionAll" && window.innerWidth > 630 && <Contacts/>}
          </div>
          <Footer section={section}/>
          {section === "sectionLogout" && <Logout changePageLayout={changePageLayout}/>}
      </div>
    )
})

export type SectionCSSType =
  | "sectionAll"
  | "sectionDialogs"
  | "sectionError"
  | "sectionLogout"