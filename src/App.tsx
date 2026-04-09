import { Header } from "./components/ui/Header/Header";

function App() {
  const imgProps = {
    src: 'image3.png'
  }
  return (
    <>
      <Header />
      <div className="card-wrapper">
        <img src={imgProps.src} alt="cat-image" width={225} height={225}/>
        <button>
          Добавить
        </button>
      </div>
    </>
  )
}

export default App
