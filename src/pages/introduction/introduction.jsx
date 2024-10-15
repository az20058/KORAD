import { useState, useRef } from 'react';
import topback from '../../assets/images/introduction/top-back.svg';
import topboxback from '../../assets/images/introduction/topboxback.svg';
import rad from '../../assets/images/introduction/radiation.svg';
import ne from '../../assets/images/introduction/negative.svg';
import politics1 from '../../assets/images/introduction/politics1.svg';
import politics2 from '../../assets/images/introduction/politics2.svg';
import care from '../../assets/images/introduction/care.svg';
import tower from '../../assets/images/introduction/tower.svg';
import promise from '../../assets/images/introduction/promise.svg';
import impossible from '../../assets/images/introduction/impossible.svg';
import graph from '../../assets/images/introduction/graph.svg';
import gback from '../../assets/images/introduction/gback.svg';
import styles from '../../styles/introduction/introduction.module.css';
import ImageLazy from '../../components/imgLazy/ImageLazy';

const images = [
  { id: 1, src: politics1, alt: 'Image 1' },
  { id: 2, src: politics2, alt: 'Image 2' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    const clickedImage = imageRefs.current[index];
    const galleryElement = galleryRef.current;

    if (clickedImage && galleryElement) {
      const offsetLeft = clickedImage.offsetLeft - galleryElement.offsetWidth / 2 + clickedImage.offsetWidth / 2;
      galleryElement.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>
        <p className={styles["top-comment1"]}>소개페이지</p>
        <div className={styles["top-box"]}>
          <ImageLazy src={topboxback} className={styles["topboxback"]} alt="top box background" />
        </div>
        <ImageLazy src={topback} className={styles["topback"]} alt="top back" />
        <p className={styles["top-comment2"]}>
          <span className={styles["highlight1"]}>한국원자력환경공단</span>이 무엇일까요?
        </p>
      </div>

      <div className={styles["rad-container"]}>
        <ImageLazy src={rad} className={styles["rad"]} alt="radiation" />
        <p className={styles["rad-comment"]}>
          방사성폐기물로 인한 위해를 방지하고 공공의 안전과 환경보전에 이바지하기 위하여<br />
          설립된 <span className={styles["highlight2"]}>대한민국 산업통상자원부 산하 위탁집행형 준정부기관을 의미합니다.</span>
        </p>
      </div>

      <div className={styles["ne-container"]}>
        <ImageLazy src={ne} className={styles["ne"]} alt="negative" />
        <p className={styles["ne-comment"]}>
          ‘방사성’과 ‘폐기물’이라는 단어가 주는 <span className={styles["highlight2"]}>부정적 이미지를 해소하고</span><br />
          방사성폐기물처리장을 유치한 경주시민의 요구에 따라
        </p>
      </div>

      <div className={styles["image-container"]}>
        <div className={styles["image-gallery"]} ref={galleryRef}>
          {images.map((image, index) => (
            <ImageLazy 
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <p className={styles["eightcomment"]}>
          한국방사성폐기물관리공단’에서 <span className={styles["highlight2"]}>'한국원자력환경공단'으로</span><br/> 사명변경이 최종 의결되는 과정을 거쳐 명칭이 변경되었습니다.
        </p>
        <div className={styles["image-box"]}>
          <p className={styles["box-comment"]}>2013년 6월 25일 제316회 국회(임시회) 8차 본회의를 통해</p>
        </div>
      </div>

      <div className={styles["care-container"]}>
        <ImageLazy src={care} className={styles["care"]} alt="care" />
        <p className={styles["carecomment"]}>
          고준위 방사성 폐기물 처분시설 부지선정, 기술개발, 인력양성 등<br />
          <span className={styles["highlight3"]}>고준위 방사성 폐기물 관리사업을 책임지고 차질 없이 추진함을 목표로 합니다.</span>
        </p>
      </div>

      <div className={styles["tower-container"]}>
        <ImageLazy src={tower} className={styles["tower"]} alt="tower" />
        <ImageLazy src={promise} className={styles["promise"]} alt="promise" />
        <p className={styles["promisecomment"]}>
          방사성폐기물처분시설 부지확보 사업은<span className={styles["highlight3"]}> 19년간 9차례 실패를 거듭하면서</span><br />
          사업자체도 계속적으로 바뀌게 되며 국가적인 난제였습니다.
        </p>
      </div>

      <div className={styles["i-container"]}>
        <ImageLazy src={impossible} className={styles["impossible"]} alt="impossible" />
        <p className={styles["icomment"]}>
          정부는 2004년 주민투표제를 도입하고<br />
          <span className={styles["highlight3"]}>중저준위방사성폐기물 처분시설 유치지역에 관한 특별법</span>을 제정하였습니다.
        </p>
        <ImageLazy src={graph} className={styles["graph"]} alt="graph" />
        <p className={styles["gcomment"]}>
          2005년 11월 2일 주민투표를 통해<br />
          <span className={styles["highlight3"]}>중저준위방사성폐기물 처분시설 부지가 경주로 확정되어</span>
        </p>
        <ImageLazy src={gback} className={styles["gback"]} alt="gback" />
      </div>
    </div>
  );
}

export default App;
