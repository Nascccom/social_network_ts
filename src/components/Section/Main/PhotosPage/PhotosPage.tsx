import style from "./PhotosPage.module.css"
import photo1 from "./../../../../img/photo/photo1.avif"
import photo2 from "./../../../../img/photo/photo2.png"
import photo3 from "./../../../../img/photo/photo3.jpg"
import photo4 from "./../../../../img/photo/photo4.jpeg"
import photo5 from "./../../../../img/photo/photo5.jpg"
import photo6 from "./../../../../img/photo/photo6.jpg"
import photo7 from "./../../../../img/photo/photo7.jpg"
import photo8 from "./../../../../img/photo/photo8.jpg"
import photo9 from "./../../../../img/photo/photo9.webp"
import photo10 from "./../../../../img/photo/photo10.webp"
import photo11 from "./../../../../img/photo/photo11.jpeg"
import photo12 from "./../../../../img/photo/photo12.jpg"
import {ShowMore} from "../../../../common/ShowMore/ShowMore.tsx";
import {memo} from "react";

const PhotosPage = memo(() => {
    return (
      <div className={style.photosPage}>
          <div className={style.wrapper}>
              <img src={photo1} alt="photo1"/>
              <img src={photo2} alt="photo2"/>
              <img src={photo3} alt="photo3"/>
              <img src={photo4} alt="photo4"/>
              <img src={photo5} alt="photo5"/>
              <img src={photo6} alt="photo6"/>
              <img src={photo7} alt="photo7"/>
              <img src={photo8} alt="photo8"/>
              <img src={photo9} alt="photo9"/>
              <img src={photo10} alt="photo10"/>
              <img src={photo11} alt="photo11"/>
              <img src={photo12} alt="photo12"/>


          </div>
          <ShowMore onLoadMore={() => {
          }}/>
      </div>
    );
});

export default PhotosPage
