

export interface  NavBarLinks { 
    link : string,
    title : string
}

export interface CustomInputProps {
    id:string,
    label:string,
    placeholder:string,
    type:string,
    useRef : React.LegacyRef<HTMLInputElement> | undefined
}
