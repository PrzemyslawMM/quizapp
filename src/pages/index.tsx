import React, { useEffect, useState } from "react";

const BaseURL = "https://opentdb.com/api.php?amount=1&type=multiple";

const Home = () => {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [apiData, setApiData] = useState<unknown>(null);

  const handleOnChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.selectedIndex + 9);
  };

  const handleOnClick = async () => {
    try {
      const API = BaseURL + `&difficulty=${difficulty}&category=${category}`;

      const base = await fetch(API);
      const data = await base.json();

      setApiData(data.results[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  const handleOnChangeDifficulty = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(e.target.selectedIndex);
    switch (e.target.selectedIndex) {
      case 0: {
        setDifficulty("easy");
        break;
      }
      case 1: {
        setDifficulty("medium");
        break;
      }
      case 2: {
        setDifficulty("hard");
        break;
      }
    }
  };

  return (
    <>
      <h1>Quiz Game</h1>
      {apiData === null ? (
        <>
          <form>
            <p>Select Category:</p>
            <select onChange={handleOnChangeCategory}>
              <option>General Knowledge</option>
              <option>Books</option>
              <option>Film</option>
              <option>Music</option>
              <option>Musicals & Theatres</option>
              <option>Television</option>
              <option>Video Games</option>
              <option>Boards Games</option>
              <option>Science & Nature</option>
              <option>Computers</option>
              <option>Mathematics</option>
              <option>Mythology</option>
              <option>Sports</option>
              <option>Geography</option>
              <option>History</option>
              <option>Politics</option>
              <option>Art</option>
              <option>Celebrities</option>
              <option>Animals</option>
              <option>Vehicles</option>
              <option>Comics</option>
              <option>Gadgets</option>
              <option>Anime & Manga</option>
              <option>Cartoon & Animations</option>
            </select>
            <p>Select Difficulty:</p>
            <select onChange={handleOnChangeDifficulty}>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <div>
              <button type="button" onClick={handleOnClick}>
                Generate
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
    </>
  );
};

export default Home;
