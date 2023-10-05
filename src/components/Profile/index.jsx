import { Banner } from '../Banner';
import { Heading } from '../Heading';
import { Playlist } from '../Playlist';
import { Highlight } from '../Highlight';

import './styles.css';

const Profile = () => (
  <section className="profile">
    <Banner 
    
    url="https://m.media-amazon.com/images/I/81nFF-rXdRL._AC_SL1500_.jpg"
    description=""
    artist="TRAVIS SCOTT"
    title="ASTROWORLD"
    />
    <section className="section">
      <Heading>
        BOA TARDE!!!
      </Heading>
      <div className="grid highlight-grid">
        <Highlight 
        url="https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        quantity="11"
        title="Paisagem"
        subtitle="Updates"
        />
        <Highlight
        url="https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        quantity="11"
        title="Paisagem"
        subtitle="Updates"
        />
        <Highlight
        url="https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        quantity="11"
        title="Paisagem"
        subtitle="Updates"
        />
        <Highlight
        url="https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        quantity="11"
        title="Paisagem"
        subtitle="Updates"
        />

      </div>
    </section>
    <section className="section playlist-grid">
      <Heading>Make For You</Heading>
      <div className="grid playlist-grid">
      <Playlist 
      url="https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="NADADOR"
      description="MARÍTMO"
      />
      <Playlist 
      url="https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="NADADOR"
      description="MARÍTMO"
      />
      <Playlist 
      url="https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="NADADOR"
      description="MARÍTMO"
      />
      <Playlist 
      url="https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="NADADOR"
      description="MARÍTMO"
      />
      </div>
    </section>
  </section>
);

export { Profile };
