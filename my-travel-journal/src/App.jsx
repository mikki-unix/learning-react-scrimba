import Header from "./Header.jsx"
import Entry from "./Entry.jsx";

import entriesData from "./data.js"

export default function App() {
  const entries = entriesData.map(entry =>
    <Entry
      key={entry.id}
      {...entry}
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