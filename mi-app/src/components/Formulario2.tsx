import { useForm } from "../hooks/UseForm"

// interface FormData{
//     email: string,
//     nombre: string,
//     edad: number
// }

export const Formulario2 = () =>{
    const {formulario, handleChange} = useForm({
     postal:'ABC',
     ciudad:'Reynosa'
    })

    const {postal, ciudad} = formulario
    //     email: 'julio@gmail.com',
    //     nombre:'julio sama',
    //     edad:36
    // });

    // const {email, nombre, edad} = formulario;
    // const [formulario, setFormulario] = useState({
    //     email:'',
    //     nombre:''
    // })
    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
    //      const {name, value} = target;

    //      setFormulario({
    //          ...formulario,
    //          [name]:value
    //      })
    // }

  return(
      <form autoComplete="off">
          <div className="mb-3">
              <label className="form-label">C.P</label>
              <input
              type="text"
              className="form-control"
              name="postal"
              value={postal}
              onChange={handleChange}
              />
          </div>
          <div className="mb-3">
              <label className="form-label">Ciudad</label>
              <input
              type="text"
              className="form-control"
              name="ciudad"
              value={ciudad}
              onChange={handleChange}
              />
          </div>
          <pre>{JSON.stringify(formulario)}</pre>
      </form>
  )
}