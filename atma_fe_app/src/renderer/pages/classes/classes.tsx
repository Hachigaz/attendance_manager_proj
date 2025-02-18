import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PageContainer, PageHeader, PageHeaderToolbar } from "@toolpad/core";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useNavigate } from "react-router";

//icons
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { MouseEventHandler, ReactNode } from "react";

function CustomToolbar(){
    const navigate = useNavigate()
    
    let selected_semester = ""
    function onChangeSemester(e:SelectChangeEvent){
        selected_semester = e.target.value
    }

    let selected_year = ""
    function onChangeYear(e:SelectChangeEvent){
        selected_year = e.target.value
    }
    
    
    return (
        <PageHeaderToolbar>
                <Button variant="outlined" onClick={()=>{navigate("/classes/create")}}>
                    Tạo lớp mới
                </Button>
                <FormControl sx={{minWidth:120}}>
                    <InputLabel id="semester-select-label">Học kỳ</InputLabel>
                    <Select
                        labelId="semester-select-label"
                        id="semester-select"
                        label="Học kỳ"
                        value={selected_semester}
                        onChange={onChangeSemester}
                    >
                        <MenuItem value="">
                            Tất cả
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
                    value={selected_year}
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

export default function ClassesPage(){
    const navigate = useNavigate()
    
    function handleDelete(id:string){

    }

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { 
            field: 'id',
            headerName: 'ID',
            type:"string",
            width: 90 
        },
        {
            field: 'subject_name',
            headerName: 'Môn học',
            type:"string",
            width: 150,
        },
        {
            field: 'class_index',
            headerName: 'Nhóm lớp',
            type:"string",
            width: 150,
        },
        {
            field: 'class_start',
            headerName: 'Bắt đầu',
            type:"number",
            valueFormatter:(timestamp:number)=>{
                    const formattedTime = new Date(timestamp).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                });
                return formattedTime
            },
            width: 100,
        },
        {
            field: 'class_end',
            headerName: 'Kết thúc',
            type:"number",
            valueFormatter:(timestamp:number)=>{
                    const formattedTime = new Date(timestamp).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                });
                return formattedTime
            },
            width: 100,
        },
        {
            field: 'semester',
            headerName: 'HK',
            type: 'number',
            width: 60,
        },
        {
            field: 'student_count',
            headerName: 'SLSV',
            type: 'number',
            width: 80,
        },
        {
            field: 'action',
            headerName: 'Thao tác',
            sortable: false,
            width: 160,
            type: "actions",
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem icon={<InfoIcon/>} onClick={()=>{navigate(`/classes/details/${params.row.id}`)}} label="Xem chi tiết"/>,
                <GridActionsCellItem icon={<DeleteIcon/>} onClick={()=>{handleDelete(params.row.id)}} label="Điểm danh lớp" showInMenu/>,
                <GridActionsCellItem icon={<DeleteIcon/>} onClick={()=>{handleDelete(params.row.id)}} label="Xóa" showInMenu/>,
            ]
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