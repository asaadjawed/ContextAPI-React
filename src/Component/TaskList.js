import React, {useContext} from 'react';
import { TaskContext } from '../Contexts/TaskContext';

 const TaskList = () =>{

    const {task} = useContext(TaskContext)

return task.length ?  <div>
       <ul>
           {task.map(task =>{
               return(
                   <li>
                       {task.title}
                   </li>
               )
           })}
       </ul>
   </div> :<div>

       No Books Found
   </div>
}

export default TaskList