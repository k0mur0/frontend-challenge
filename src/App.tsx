import { Posts } from "./pages/Posts";
import { Header } from "./components/ui/Header/Header";
import { Routes, Route } from "react-router";
import { Favorites } from "./pages/Favorites";


function App() {

  return (
    <>
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Posts/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="*" element={<h1>Ничего не найдено</h1>}/>
          </Routes>
      </main>
    </>
  )
}

export default App
