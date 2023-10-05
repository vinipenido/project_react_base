import { Button } from '../Button';
import { DotsIcon } from '../icons/DotsIcon';
import { FavoriteIcon } from '../icons/FavoriteIcon';

import './styles.css';

const Banner = ({ url, title, artist, description }) => (
  <div className="banner">
    <div className="banner-image">
      <img src={url} alt="" className="image" />
    </div>

    <div className="featured-info">
      <div className="description">{description}</div>
      <div className="artist">{artist}</div>
      <div className="title">{title}</div>
    </div>

    <div className="banner-action">

      <div className="icon">
        <DotsIcon />
      </div>

      <div className="icon">
        <FavoriteIcon />
      </div>
      
      <Button>Play</Button>
    </div>
  </div>
);

export { Banner };
