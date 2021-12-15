import React from 'react';
import PropTypes from 'prop-types';

function Device({name, ram, homeButton, touchID, faceID, cpu}){
  // eslint-disable-next-line eqeqeq
  if (homeButton == true){
    homeButton = "있음";
  } else{
    homeButton = "없음";
  }
  return(
    <div>
      <h3>Name : {name}</h3>
      <h3>RAM: {ram}</h3>
      <h3>homeButton: {homeButton}</h3>
      <h3>TouchID: {touchID}</h3>
      <h3>FaceID: {faceID}</h3>
      <h3>CPU: {cpu}</h3>
    </div>
  );
}
Device.defaultProps ={
  cpu : "cpu정보가 없습니다."
};

Device.propTypes= {
  name: PropTypes.string.isRequired,
  ram: PropTypes.number.isRequired,
  homeButton: PropTypes.bool.isRequired,
  touchID: PropTypes.string,
  faceID: PropTypes.string
};

export default Device;
