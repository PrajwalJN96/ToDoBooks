import React,{useState} from 'react'

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        onCreate(title);
        setTitle('');
      }
      const handleChange = (e)=>{
      setTitle(e.target.value);
    }
  return (
    <div className='book-create'>
    <h3>Add a book</h3>
    <form action="" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' type="text" value={title} onChange={handleChange}/>
      <button className='button'>Add</button>
    </form>
    </div>
  )
}

export default BookCreate