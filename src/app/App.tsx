import React from 'react';
import "./styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;