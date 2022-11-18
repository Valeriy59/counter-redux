import React, {useEffect} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings/Settings";
import {store} from "./state/state";


function App() {
    useEffect(() => {
        store.getState().counter.counterValue = store.getState().settings.startValue
    }, [])

  return (
    <div className={s.App}>
      <Counter/>
      <Settings/>
    </div>
  );
}

export default App;
