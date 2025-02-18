import { Button, ButtonGroup } from "@mui/material";
import { PageContainer, PageHeader, PageHeaderToolbar } from "@toolpad/core";
import { useNavigate } from "react-router";

function CustomPageToolbar(){
    const navigate = useNavigate()

    function handleCreateCard(){
        navigate("/classes")
    }

    function handleDeleteCard(){
        navigate("/classes")
    }
    
    
    return (
        <PageHeaderToolbar>
            <ButtonGroup>
                <Button variant="outlined" onClick={handleCreateCard}>
                    Thêm thẻ mới
                    {/* scan & form? */}
                </Button>
                <Button variant="outlined" onClick={handleDeleteCard}>
                    Xóa thẻ
                    {/* scan & selection? */}
                </Button>
            </ButtonGroup>
        </PageHeaderToolbar>
    )
}

function CustomHeaderToolbar(){
    return(
        <PageHeader slots={{ toolbar: CustomPageToolbar}}/>
    )
}

export default function ClassDetailPage(){
    return(
        <PageContainer slots={{header:CustomHeaderToolbar}}>
        
        </PageContainer>
    )
}