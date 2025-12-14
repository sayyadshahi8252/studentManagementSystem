import React from 'react'
import styles from './Table.module.css'

const Table = ({ data }) => {
    return (
        <div className={styles.tablecontainer}>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Marks</th>
                        <th>Passing</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <th>{value.id}</th>
                            <th>
                                <img
                                    src={value.img_src}
                                    alt={`${value.first_name} ${value.last_name}`}
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                                />
                                {value.first_name} {value.last_name}
                            </th>
                            <th>{value.gender}</th>
                            <th>{value.class}</th>
                            <th>{value.marks}</th>
                            <th>{value.passing===true?"pass":"failed"}</th>
                            <th>{value.email}</th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Table