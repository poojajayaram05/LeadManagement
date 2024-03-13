// https://medium.com/nerd-for-tech/react-native-styles-normalization-e8ce77a3110c

import { Dimensions,PixelRatio  } from 'react-native';
const { 
  width: SCREEN_WIDTH, 
  height: SCREEN_HEIGHT 
  } = Dimensions.get('window');


// 414 or 896 is default iphone 11, Need to change these values based on ui ux design 
var designWidth = 360
var designHeight = 800

if (SCREEN_WIDTH > SCREEN_HEIGHT){
  // LANDSCAPE
  designHeight = 360
    designWidth = 800
}
const widthBaseScale = SCREEN_WIDTH / designWidth;
const heightBaseScale = SCREEN_HEIGHT / designHeight;



function normalize(size, based = 'width') {
    const newSize = (based === 'height') ? 
                    size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
   }


   const widthPixel = (size) => {
    
    return normalize(size, 'width');
  };
  //for height  pixel
  const heightPixel = (size) => {
    return normalize(size, 'height');
  };
  //for font  pixel
  const fontPixel = (size) => {
    return heightPixel(size);
  };
  //for Margin and Padding vertical pixel
  const pixelSizeVertical = (size) => {
    return heightPixel(size);
  };
  //for Margin and Padding horizontal pixel
  const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
  };
  export default {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
  };

  /*

  const styles = StyleSheet.create({
 container: {
   paddingHorizontal: pixelSizeHorizontal(15),
   paddingVerticle: pixelSizeVertical(20),
   marginBottom: pixelSizeVertical(10),
   height: heightPixel(200),
   width: widthPixel(200),
 },
 
 title: {
   fontSize: fontPixel(18),
   paddingVerticle: pixelSizeVertical(10),
 },
})

*/