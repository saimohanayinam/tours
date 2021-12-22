import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours= async()=>{
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours= await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)

      
    }
  }

  useEffect(() => {
    fetchTours();
    },[])

    const removeTour =(id)=>{
      const remove= tours.filter(places => places.id !== id)
      setTours(remove)

    }

  if (!loading) {
    return (
      <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    );
  }

  if (loading) {
    return <Loading />;
  }
}

export default App;
