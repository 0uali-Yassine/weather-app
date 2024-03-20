import React, { useState } from 'react';
import icon1d from '../Assets/01d.png';
import icon1n from '../Assets/01n.png';
import icon2d from '../Assets/02d.png';
import icon2n from '../Assets/02n.png';
import icon3d from '../Assets/03d.png';
import icon3n from '../Assets/03n.png';
import icon4d from '../Assets/04d.png';
import icon4n from '../Assets/04n.png';
import icon9d from '../Assets/09d.png';
import icon9n from '../Assets/09n.png';
import icon10n from '../Assets/10n.png';
import icon10d from '../Assets/10d.png';
import icon11d from '../Assets/11d.png';
import icon11n from '../Assets/11n.png';
import icon13n from '../Assets/13n.png';
import icon13d from '../Assets/13d.png';
import icon50d from '../Assets/50d.png';
import icon50n from '../Assets/50n.png';
const iconMapping = {
    '01d': icon1d,
    '01n': icon1n,
    '02d': icon2d,
    '02n': icon2n,
    '03d': icon3d,
    '03n': icon3n,
    '04d': icon4d,
    '04n': icon4n,
    '09d': icon9d,
    '09n': icon9n,
    '10d': icon10d,
    '10n': icon10n,
    '11d': icon11d,
    '11n': icon11n,
    '13d': icon13d,
    '13n': icon13n,
    '50d': icon50d,
    '50n': icon50n,
  };

function Iconweather({icon}) {
    const iconObject =  iconMapping[icon];

  return (
    <img src={iconObject} alt="weatherlogo" />
  )
}

export default Iconweather;
