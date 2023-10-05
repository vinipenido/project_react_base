import './styles.css';

const Song = ({ url, title, artist }) => (
  <div className="song">
    <div className="song-picture">
      <img src={url} alt="" className="picture" />
    </div>
    <div className="song-information">
      <h3 className="title">{title}</h3>
      <h4 className="artist">{artist}</h4>
    </div>
  </div>
);

export { Song };
