import { useState } from 'react';
import './App.css';
import search from './Component/Assets/search.png';
import logo from './Component/Assets/logo.png';
import Weather from './Component/WeatherApp/weather';
import Location from './Component/WeatherApp/Location';
function App() {
  const [name,setName] = useState('casablanca');
  const [data,setData] = useState('casablanca');
  const [adresse,setAdress] = useState('');

  //IP Address API
  async function adressip(){
    try{
      const response = await fetch('https://api.ipify.org');
      const data = await response.text();
      setAdress(data);
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }


  function handlClick(){
    setData(name);
    setName('');
  }
 

  return (
    <div> 
      <nav className='nav' >
        <img src={logo} className='logo' alt='logo'/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'240px',backgroundColor:'#1D1C1F',borderRadius:'20px',padding:'6px'}}>
          <input type='text'  onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your City...' style={{width:'200px',height:'20px',padding:'13px',border:'none',outline:'none',backgroundColor:'transparent',color:'white'}}/>   
          <img src={search} alt='search' onClick={() => handlClick()}  style={{width:'20px',height:'20px',color:'white',marginRight:'10px',cursor:'pointer'}} />
        </div>
        <Location adresse={adresse} setData={setData} setName={setName} onClick={adressip}/>
      </nav>
      <main>
        <Weather data={data} /> 
      </main>
    </div>
  );
}

export default App;
