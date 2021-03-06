import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'fontsource-roboto';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { RangeSlider } from 'rsuite';
import 'rsuite/lib/styles/themes/dark/index.less';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import {useState} from 'react';
import './time.css'
import {Slider} from '@material-ui/core'
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
function TimeRange(props){
    
    const {selectedRange, handleRange} = props;
    
    const marks = [
        {
          value: 0,
          label: '12 AM',
        },
        {
            value: 3,
            label: '3 AM',
        },
        {
            value: 6,
            label: '6 AM',
        },
        {
            value: 9,
            label: '9 AM',
        },
        
        {
            value: 12,
            label: '12 PM',
        },
        {
            value: 15,
            label: '3 PM',
        },
        
        {
            value: 18,
            label: '6 PM',
        },
        {
            value: 21,
            label: '9 PM',
        },
        
        {
            value: 24,
            label: '12 AM',
        },
    ]

    const labelFormat = value => {
        if(value == 0 || value == 24){
            return 12 + " AM"
        }
        if(value == 12){
            return 12 + "PM"
        }
        
        return value > 12 ? (value - 12 ) + ' PM': value + ' AM';

    }
    const handleStyle = {
        color: '#fff',
        fontSize: 12,
        width: 32,
        height: 22
      };
    
    const handleClick = (event) => {
        console.log("You clicked on", this.props.text) //functions as expected!
     }
    return (
        <div className="container d-flex flex-column">
                <h5>When do you want to plan your time? 
                    <FontAwesomeIcon icon={faClock} className="mr-5" /> 
                    Time Selected: {labelFormat(selectedRange[0])} - {labelFormat(selectedRange[1])}
                </h5>
                <div className="mt-5">     
                <Slider
                    value={selectedRange}
                    onChange={handleRange}
                    min={0}
                    max={24}
                    valueLabelDisplay="auto"
                    valueLabelFormat={labelFormat}
                    marks={marks}
                />
                </div>
                <Link to="/calendar" className="center mt-5 ml-auto">
                    <Button variant="contained" color="primary" >Next</Button>
                </Link>

         
        </div>
    )
//            <h5>When do you want to plan your time? <FontAwesomeIcon icon={faClock} className="mr-5" /> Time: {labelFormat(selectedRange[0])} - {labelFormat(selectedRange[1])}</h5>
        

/*
return (
        <div className="container">
         <p>When do you want to plan your time? <FontAwesomeIcon icon={faClock} className="mr-2" /></p>
            <form className="container">
                <div style={{ padding: 20 }}>
                    <RangeSlider
                        value={range}
                        onChange={setRange}
                        min={0}
                        max={24}
                        graduated
                        progress
                        renderMark={mark => {
                        return mark;
                        }}
                    />
                </div>
               
            </form>
        </div>
    )
*/


}

export default TimeRange;

