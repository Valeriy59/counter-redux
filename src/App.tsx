import React, {useEffect, useReducer} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    // useEffect(() => {
    //     let newStartValueString = localStorage.getItem('startValue')
    //     let newMaxValueString = localStorage.getItem('maxValue')
    //     if (newStartValueString && newMaxValueString) {
    //         let newStartValue = JSON.parse(newStartValueString)
    //         let newMaxValue = JSON.parse(newMaxValueString)
    //
    //         setCounterSettings({...counterSettings, startValue: newStartValue, maxValue: newMaxValue})
    //         setCounterValue(counterSettings.startValue)
    //     }
    // }, [])
  return (
    <div className={s.App}>
      <Counter/>
      <Settings/>
    </div>
  );
}

export default App;
