import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { db } from "./utils/firebase";
import { onValue, ref } from "firebase/database";
import { Button } from '@mui/material';
import { Box, IconButton, Typography } from "@mui/material";
import planta from "./assets/planta.svg"
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const [plantStatus, setPlantStatus] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    if (plantStatus?.isDry === false) {
      navigate("/notdry")
    }
    if(plantStatus?.isDry === true){
      navigate("/dry")
    }
  }, [plantStatus]);

  const getStatus = ()=>{
    const query = ref(db);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      // if (snapshot.exists()) {
      //   // Object.values(data).map((project) => {
      //   //   setIsDry((isDry) => [...projects, project]);
      //   // });

      // }
      setPlantStatus(data)
    })
  }

  return (
    <Box sx={{
      backgroundColor: "#EBEDEB", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", paddingBlockStart: "40px", gap:"50px"
  }}>
      <Box sx={{
          backgroundColor: "#95c388", borderRadius: "65px", width: "325px", paddingBlock: "30px", display: "Flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
      }}>
          <Typography color={"#000000"} fontSize="48px" fontFamily={"Exo"} >My Plant</Typography>
          <Typography color={"#FFFFFF"} fontSize="24px" fontWeight={"700"}>Status</Typography>
      </Box>

      <Box>
          <Button sx={{backgroundColor: "#95c388", borderRadius: "65px", color: "#008037", paddingBlock: "17px", paddingInline: "29px"}} onClick={() => getStatus()} disableTouchRipple>
            Atualizar
          </Button>
      </Box>
      <Box display={"flex"} flexDirection="column" marginTop="50px">
          <img src={planta} />
      </Box>
  </Box>
  )
}

export default App
