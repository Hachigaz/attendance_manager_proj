type ID = number

type DataModel = {
    _id:ID
    is_archived: boolean
}

type Class = DataModel & {
    subject_id:ID

    class_start:number
    class_end:number
    student_count:number

    subclass: boolean
    subclass_name: string
    parent_class: ID

    year:number
    semester:number
}

type Class_Student = DataModel & {
    class_id: ID
    student_id: ID
    card_id: ID
}

type Attendance_Sheet = DataModel & {
    class_id: ID

    week:number

    is_checked: boolean
}

type Attendance_Mark = DataModel & {
    sheet_id:ID //Attendance_Sheet
    student_id:ID
}

type Subject = DataModel & {
    name:string
    school_id:ID
}

type School = DataModel & {
    school_name:string
}

type Student = DataModel & {
    student_id:string
    name:string
}

type ID_Card = DataModel & {
    card_id:string
    card_name:string //for identifying each card visually if necessary
    used:boolean
}