import {Provider} from 'react-redux'
import { Outlet } from "react-router-dom";

import store from "../app/store";
import Header from "./Header";
import HeaderToday from "./HeaderToday";
import Navigation from "./Navigation";
import ErrorBoundary from "./ErrorBoundary"

export default function AppLayout() {
 
  return (<>
   <Header /> 
  <Provider store={store}> <ErrorBoundary fallback={<div className="text-center py-10 text-red-400">
      Oops! Something broke🚨 <button onClick={() => window.location.reload()}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded"> Reload Page </button></div>}>
 <HeaderToday/> <Outlet/></ErrorBoundary> </Provider>
   <Navigation/> 
            </>);
 }
