import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css";


function App() {
    return (
        <div className="App">
            <div className="hero is-primary">
            <NavBar/>
            </div>
            <ItemListContainer greeting={'BIENVENIDOS'}/>
        </div>
    );
}

export default App;