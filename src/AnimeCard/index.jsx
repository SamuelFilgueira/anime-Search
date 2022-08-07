import { Container, CardImg } from "./styles";

const AnimeCard = (props) => {
  return (
    <Container>
      <a href={props.anime.url} style={{ textDecoration: "none" }}>
        <CardImg src={props.anime.images.jpg.image_url} alt="" />
      </a>

      <p>
        {props.anime.title.length >= 30
          ? `${props.anime.title.slice(0, 30)}...`
          : props.anime.title}
      </p>
      
    </Container>
  );
};

export default AnimeCard;
