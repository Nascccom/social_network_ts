import {FC, memo} from "react";
import {SectionCSSType} from "../../App.tsx";
import style from "./Footer.module.css"
import wolf from "./../../img/logout.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapLocation, faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import {
    faAndroid,
    faApple,
    faWindows,
    faFacebook,
    faTwitter,
    faInstagram,
    faGooglePlusG,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {TitleWithUnderLine} from "../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";

export const Footer: FC<PropsType> = memo(({section}) => {

    if (section === "sectionLogout" || section === "sectionError") {
        return null
    }

    return (
      <div className={style.footer}>
          <div className={style.info}>

              <div className={style.footerColumnButton}>
                  <TitleWithUnderLine title={'Download Apps'}/>
                  <ul>
                      <li>
                          <FontAwesomeIcon className={style.fa} icon={faAndroid} size="lg" pull="left"/>
                          <a href="#">Android</a>
                      </li>
                      <li>
                          <FontAwesomeIcon className={style.fa} icon={faApple} size="lg" pull="left"/>
                          <a href="#">IOS</a>
                      </li>
                      <li>
                          <FontAwesomeIcon className={style.fa} icon={faWindows} size="lg" pull="left"/>
                          <a href="#">Windows</a></li>
                  </ul>
              </div>

              <div className={style.column}>
                  <TitleWithUnderLine title={'Navigate'}/>
                  <ul>
                      <li><a href={"#"}>About</a></li>
                      <li><a href={"#"}>Number Phone</a></li>
                      <li><a href={"#"}>Conditions</a></li>
                      <li><a href={"#"}>RSS Syndication</a></li>
                      <li><a href={"#"}>Sitemap</a></li>
                  </ul>
              </div>


              <div className={style.column}>
                  <TitleWithUnderLine title={'Find Us'}/>
                  <ul>
                      <li>
                          <FontAwesomeIcon icon={faFacebook} size="lg" pull="left"/>
                          <a href={"#"}>Facebook</a>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faGooglePlusG} size="lg" pull="left"/>
                          <a href={"#"}>Google</a>
                      </li>

                      <li>
                          <FontAwesomeIcon icon={faInstagram} size="lg" pull="left"/>
                          <a href={"#"}>Instagram</a>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faTwitter} size="lg" pull="left"/>
                          <a href={"#"}>Twitter</a>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faYoutube} size="lg" pull="left"/>
                          <a href={"#"}>Youtube</a>
                      </li>
                  </ul>
              </div>

              <div className={style.column}>
                  <img src={wolf} alt="wolf"/>
              </div>

              <div className={style.column}>
                  <p>The Social Network, 2023.</p>
                  <ul>
                      <li>
                          <FontAwesomeIcon icon={faMapLocation} size="lg" pull="left"/>
                          Russia, Moscow
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faMobileScreen} size="lg" pull="left"/>
                          +7-960-517-03-87
                      </li>
                  </ul>
              </div>
          </div>


      </div>
    );
});

type PropsType = {
    section: SectionCSSType
}