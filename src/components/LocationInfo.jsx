import "./style/locationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <article className="location-content">
      <h2 className="location-title">{location?.name}</h2>
      <ul className="location-ul-list">
        <li className="location-li-info">
          <span className="location-span-title">Type: </span>
          <span className="location-span-status">{location?.type}</span>
        </li>
        <li className="location-li-info">
          <span className="location-span-title">Dimension: </span>
          <span className="location-span-status">{location?.dimension}</span>
        </li>
        <li className="location-li-info">
          <span className="location-span-title">Population: </span>
          <span className="location-span-status">
            {location?.residents.length}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
