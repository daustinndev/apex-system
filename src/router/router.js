import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Corporation_profile } from '../views/profile';
import { Home } from '../views/home/';
import { Services } from '../views/services';
import { Saved } from '../views/saved';
import { Inventory } from '../views/inventory';
import { Recent } from '../views/recent';
import { Offer } from '../views/offer';
import { Report } from '../views/report';
import { SaleCart } from '../views/saleCart';
import { SignIn } from '../views/login/signIn';
import { NadbarRouterInclude, NavRouterInclude } from './navRouterInclude';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from './protectecRouter';
import { SignUp } from '../views/login/signUp';
import UserProfile from '../views/user';

class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProtectedRoute><NavRouterInclude><Home /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/:id' element={<ProtectedRoute><NadbarRouterInclude><Corporation_profile /></NadbarRouterInclude></ProtectedRoute>} />
                    <Route path='/sale-cart' element={<ProtectedRoute><NavRouterInclude><SaleCart /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/services' element={<ProtectedRoute><NavRouterInclude><Services /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/saved' element={<ProtectedRoute><NavRouterInclude><Saved /></NavRouterInclude></ProtectedRoute>} />

                    <Route path='/inventory' element={<ProtectedRoute><NavRouterInclude><Inventory /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/inventory/:condition' element={<ProtectedRoute><NavRouterInclude><Inventory /></NavRouterInclude></ProtectedRoute>} />

                    <Route path='/recent' element={<ProtectedRoute><NavRouterInclude><Recent /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/offer' element={<ProtectedRoute><NavRouterInclude><Offer /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/report' element={<ProtectedRoute><NavRouterInclude><Report /></NavRouterInclude></ProtectedRoute>} />
                    <Route path='/user/:uid' element={<ProtectedRoute><NavRouterInclude><UserProfile /></NavRouterInclude></ProtectedRoute>} />

                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default router;