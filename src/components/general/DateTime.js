import React, {useState, useEffect} from 'react'
import moment from 'moment';


const getCurrentDate = () => {
    let momentDate = moment().format();
    return momentDate.split('T')[0];
}

const initialTime = () =>{
    let momentTime = moment().format("HH");

    let time = `${momentTime}:00`;
    time = new moment(time, 'HH:mm');
    time = time.add(2, 'hours');

    return time.format('hh:mm A');
}

export {getCurrentDate, 
        initialTime}
