import React, {useState, userRef, useRef} from 'react'
import ErrorModal from '../UI/ErrorModal/ErrorModal'

export default function UserForm({ setUsername, setUserAge, setUsers }){

    const [error, setError] = useState({

    })

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const handleSumbit = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = nameInputRef.current.value
        if(enteredName.trim().length === 0 && enteredAge.trim().length === 0){
            setError({
                title:'Invalid input',
                message: ' Plase enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid age',
                message: ' Plasee enter an age > 1.'
            })
            return;
        }
        const data = {
            username: enteredName,
            age: enteredName
        }

        setUsers(prevState => [...prevState, data])
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        
    }
    

    const errorHandler = () => {
        setError(null);
      };
    return(
        <section className='bg-grey-300  w-1/2 bg-white h-1/4 mt-20 rounded-lg'>
            {error && <ErrorModal
                title= { error.title }
                message= { error.message }
                onConfirm={ errorHandler }
            />}
            <form onSubmit={ handleSumbit } className= 'flex flex-col gap-6 p-4 '>
                <label className='text-black'>
                    Username
                    <input 
                        type='text' 
                        ref = { nameInputRef }
                        // value={ nameInputRef } 
                        className='w-full border-2 border-gray-400 rounded-sm'/>
                </label>
                <label>
                    Age (Years)
                    <input 
                        type='number' 
                        ref = { ageInputRef }
                        // value={ ageInputRef }  
                        className='w-full border-2 border-gray-400 rounded-sm' />
                </label>

                <button type='submit' className='border-2 border-purple-200  w-28 pl-4 pr-4 pt-2 pb-2 bg-purple-800 text-white hover:bg-purple-900'>Add User</button>
                
            </form>
        
        </section>
    )
}