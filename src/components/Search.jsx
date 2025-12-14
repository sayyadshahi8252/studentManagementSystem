import React from 'react'
import styles from './Search.module.css'
import Button from './Button.jsx'

const Search = ({ searchdata, setsearchdata, allStudentData, setStudentdata }) => {
  function handlesearch(e) {
    const target = e.target.value;
    setsearchdata(target);
    const newdata = allStudentData.filter((student) => 
      student.first_name.toLowerCase().includes(target.toLowerCase()) ||
      student.last_name.toLowerCase().includes(target.toLowerCase()) ||
      student.email.toLowerCase().includes(target.toLowerCase())
    );

    setStudentdata(newdata);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder='Search...'
        value={searchdata}
        onChange={handlesearch}
      />
      <Button>Search</Button>
    </div>
  )
}

export default Search