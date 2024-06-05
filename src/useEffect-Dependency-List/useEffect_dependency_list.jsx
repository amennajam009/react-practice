import React , {useState , useEffect} from 'react'

function UseEffect_dependency_list() {
    console.log('component re-renderedd again')
    const [count , setCount] = useState(0)

    useEffect(()=>{
        console.log('counttttttt')
        if(count >= 1){
            document.title = `Chats (${count})`
        }else{
            document.title = `Chats`
        }
    },[count])
    function submit(){
      setCount(count+1)
    }
  return (
<>
  <div className="text-center">
    <h1>{count}</h1>
    <button className='btn btn-success' onClick={submit}>Click Me</button>

  </div>
</>
  )
}

export default UseEffect_dependency_list;
