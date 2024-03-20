import React,{useEffect,useState} from 'react';
import wind from '../Assets/wind.png';
import { IoLocationOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import Iconweather from './Iconweather';
import Nocity from './Nocity';

function Weather({data}) {
   const [newweather,setnewWeather] = useState({});
   const [loading,setLoading] = useState(true);
   const [nocity,setNoCity] = useState(false);
  
   async function fetchWeather(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=857e04425f8cc50fa122f5189380a9eb`)
        const dat = await response.json();
        setnewWeather(dat);
        setLoading(false);
       if(dat.cod === '404'){
        setNoCity(true);
       }else{
        setNoCity(false);
       }
    }catch(error){
        setLoading(true);
        console.log(error)
    }
   } 

   useEffect(()=>{
    fetchWeather();
   },[data]);

   if(loading){
    return <h1 style={{textAlign:'center',marginTop:'10px'}}>Loading...</h1>;
   }

   if(nocity){
    return <Nocity />
   }

  return (
    <div className='container'>
        <section className='sectionOne' style={{display:'flex',flexDirection:'column',width:'281px',borderRadius:'18px',backgroundColor:'#1D1C1F',padding:'9px 12px',height:'244px'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'170px',borderBottom:'1px solid #7B7980',paddingBottom:'10px'}}>
                <h4>Now</h4>
                <div style={{display:'flex',justifyContent:'space-between',width:'220px'}}>
                    <h1 style={{alignSelf:'center',fontSize:'3rem'}}>{(newweather.main.temp - 273.15).toFixed(2)}°c</h1>
                    <Iconweather icon={newweather.weather[0].icon} />
                </div>
                <p>{newweather.weather[0].description}</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px',width:'144px'}}>
                <IoLocationOutline/>
                <p style={{color:'#7B7980'}}>{newweather.name}</p>
            </div>
        </section>
        <section className='sectionTwo'>
            <h4>Todays Highlights</h4>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div className='wind_sunrise' style={{display:'flex',justifyContent:'space-between'}}>
                    <div  style={{width:'296px',height:'164px',marginTop:'12px',padding:'12px',borderRadius:'18px',backgroundColor:'#100e176d'}}>
                        <p style={{color:'#7B7980'}}>Wind</p>
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'13px'}}>
                            <img src={wind} alt="wind" style={{width:'33px',height:'33px',alignSelf:'center'}}/>
                            <div style={{display:'flex',flexDirection:'column',width:'50px',textAlign:'center'}}>
                                <p style={{color:'#7B7980'}}>speed</p>
                                <h4 style={{fontSize:'1.5rem'}}>{newweather.wind.speed}</h4>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',width:'50px',textAlign:'center'}}>
                                <p style={{color:'#7B7980'}}>deg</p>
                                <h4 style={{fontSize:'1.5rem'}}>{newweather.wind.deg}</h4>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',width:'50px',textAlign:'center'}}>
                                <p style={{color:'#7B7980'}}>gust</p>
                                <h4 style={{fontSize:'1.5rem'}}>{newweather.wind.gust}</h4>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'308px',height:'164px',marginTop:'12px',padding:'12px',borderRadius:'18px',backgroundColor:'#100e176d'}}>
                        <p style={{color:'#7B7980'}}>Sunrise & Sunset</p>
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'13px'}}>
                            <div style={{display:'flex',width:'135px',justifyContent:'space-between'}}>
                                < FiSunrise style={{alignSelf:'center'}}/>
                                <div>
                                    <p style={{color:'#7B7980'}}>Sunrise</p>
                                    <h1>{ new Date(newweather.sys.sunrise*1000).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true })}</h1>
                                </div>
                            </div>
                            <div style={{display:'flex',width:'135px',justifyContent:'space-between'}}>
                                < FiSunset style={{alignSelf:'center'}}/>
                                <div>
                                    <p style={{color:'#7B7980'}}>Sunset</p>
                                    <h1>{ new Date(newweather.sys.sunset*1000).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true })}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='extra' style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{display:'flex',justifyContent:'space-between',width:'296px',height:'164px',marginTop:'12px',borderRadius:'18px'}}>
                        <div style={{width:'146px',height:'120px',borderRadius:'18px',padding:'12px',backgroundColor:'#100e176d'}}>
                            <p>Humidity</p>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <WiHumidity style={{fontSize:'2rem'}}/>
                                <h1>{newweather.main.humidity}%</h1>
                            </div>
                        </div>
                        <div style={{width:'146px',height:'120px',borderRadius:'18px',padding:'12px',backgroundColor:'#100e176d'}}>
                             <p>Pressure</p>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <GiPressureCooker style={{fontSize:'2rem'}}/>
                                <h1>{newweather.main.pressure}hPa</h1>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'296px',height:'164px',marginTop:'12px',borderRadius:'18px'}}>
                        <div style={{width:'146px',height:'120px',borderRadius:'18px',padding:'12px',backgroundColor:'#100e176d'}}>
                            <p>Visibility</p>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <MdOutlineVisibility style={{fontSize:'2rem'}}/>
                                <h1>{newweather.visibility <= 999 ? newweather.visibility : (newweather.visibility/1000).toFixed(1) + 'km'}</h1>
                            </div>
                        </div>
                        <div style={{width:'146px',height:'120px',borderRadius:'18px',padding:'12px',backgroundColor:'#100e176d'}}>
                             <p>Feels Like</p>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <FaTemperatureLow style={{fontSize:'2rem'}}/>
                                <h1>{(newweather.main.feels_like - 273.15).toFixed(2)}°c</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Weather;
