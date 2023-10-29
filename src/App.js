import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useState } from 'react';
import Rating from './components/Rating';
import AddMovie from './components/AddMovie'
function App() {
  
const [simpson , setSimpson]=useState([
  {    
  id: 2,
    firstName : "Bart",
    lastName : "Simpson",
    hobbies: ["skateboard", " painting on school walls"],
    imgUrl:" https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },

  {
    id: 3,
  firstName : "Lisa",
    lastName : "Simpson",
  hobbies : ["read books", " saxophone"],
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IJumzIiubUF5MI2OlyFbxAO6MqTfHTHWa0Eobyo73jtCeeapeDG-631a8lTFvUsLoC8&usqp=CAU"
  },
  {
    id:4,
    firstName : "Homer",
    lastName : "Simpson",
    hobbies : ["eat donuts", " watch the TV", " drink beers"],
    imgUrl:"https://i.dzs.cloud/www.jeune-independant.net/wp-content/uploads/2020/08/arton1888.jpg?w=350"
  },
  {
    id:6,
    firstName : "Charles",
    lastName : "Montgomery Burns",
    hobbies : ["manage the nuclear power plant"],
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26TECSosGkg82uweffTKn4-Q-uZp8QvdPMdNqDlICr1LrZbOvCQuQDdco4p96FQ58grQ&usqp=CAU"
  },
  {
    firstName : "Krusty",
    lastName : "The Clown",
    hobbies : ["make children laugh"],
    imgUrl :"https://c8.alamy.com/compfr/bdch6t/simpsons-maggie-simpson-dans-la-serie-animee-tv-tcf-dessine-par-matt-groening-bdch6t.jpg"
  },
  {
    firstName : "Edna",
    lastName: "Krabappel",
    hobbies : ["teach at school"],
    imgUrl:"https://media.ouest-france.fr/v1/pictures/MjAyMDA1ZTExZDlkOWNhNjk1ZGNhYTU5OGI0MTYyMTVjYmViZDM?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=3b08cb6c5cbd6ee72276146b450c927c02a88cafe25932e0ac10a4899898d9d8"
  }
    ]);
    const [ search , setSearch]= useState("")
    const [rate, setrate]= useState(2)
    const AddSimpson=(newSimpson)=>{
      setSimpson((prevSimpson)=>[...prevSimpson, newSimpson ])
    }
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>
      <Rating setrate={setrate}/>
      <MovieList simpson={simpson} search={search} setSimpson={setSimpson} rate={rate}/>  
      <AddMovie addMovie={AddSimpson}/>
  
    </div>
  );
}
export default App;
