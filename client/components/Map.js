const Map = ({ loc }) => {
    return (
      <div className="relative h-0 overflow-hidden" style={{ paddingTop: "55%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(loc)}&key=AIzaSyAalbG7anqEHqr_mpvgq2jzqhllQembxSA`}
          title="Google Map"
        />
      </div>
    );
  };
  
  export default Map;
