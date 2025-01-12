'use client'
import { useState } from 'react';
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  function deleteHandler(i){
    let tsk2 = [...task]
    tsk2.splice(i,1)
    settask(tsk2)
  }
  function submit(e){
    e.preventDefault()
    settask([...task,{title,desc}])
    settitle("")
    setdesc("")
  }
  let rendertask = <h2></h2>
  rendertask = task.map((t,i)=>{
    return (
      <li key={i} className="flex items-center justify-between">
    <div className="flex justify-between w-2/3">
      <h5>{t.title}</h5><h6>{t.desc}</h6><button className="bg-black p-3 text-white"onClick={()=>{deleteHandler(i)}}>Delete</button>
    </div>
    </li>
      )
  })
  return (
    <>
    <h1 className = "bg-black p-5 text-white text-5xl font-bold text-center">todo</h1>
    <form onSubmit={submit}>
      <input 
      className="text-2xl border-black border-2 rounded m-3 p-3"
      placeholder="enter title"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      ></input>
      <input 
      className="text-2xl border-black border-2 rounded m-3 p-3"
      placeholder="enter desc"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      ></input>
      <button className="bg-black text-white text-2xl p-3 rounded">Add Task</button>
    </form>
    <hr></hr>
    <div className="p-3 bg-slate-50">
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}
export default page