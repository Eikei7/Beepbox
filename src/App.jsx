import TrackCard from './TrackCard';
import { tracks } from './tracks';
import * as beepboxLinks from './links.js';

function App() {
  return (
    <div className="container">
      <h1>Beepbox covers by Erik</h1>
      
      <div className="grid-layout">
        {tracks.map((item) => (
          <TrackCard 
            key={item.id} 
            data={item} 
            beepboxUrl={beepboxLinks[item.id]} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;