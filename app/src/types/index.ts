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
    id : number,
    setid?: React.SetStateAction<any>,
    title : string,
    categorie : string,
    price : number,
    image_url : string,
    description? : string,
}

export interface navBarProps {
    showPanier? : boolean,
    setShowPanier? : React.SetStateAction<any>,
    showProfile? : boolean,
    setProfile? : React.SetStateAction<any>,
    showAuth? : boolean,
    setAuth? : React.SetStateAction<any>,
}

export interface ProfileInputsProps{
    id:string,
    label:string,
    placeholder:string,
    type:string,
    edit? : boolean,
    setEdit? : React.SetStateAction<any>,
    useRef : React.LegacyRef<HTMLInputElement> | undefined,
}

export interface UserDetails {
    full_name : string,
    address : string,
    email : string,
}

export interface DashboardNavProps {
    switchMenu : string, 
    setswitchMenu: React.SetStateAction<any>,
}

export interface AnalyticsCardProps {
    title:string,
    state : string,
}

export interface ProductsTableProps{
    setdata : any,
    products : Array<any>,
    loading : boolean,
    showForm : boolean,
    setShowForm : React.Dispatch<React.SetStateAction<boolean>>
}

export interface SupportProps {
    page : string,
    setpage: React.SetStateAction<any>,
}

export interface ProductFormProps {
    showForm : boolean,
    setShowForm : React.Dispatch<React.SetStateAction<boolean>>
  }
  
export interface ProductsForm {
    title : string,
    description : string,
    stock : number,
    price : number,
    image_url : any,
    categories : string
  }