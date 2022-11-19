import React, {useEffect} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings/Settings";
import {store} from "./state/state";
import {Grid} from "@mui/material";


function App() {
    useEffect(() => {
        store.getState().counter.counterValue = store.getState().settings.startValue
    }, [])

  return (
      <div className={s.App}>
          <Grid container spacing={1}>
              <Grid item xs={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Counter/>
              </Grid>
              <Grid item xs={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Settings/>
              </Grid>
          </Grid>
      </div>
  );
}

export default App;
