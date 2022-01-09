import Category from "../HomeCategories/Category";
import AboutUsMain from "../HomeAboutUs/AboutUsMain";
import { CoverPic } from "../HomeMainSlider/CoverPic";
import MapLocation from "../MapLocation/MapLocation";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// function MapLocation(props) {
//   return (
//     <>
//       <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: 31.200092, lng: 29.918739 }}>
//         {props.isMarkerShown && (
//           <Marker position={{ lat: 31.200092, lng: 29.918739 }} />
//         )}
//       </GoogleMap>
//     </>
//   );
// }

// const WrappedMapLocation = withScriptjs(withGoogleMap(MapLocation));

// const API_KEY = "AIzaSyCGLXdFjFlU_q9DngfS1gV0iTlJIi9CMaM-Uc8dU";

const HomePage = () => {
  return (
    <>
      <CoverPic />
      <AboutUsMain />
      {/* <WrappedMapLocation
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCGLXdFjFlU_q9DngfS1gV0iTlJIi9CMaM`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
      <Category />
      <MapLocation />
    </>
  );
};
export default HomePage;
