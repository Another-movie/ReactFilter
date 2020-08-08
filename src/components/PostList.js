import React from 'react'

export const PostList = ({value}) => {
    
    
    return (
    <ul className='wbGrid'>
            {value ? value.map(note=> (
                
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
)}