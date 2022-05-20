

export interface  NavBarLinks { 
    link : string,
    title : string
}

export interface CustomInputProps {
    id:string,
    label:string,
    placeholder:string,
    type:string,
    useRef : React.LegacyRef<HTMLInputElement> | undefined,
}

export interface AuthProps {
    show? : boolean,
    setShow? : React.SetStateAction<any>,
    showAuth? : boolean,
    setAuth? : React.SetStateAction<any>,
}

export interface ProductsProps {
    title : string,
    categorie : string,
    price : number,
    image_url : string,
    description? : string,
}

export interface navBarProps {
    showPanier? : boolean,
    setShowPanier? : React.SetStateAction<any>,
    showAuth? : boolean,
    setAuth? : React.SetStateAction<any>,
}
