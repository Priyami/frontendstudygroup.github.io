import React from 'react';
import SubHeading from '../UI/SubHeading';
import Paragraph from '../UI/Paragraph';
import styles from './Contributions.module.css';
const Contributions = props => {
    return (
        <div className = {styles.container}>
                <SubHeading > Contributions </SubHeading>
                     
                <Paragraph >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
               
        </div>
    )
}
export default Contributions;