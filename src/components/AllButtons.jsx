import React from 'react'
import styles from './AllButtons.module.css'
import Button from './Button.jsx'

const AllButtons = ({ buttons ,onButtonClick}) => {
    return (
        <div className={styles.containerButtons}>
            {buttons.map((value, index) => (
                <Button key={index} onClick={() => onButtonClick(value)}>
                    {value}
                </Button>
            ))}

        </div>
    )
}

export default AllButtons