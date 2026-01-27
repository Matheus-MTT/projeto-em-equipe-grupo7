import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import { Layout } from "../components/Layout"
import { ClientList } from "../pages/ClientList"

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<AuthPage/>}></Route>
                <Route path="/clientlist" element={<ClientList/>}></Route>
            </Route>
        </Routes>
    )
}