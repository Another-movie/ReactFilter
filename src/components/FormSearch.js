import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const FormSearch = () => {
    const [valueS, setValueS] = useState('')
    const [valueA, setValueA] = useState('')
    const [data, setData] = useState('')
    const [value, setValue] = useState('')
    useEffect(() => {
        async function a() {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setData(result.data)
            setValue(result.data)
        
        }
        a()
        // eslint-disable-next-line
      }, [])
    const handleChange = e  => {
        let oldList = data
        if (e.target.value !== '') {
            let newList = []
            
            setValueS(e.target.value)
            newList = oldList.filter(note => (note.title.toLocaleLowerCase().includes(valueS.toLocaleLowerCase())))
            setValue(newList)
        }
        else
        {
            setValueS(e.target.value)
            setValue(oldList)
        }

    }

    return (
        <div>
            <form className='search-form'>
                <div className="form-group search">
                    <input
                        type="text"
                        className="form-control" 
                        value={valueS} 
                        onChange={handleChange}
                        placeholder='Что-то ищите?'
                    />
                </div>
                <div className="form-group">
                    <textarea
                            type='text'
                            value={valueA}
                            onChange={e=>setValueA(e.target.value)}
                            placeholder="Напишите что-то..."
                            className='add'
                    ></textarea>
                </div>
            </form>   
            <ul className='wbGrid'>
                {Array.isArray(value) ? value.map(note=> (
                    
                        <li 
                            className="note-body"
                            key={note.id}
                        >
                            <div className='noteDiv'>
                                <small>{note.userId}</small>
                                <h3>{note.title}</h3>
                                <small>{note.body}</small>
                            </div>
                        
                        </li>

                )): 'nothing'}
            </ul>
        </div>  
    )
}