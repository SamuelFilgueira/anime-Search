import { Container, Link, Button } from './styles';
import button from '../Assets/menu.png';
import { useState } from 'react';

const Sidebar = ({topAnimes}) => {

    const [active, setActive] = useState(false);

    const Toggle = () => [
        setActive(!active)
    ]

    return (
      <Container>
        <Button src={button} alt="" onClick={Toggle} />

        <div className={active ? "active" : ""} >
          <h1>Top Animes</h1>

          {topAnimes.map((anime) => (
            <Link key={anime.mal_id} href={anime.url}>
              {anime.title}
            </Link>
          ))}
          
        </div>
      </Container>
    );
};

export default Sidebar;