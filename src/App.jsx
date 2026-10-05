import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
}

function EpisodeDetails() {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>watch now</button>
    </section>
  );
}
