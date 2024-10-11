import React, { useEffect } from 'react';
import styles from '../../styles/components/map.module.css';

const Map = () => {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('map'); 
    const options = {
      center: new kakao.maps.LatLng(35.8388735, 129.196647),
      level: 4, 
    };
    const map = new kakao.maps.Map(container, options); 
    const markerPosition = new kakao.maps.LatLng(35.8388735, 129.196647); 
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map); 

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  }, []);

  return (
    <div
      id="map"
      className={styles.map} // 모듈 CSS 클래스 적용
    ></div>
  );
};

export default Map;
