import * as React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardShell from "../pages/dashboard/DashboardShell";
import LoginPage from "../pages/login/LoginPage";
import AddProject from "../pages/project/createProject/AddProject";
import ProjectCharts from "../pages/chartsProject/ProjectCharts";
import ProjectsPage from "../pages/project/allProjects/ProjectsPage";
import ProjectDetailsPage from "../pages/project/detailProject/ProjectDetailsPage";
import CreateTaskForm from "../components/task/createTask/CreateTaskForm";
import AddTaskPage from "../pages/task/createTask/AddTaskPage";
import AddBugPage from "../pages/bug/createBug/AddBugPage";

interface IProps {
}

const AppRoutes: React.FC<IProps> = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path="/dashboard" element={<DashboardShell/>}>
                <Route index element={<ProjectCharts/>}/>
                <Route path='add-project' element={<AddProject/>}/>
                <Route path='all-projects' element={<ProjectsPage/>}/>
                <Route path={`project/:id`} element={<ProjectDetailsPage/>}>

                </Route>
                <Route path='add-task' element={<AddTaskPage/>}/>
                <Route path='add-bug' element={<AddBugPage/>}/>

            </Route>
            {/*<Route path='*' element={<PageNotFound/>}/>*/}
        </Routes>
    </BrowserRouter>

}

export default AppRoutes