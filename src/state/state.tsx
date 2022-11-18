import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";
import {loadState, saveState} from "./localStorage";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})
// достаем данные из localStorage
// const persistedState = loadState();
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// store.subscribe(() => {
//     saveState({
//         maxValue: store.getState().settings.maxValue,
//         startValue: store.getState().settings.startValue,
//         error: store.getState().settings.error
//     });
// });

export type StateType = ReturnType<typeof rootReducer> //типизация state
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store