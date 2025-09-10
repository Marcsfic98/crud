import Container from "./styles/container"
import GlobalStyle from "./styles/global"
import {ToastContainer , toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


export const app = () => {
    return (
        <>
            <Container>

            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <GlobalStyle/>
        </>
    )
}

