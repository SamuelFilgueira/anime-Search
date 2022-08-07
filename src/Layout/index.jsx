import { useEffect } from "react";
import { useState } from "react";
import { Container } from "./styles";
import Main from "../Main";
import Sidebar from "../Sidebar";

const Layout = () => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [topAnimes, setTopAnimes] = useState([]);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    fetchAnime(search);
  };


  const fetchAnime = async (anime) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`);
    const responseJson = await temp.json();
    setAnimeList(responseJson.data);
  };

  const fetchTopAnimes = async () => {
    const fetchTop = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const res = await fetchTop.json();
    const resData = await res.data;
    setTopAnimes(resData.slice(0,5));
  };


  useEffect(() => {
    setTimeout(() => {
      fetchTopAnimes();
    }, 1000) 
    fetchAnime("");
  }, []);

  return (
    <Container>
      <Sidebar topAnimes={topAnimes} />
      <Main
        setSearch={setSearch}
        handleSearch={handleSearch}
        animeList={animeList}
      />
    </Container>
  );
};

export default Layout;
