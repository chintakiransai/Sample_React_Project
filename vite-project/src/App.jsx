import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import debounce from './debounce';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] =useState('')
  const debounced = debounce(search,500)
  useEffect(()=>{
    fetch('https://data.covid19india.org/data.json').then(res => res.json()).then(
      dataOutput =>setData(dataOutput.statewise))
  },[])
  return (
    <>
    <center>
      <h1>Covid 19 Information Dashboard</h1>
      <input type="text" placeholder='Search State Here ' value = {search} onChange={(e)=>setSearch(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Lastupdatedtime</th>
          </tr>
        </thead>
        <tbody>
        {data.filter(el => el.state.toLowerCase().includes(debounced.toLowerCase())).map(ele => {
          return(
          <tr>
            <td>{ele.state}</td>
            <td>{ele.confirmed}</td>
            <td>{ele.recovered}</td>
            <td>{ele.deaths}</td>
            <td>{ele.active}</td>
            <td>{ele.lastupdatedtime}</td>
          </tr>
        )})}
        </tbody>
      </table>
      </center>
    </>
  )
}

export default App
