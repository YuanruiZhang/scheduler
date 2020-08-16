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
import Button from '@material-ui/core/Button';

function TimeRange(props){
    
    const {selectedRange, handleRange} = props;
    console.log(selectedRange);
    
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
    return (
        <div className="container">
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
            <NextButton text={'Next'}/>   
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


class NextButton extends Component {
    //define event callback as a public class field (using an arrow function)
    handleClick = (event) => {
       console.log("You clicked on", this.props.text) //functions as expected!
    }
  
    render() {
      return (<div>
      <Button variant="contained" color="primary" className="center" onClick={this.handleClick}>{this.props.text}</Button>
        </div>
      )
      
    };
  }

export default TimeRange;

