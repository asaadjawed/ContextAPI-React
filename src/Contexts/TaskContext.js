import React, {createContext, useState} from 'react'

export const TaskContext = createContext();


const TaskContextProvider = (props) =>{

    const [task, settask] = useState([
        { title: 'task1', priority: 'medium', id: 1   },
        { title: 'task1', priority: 'medium', id: 2   },
        { title: 'task1', priority: 'medium', id: 3   },
        { title: 'task1', priority: 'medium', id: 4   },
        { title: 'task1', priority: 'medium', id: 5   },
        { title: 'task1', priority: 'medium', id: 6   },
        { title: 'task1', priority: 'medium', id: 7   },
        
        
    ])


    return(

        <TaskContext.Provider value={{task}}>

            {props.children}


        </TaskContext.Provider>
    )


}

export default TaskContextProvider;