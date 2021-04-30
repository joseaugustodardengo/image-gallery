import { Gallery } from "./components/Gallery";
import './styles/global.scss';

export function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mx-auto">Image Gallery</span>
      </nav>
      <Gallery />
    </div>
  )
}
