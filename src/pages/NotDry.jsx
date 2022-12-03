import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ok from "../assets/ok.svg"
import planta from "../assets/planta.svg"
import { useNavigate } from "react-router-dom";
function NotDry() {
    const navigate = useNavigate()
    return (
        <Box sx={{
            backgroundColor: "#EBEDEB", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", paddingBlockStart: "5px", gap:"0px"
        }}>
            <Box sx={{
                display: "flex", alignSelf: "start"
            }}>
                <IconButton onClick={()=> navigate("/")}><ArrowBackIcon /></IconButton>
            </Box>
            <Box sx={{
                backgroundColor: "#95c388", borderRadius: "65px", width: "325px", paddingBlock: "30px", display: "Flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }}>
                <Typography color={"#FFFFFF"} fontSize="24px" >Suas plantas estão bem!</Typography>
                <Typography color={"#FFFFFF"} fontSize="24px">Não é necessário irrigá-las no momento.</Typography>


            </Box>
            <Box display={"flex"} flexDirection="column"  alignSelf="end">
                <img src={ok} />
            </Box>
            <Box display={"flex"}>
                <img src={planta} />
            </Box>
        </Box>
    )

}

export default NotDry