import { Container, Header, SearchInput, MainContent, Form, CardWrapper } from "./styles";
import AnimeCard from "../AnimeCard";

const Main = (props) => {
  return (
    <Container>
      <Header>
        <h1>Search Anime</h1>
      </Header>

      <MainContent>
        <Form onSubmit={props.handleSearch}>
          <SearchInput
            type="text"
            placeholder="Pesquise um anime"
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </Form>

        <CardWrapper>
          {props.animeList.length <= 0 ? (
            <h3>Anime não encontrado</h3>
          ) : (
            props.animeList.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))
          )}
        </CardWrapper>
        
      </MainContent>
    </Container>
  );
};

export default Main;
