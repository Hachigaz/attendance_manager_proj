import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PageContainer, PageHeader, PageHeaderToolbar } from "@toolpad/core";
import { useNavigate } from "react-router";

function CustomPageToolbar(){
    const navigate = useNavigate()

    function handleCreateSubject(){
        navigate("/classes")
    }

    function handleDeleteSubject(){
        navigate("/classes")
    }
    
    return (
        <PageHeaderToolbar>
            <ButtonGroup>
                <Button variant="outlined" onClick={handleCreateSubject}>
                    Thêm môn học
                    {/* scan & form? */}
                </Button>
                <Button variant="outlined" color={"error"} onClick={handleDeleteSubject}>
                    Xóa đã chọn
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

export default function SubjectListPage(){
    const columns: GridColDef<(typeof rows)[number]>[] = [
      { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      },
    ];
    
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    
    return(
        <PageContainer slots={{header:CustomHeaderToolbar}}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: {
                    pageSize: 5,
                },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            />
        </PageContainer>
    )
}