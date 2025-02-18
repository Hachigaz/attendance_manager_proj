import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, FormLabel, Autocomplete, AutocompleteInputChangeReason, Stack, Container, Typography } from "@mui/material";
import { PageContainer, PageHeader, PageHeaderToolbar } from "@toolpad/core";
import { useState } from "react";
import { useNavigate } from "react-router";

function CustomPageToolbar(){
    
    return (
        <PageHeaderToolbar>
        </PageHeaderToolbar>
    )
}

function CustomHeaderToolbar(){
    return(
        <PageHeader title="" slots={{ toolbar: CustomPageToolbar}}/>
    )
}

export default function ClassCreatePage(){
    const navigate = useNavigate()
    
    const  [selected_subject,set_selected_subject] = useState<AutoCompOptionItem>();
    const  [is_subclass,set_is_sub_class] = useState(false);
    const  [selected_parent_class,set_selected_parent_class] = useState<AutoCompOptionItem>();
    const  [selected_semester,set_selected_semester] = useState("1");
    const  [selected_year,set_selected_year] = useState("2025");

    type AutoCompOptionItem = {
        id:string,name:string
    }
    const select_subject_list:AutoCompOptionItem[] = [
        {
            id:"10",
            name:"fuck"
        },
        {
            id:"20",
            name:"asd"
        },
        {
            id:"30",
            name:"qdo"
        },
    ];
    function on_subject_input_change(
        event: React.SyntheticEvent, 
        value: string, 
        reason: AutocompleteInputChangeReason
    ){

    }

    const select_parent_class_list:AutoCompOptionItem[] = [

    ]
    function on_parent_class_input_change(
        event: React.SyntheticEvent, 
        value: string, 
        reason: AutocompleteInputChangeReason
    ){
        
    }

    function on_click_cancel_button(){
        navigate("/classes")
    }

    function on_click_submit_button(){

    }

    return(
        <PageContainer slots={{header:CustomHeaderToolbar}}>
            <Container sx={{width:"75%", height:"100%", display:"flex", alignItems:"center"}}>
                <Box sx={{width:"100%"}}>
                    <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
                        Tạo lớp mới
                    </Typography>
                    <Stack direction={"column"} spacing={3}>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                            <Autocomplete
                            freeSolo
                            options={select_subject_list}
                            getOptionLabel={(option : AutoCompOptionItem) => option.name} // Show name in dropdown
                            value={selected_subject}
                            onInputChange={on_subject_input_change}
                            renderInput={(params) => <TextField {...params} label="Môn học" />}
                            />
                        </FormControl>
                        <Stack direction={"row"} spacing={2}>
                            <FormGroup sx={{ alignSelf: "center", paddingLeft: 1, minWidth: 200 }} >
                                <FormControlLabel control={<Checkbox value={is_subclass} onChange={(e)=>set_is_sub_class(e.target.checked)}/>} label="Lớp phụ" />
                            </FormGroup>
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 200, flexGrow: 1 }}>
                                <Autocomplete
                                freeSolo
                                options={select_parent_class_list}
                                getOptionLabel={(option : AutoCompOptionItem) => option.name} // Show name in dropdown
                                value={selected_parent_class}
                                onInputChange={on_parent_class_input_change}
                                renderInput={(params) => <TextField {...params} label="Chọn lớp" />}
                                disabled={!is_subclass}
                                />
                            </FormControl>
                        </Stack>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                            <TextField required label="Giờ bắt đầu" type="time" slotProps={{ inputLabel:{shrink: true }}} />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                            <TextField required label="Giờ kết thúc" type="time"slotProps={{ inputLabel:{shrink: true }}} />
                        </FormControl>
                        <Stack direction="row" spacing={2}>
                            <FormControl fullWidth>
                                <InputLabel id="form-selected-semester-select-label">Học kỳ</InputLabel>
                                <Select
                                    labelId="form-selected-semester-select-label"
                                    id="form-selected-semester-select"
                                    value={selected_semester}
                                    label="Học kỳ"
                                    onChange={(e)=>{set_selected_semester(e.target.value)}}
                                    required
                                >
                                    <MenuItem value={1}>Học kỳ 1</MenuItem>
                                    <MenuItem value={2}>Học kỳ 2</MenuItem>
                                    <MenuItem value={3}>Học kỳ 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="form-selected-year-select-label">Năm học</InputLabel>
                                <Select
                                    labelId="form-selected-year-select-label"
                                    id="form-selected-year-select"
                                    value={selected_year}
                                    label="Năm học"
                                    onChange={(e)=>{set_selected_year(e.target.value)}}
                                    required
                                >
                                    <MenuItem value={2024}>2024 - 2025</MenuItem>
                                    <MenuItem value={2025}>2025 - 2026</MenuItem>
                                    <MenuItem value={2026}>2026 - 2027</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Box sx={{  marginTop:"50px",width:"100%", display:"flex", justifyContent:"flex-end" }}>
                        <Stack direction="row" spacing={2} sx={{marginRight:"20px"}}>
                            <Button sx={{minWidth:120, minHeight:45}} variant="outlined" onClick={on_click_cancel_button}>
                                Hủy
                            </Button>
                            <Button sx={{minWidth:120, minHeight:45}} variant="contained" onClick={on_click_submit_button}>
                                Thêm lớp
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </PageContainer>
    )
}