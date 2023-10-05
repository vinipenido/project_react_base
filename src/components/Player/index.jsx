import { Song } from '../Song';
import { Volume } from '../Volume';
import { Controls } from '../Controls';

import './styles.css';
import { VolumeIcon } from '../icons/VolumeIcon';

const Player = () => (
  <section className="player">
    <div className="song-playing">
      <Song
      url=""
      title="GODS PLAN"
      artist="DRAKE"
      />
    </div>
    <div className="control-player">
      <Controls />
    </div>
    <div className="volume-player">
      <Volume />
    </div>
  </section>
);

export { Player };
