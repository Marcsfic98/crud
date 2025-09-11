import { useEffect, useState } from "react"
import { Form } from "./components/form"
import { Grid } from "./components/Grid"
import {Container,Title} from "./styles/container"
import GlobalStyle from "./styles/global"
import {toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"


export const App = () => {

    const [users, setUsers] = useState([]);
    const [onEdit , setOnEdit] = useState(null);

    const getUsers = async () => {
        try{
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a,b)=> (a.nome > b.nome ? 1 :-1)))
        }catch (error){
            toast.error(error)
        }
    }

    useEffect (()=>{
        getUsers();
    },[setUsers]);

    return (
        <>
            <Container>
                <Title>USUÁRIOS</Title>
                <Form/>
                <Grid users={users} />
            </Container>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <GlobalStyle/>
        </>
    )
}
