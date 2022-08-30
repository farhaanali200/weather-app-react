import "./current-weather.css";

const CurrentWeather = () => {
    // return <div className="weather">
    //     <div className="top">
    //         <div>
    //             <div className="city">Belgrade</div>
    //             <div className="weather-discription">Too cold</div>
    //         </div>    
    //     </div>

    //     <div className="bottom">
    //         <p className="temperature">18c</p>

    //     </div>

    //     <div className="details">
    //         <span className="parameter-label">Details</span>
    //     </div>

    //     <div className="parameter-row">
    //         <span className="parameter-label">Feels Like</span>
    //         <span className="parameter-value">22</span>
    //     </div>

    //     <img className="weather-icon" src="icons/01d.png"/>
    // </div>

    return (
        <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">sunny</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="icons/01d.png"
        />
      </div>
      <div className="bottom">
        <p className="temperature">20C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">10 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">20%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">5 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;