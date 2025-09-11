import { Form } from "./components/form"
import { Grid } from "./components/Grid"
import {Container,Title} from "./styles/container"
import GlobalStyle from "./styles/global"
import {ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


export const App = () => {
    return (
        <>
            <Container>
                <Title>USUÁRIOS</Title>
                <Form/>
                <Grid/>
            </Container>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <GlobalStyle/>
        </>
    )
}
