import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../components/pages/Error404";
import React from "react";
import { Site } from "../components/Site";
import { Page } from "../components/pages/Page";
import { dataState } from "../data/dataState";
import { ProtectedPage } from "../components/pages/ProtectedPade";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Site/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/page/:id',
                element: (<Page pages={dataState.pages}/>)
            },
            {
                path: '/protected',
                element: 
                    (
                        <ProtectedRoute>
                            <ProtectedPage/>
                        </ProtectedRoute>
                    )
            }
        ]

    }
])