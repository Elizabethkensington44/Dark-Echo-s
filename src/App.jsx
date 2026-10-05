import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

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
        <h2>Episode{selectedEpisode.id}</h2>
        <h3> {selectedEpisode.title} </h3>
        <p>{selectedEpisode.description}</p>
        <button>watch now</button>
      </section>
    );
  }

  function EpisodesList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onclick={() => selectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echos</h1>
      </header>
      <main>
        <EpisodesList />
        <EpisodeDetails />
      </main>
    </>
  );
}
