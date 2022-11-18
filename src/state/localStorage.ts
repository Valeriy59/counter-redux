import {SettingsStateType} from "./settings-reducer";
import {StateType} from "./state";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('startValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (settings: SettingsStateType) => {
    try {
        const serializedState = JSON.stringify(settings.startValue);
        localStorage.setItem('startValue', serializedState);
    } catch {
        // ignore write errors
    }
};