import * as React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardShell from "../pages/dashboard/DashboardShell";
import LoginPage from "../pages/login/LoginPage";
import AddProject from "../pages/project/createProject/AddProject";
import ProjectCharts from "../pages/chartsProject/ProjectCharts";
import ProjectsPage from "../pages/project/allProjects/ProjectsPage";
import ProjectDetailsPage from "../pages/project/detailProject/ProjectDetailsPage";
import TaskDetailsPage from "../pages/task/detailTask/TaskDetailsPage";
import BugDetailsPage from "../pages/bug/detailBug/BugDetailsPage";
import UserManagement from "../pages/userManagement/UserManagement";

interface IProps {
}

const AppRoutes: React.FC<IProps> = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/usermanagement' element={<UserManagement/>}/>
            <Route path="/dashboard" element={<DashboardShell/>}>
                <Route index element={<ProjectCharts/>}/>
                <Route path='add-project' element={<AddProject/>}/>
                <Route path='all-projects' element={<ProjectsPage/>}/>
                <Route path='project/:projectId' element={<ProjectDetailsPage/>}/>
                <Route path='project/:projectId/task/:taskId' element={<TaskDetailsPage/>}/>
                <Route path='project/:projectId/task/:taskId/bug/:bugId' element={<BugDetailsPage/>}/>
            </Route>
            {/*<Route path='*' element={<PageNotFound/>}/>*/}
        </Routes>
    </BrowserRouter>

}

export default AppRoutes