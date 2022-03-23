/* eslint-disable react/jsx-no-undef */
import './App.css';
import Countries from './Component/Countries/Countries';
import Header from './Component/Header/Header';




function App() {
    
    return (
        <div className="App">
            <Header></Header>
           <Countries></Countries>
        </div>
    );
}

// function RestCountry() {

// const [country, setCountry] = useState([]);
// useEffect(() => {
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => setCountry(data))


// }, [])

//     return (
//         <div>
//             <h1>Visiting whole world</h1>
//             <h3>Country Length: {country.length}</h3>
//             {
//                 country.map(c => <Something name={c.name.common} capital={c.capital} borders={c.borders}></Something>)
//             }
//         </div>
//     )
// }

// function Something(props){
//     return(
//         <div className='countryDiv'>
//             <h4>Name : {props.name}</h4>
//             <h4>Capital : {props.capital}</h4>
//             <h4>Borders : {props.borders}</h4>
//         </div>
//     )
// }

export default App;
