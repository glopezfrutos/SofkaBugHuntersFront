import * as React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardShell from "../pages/dashboard/DashboardShell";
import LoginPage from "../pages/login/LoginPage";
import AddProject from "../pages/createProject/AddProject";

interface IProps {
}

const AppRoutes: React.FC<IProps> = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardShell/>}>
                {/*<Route index element={</>}/>*/}
                <Route path='add-project' element={<AddProject/>}/>
            </Route>
            {/*<Route path='*' element={<PageNotFound/>}/>*/}
        </Routes>
    </BrowserRouter>

}

export default AppRoutes