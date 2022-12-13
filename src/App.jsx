import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Details } from "./components/pages/Details";
import { NotFound } from "./components/pages/NotFound";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/countries_app"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
