import Header from "./Header.jsx"
import Entry from "./Entry.jsx";

import entriesData from "./data.js"

export default function App() {
  const entries = entriesData.map(entry =>
    <Entry
      img={entry.img}

      country={entry.country}
      mapsLink={entry.googleMapsLink}
      
      title={entry.title}
      dates={entry.dates}
      text={entry.text}
    />
  );

  return (
    <>
      <Header/>
      <main>
        {entries}
      </main>
    </>
  );
}