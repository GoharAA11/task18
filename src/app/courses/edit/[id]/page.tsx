
import { handleAdd } from "@/app/lib/actions/course-actions";
import { getCourseById } from "@/app/lib/api";
import { useState } from "react";

interface IProps {
  params: { id: number }
}
const InitialState={
  name:"",
  price: "",
  duration: "",
  cover:"",

}

export default async function Page(props: IProps) {

  const edit = await getCourseById(props.params.id)

  //const [value, setValue] = useState(InitialState)
 /* useEffect(() => {
    setValue({
      name: edit.name,
      price: edit.price,
      duration: edit.duration,
      cover: edit.cover,
    });

     
    })
}, [])*/
  return <>
    <h1>EDIT</h1>
    <div className="columns">
      <div className="is-two-fifth my-4">
        <form className="box my-5" action={handleAdd}>
          <div className="field my-4">
            <input
              type="text"
              className="input is-primary"
              name="name"
              value={edit.name}
              
             // onChange={e=>setValue({...value,name:e.target.value})}
            />
          </div>
          <div className="field my-4">
            <input
              type="text"
              className="input is-primary"
              name="price"
              value={edit.price}
            />
          </div>
          <div className="field my-4">
            <input
              type="text"
              className="input is-primary"
              name="duration"
              value={edit.duration}
            />
          </div>

          <div className="field my-4">
            <button className="button is-danger">submit</button>
          </div>
        </form>
      </div>
    </div>


  </>
}

