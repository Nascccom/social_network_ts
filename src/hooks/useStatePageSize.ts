import {useState} from "react";
import {SectionCSSType} from "../App.tsx";

export const useStatePageSize = () => {
    const [section, setSection] = useState<SectionCSSType>(
      window.innerWidth < 630 ? 'sectionDialogs' : 'sectionAll'
    )
    const [showContacts, setShowContacts] = useState(window.innerWidth <= 630);

    return {section, setSection, showContacts, setShowContacts}
}

