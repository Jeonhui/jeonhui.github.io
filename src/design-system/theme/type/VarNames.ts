type VarNames <T> =  { [key in keyof T]: string }

export default VarNames