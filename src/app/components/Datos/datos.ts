import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import empleados from '../interfaces/empleado'

let datos:any[];
export default function E(){
datos=[
    {
        "id":1,
        "nombres":"nombre1",
       " apellidos":"apellidos1",
        "ciudad":"ciudad1"
    },
    {
        "id":2,
        "nombres":"nombre2",
       " apellidos":"apellidos2",
        "ciudad":"ciudad2"
    },
    {
        "id":3,
        "nombres":"nombre3",
       " apellidos":"apellidos3",
        "ciudad":"ciudad3"
    }
]

return datos;
}