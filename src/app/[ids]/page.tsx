import React from 'react'

const DynamicRoute = async (props:any) => {
    console.log(props);

    const url= await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.ids}`, {
        method: "Get"
      })
      const res=await url.json()
      console.log(res);
      
    
  return (
    <div>
        <h1 className='font-black text-5xl'>Dynamic Route <br/> <br/></h1>
        {res.id} <br/> {res.title}
        
        
        </div>
  )
}

export default DynamicRoute