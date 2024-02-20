import { useState , useEffect} from "react";
import Footer from "./Footer";

function Dashboard() {
    const [todos, setTodos] = useState([{index : 0, work:'Get up'}]);
    const [newTodo, setNewTodo] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const velawa =setInterval(() => {
             setCurrentTime(new Date()) 
        }, 1000);
       return ()=>{clearInterval(velawa)};

       
    });
  
    const formatTime = currentTime.toLocaleTimeString();

    
    const addTodo = () => {
         
         setTodos([...todos, {index:todos.length, work: newTodo}]);
        
        document.getElementById('xxx').value = " ";
         
         
       
    }
    function removeTodo(){ 
         
       todos.pop();
       console.log(todos);
       setTodos([...todos]);
    }
    function delInput(x){
        console.log(x);
        document.querySelector('li').remove()
    }
  return (

    
   <>
   <section className=" px-7" >
        <h1 className=" md:text-5xl text-2xl bg-red-400 text-black font-bold italic text-center mt-3 h-fit ">TODO System</h1>
        <div className=" flex md:flex-row flex-col md:gap-y-0 gap-y-4 justify-between mt-8">
              <button onClick={addTodo} className="btn">Add</button>
              <button onClick={removeTodo}  className="btn">Remove Last Todo</button>
               <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}  id="xxx" className="btn placeholder:text-black placeholder:opacity-30 capitalize" 
                placeholder="Type Your work"/> 
              <p className="btn max-w-[550px]  tracking-widest capitalize"> Time is {formatTime}</p>
             
            
        </div>
        <div>
           <ul className=" flex flex-col gap-y-5 mt-9">{
                
                todos.map((todo, index)=>(
                    
                    <li id="input" className="flex flex-row justify-between txt"  key={index}> {` Work is ${todo.work}`} <span><button className="btn" onClick={()=>{delInput(index)}}> Delete</button></span></li>
                ))}
            </ul>
        </div>


   </section>
   <Footer></Footer>
  
   
   </>
  )
}

export default Dashboard