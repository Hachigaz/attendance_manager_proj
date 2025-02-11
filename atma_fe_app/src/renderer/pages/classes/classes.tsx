import { TableBarOutlined } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { PageContainer, PageHeader, PageHeaderToolbar } from "@toolpad/core";
import { DataGrid, GridColDef } from '@mui/x-data-grid';


function onChangeSemester(){

}

function onChangeYear(){

}

function CustomToolbar(){
    return (
        <PageHeaderToolbar>
                <Button variant="outlined">
                    Tạo lớp mới
                </Button>
                <FormControl sx={{minWidth:120}}>
                    <InputLabel id="semester-select-label">Học kỳ</InputLabel>
                    <Select
                        labelId="semester-select-label"
                        id="semester-select"
                        label="Học kỳ"
                        value="1"
                        onChange={onChangeSemester}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="1">
                            Học kỳ 1
                        </MenuItem>
                        <MenuItem value="2">
                            Học kỳ 2
                        </MenuItem>
                        <MenuItem value="3">
                            Học kỳ 3
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Năm học</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Năm học"
                    value="10"
                    onChange={onChangeYear}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        <MenuItem value={2025}>2025</MenuItem>
                        <MenuItem value={2026}>2026</MenuItem>
                    </Select>
                </FormControl>
        </PageHeaderToolbar>
    )
}

function CustomHeaderToolbar(){
    return(
        <PageHeader slots={{ toolbar:CustomToolbar }}/>
    )
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
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

export default function ClassesPage(){

    let selected_year = "2024"
    let selected_sem = 1

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