import { Button } from "@mui/material";
import { PageContainer } from "@toolpad/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAppContext } from "Commons/providers/app_provider";

export default function DeviceConnectPage(){
    const navigate = useNavigate()
    const app_provider = useAppContext()

    async function connect_device() {
        app_provider.connectSerial();
    }

    //auto detect the correct port
    useEffect(()=>{
        connect_device()
    },[])
    
    function onClickConnectButton(){
        connect_device()
    }

    return (
        <PageContainer>
            <Button variant="outlined" onClick={onClickConnectButton}>
                Kết nối thiết bị
            </Button>
            <Button variant="outlined" onClick={()=>{navigate("/home")}}>
                Đến trang chủ
            </Button>
        </PageContainer>
    )
}