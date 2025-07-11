import "./Entry.css";

export default function Entry(props) {
  return (
    <article className="Entry">
      <img src={props.img.src} alt={props.img.alt}/>

      <section className="Entry_info">
        <img className="marker" src="src/assets/marker.png" alt="Marker icon"/>
        <span>{props.country}</span>
        <a href={props.googleMapsLink} rel="external" target="_blank">
          View in Google Maps
        </a>
        
        <h1>{props.title}</h1>
        <strong>{props.dates}</strong>
        <p>{props.text}</p>
      </section>
    </article>
  );
}