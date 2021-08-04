//is component mei hume koi data save n krn tha islie hmne ye function comp bnya instead of class comp
let List= (props)=>{
    return(
        <ul>
        {
          props.tasks.map((elem) =>{
            return <li>{elem} <button onClick= {()=>{
               props.deleteTask(elem)
            }}>Delete</button> </li>
          })
        }

      </ul>
    )
}

export default List;