import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'


const Home = () => (<h1>PetList</h1>)
const Labelle = () => (
  <div className="container display-flex align-items-center">
    <div className="card" style={{ width: "18rem", marginBottom: "3rem" }}>
      <div className="card-body">
        <img src={"./labelle.jpg"} className="card-img-top" alt="" style={{ width: "250px", height: "200px" }} />
        <ul className="card-text">
          <li>Name : La belle et la bete </li>
          <li>Race : Film Western</li>
        </ul>
        <button className="btn btn-primary ">
          Adopt
        </button>
      </div>
    </div>
  </div>

)
const Matrix = () => (
  <div className="container">
    <div className="card" style={{ width: "18rem", marginBottom: "3rem" }}>
      <div className="card-body">
        <img src={"matrix.jpg"} className="card-img-top" alt="" style={{ width: "250px", height: "200px" }} />
        <ul className="card-text">
          <li>Name : Titanic</li>
          <li>Race : Film Western</li>
        </ul>
        <button className="btn btn-primary ">
          Adopt
        </button>
      </div>
    </div>
  </div>

)
const Titanic = () => (

  <div className="container">
    <div className="card" style={{ width: "18rem", marginBottom: "3rem" }}>
      <div className="card-body">
        <img src={"titanic.webp"} className="card-img-top" alt="" style={{ width: "250px", height: "200px" }} />
        <ul className="card-text">
          <li>Name : Matrix</li>
          <li>Race : Film Western </li>
        </ul>
        <button className="btn btn-primary ">
          Adopt
        </button>
      </div>
    </div>
  </div>
)

export default function App() {
  return (
    <>
      <nav className="display-flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Titanic">Titanic</Link>
          </li>
          <li>
            <Link to="/labelle">La belle et la bete</Link>
          </li>

          <li>
            <Link to="/matrix">Matrix</Link>
          </li>

        </ul>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/titanic/*" element={<Titanic />} ></Route>
        <Route path="/labelle" element={<Labelle />} />
        <Route path="/matrix" element={<Matrix />} />

      </Routes>


    </>
  )
}
