import React, { useState } from 'react';
// import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes, useSubmit} from 'react-router-dom';
import {Error404} from "./pages/Error404";
import {S}  from  './pages/__styles'
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";
import { useWindowSize } from './helpers/useWindowSize';


export const Site = () => {

    const size = useWindowSize()
    // const [burger, setBurger] = useState(false)

    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                {size
                // burger 
                ? 
                <S.Nav>
                        {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                        <S.NavWrapper><NavLink  to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink  to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink  to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink  to={'/protected'}>Protected</NavLink></S.NavWrapper>
                        <div><a href="/page1">aHrefPage1</a></div>
                </S.Nav>
                : 
                <div></div>}               
                <S.Content>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                        <Route path={'/page/error'} element={<Error404 />} />
                        <Route path={'/*'} element={<Navigate to={'/page/error'} />}/>
                    </Routes>

                </S.Content>
            </S.Body>
        </div>
    );
};

