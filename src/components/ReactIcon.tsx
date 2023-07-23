import { AiOutlineHeart } from 'react-icons/ai';
import styles from './ReactIcon.module.css';
interface Props{
    onClick:() => void;
}
const icon = ({onClick}:Props)=>{
    return(
        <>
        <h1>This is react icon</h1>
        <AiOutlineHeart className={styles.value} onClick={onClick}/>
        </>
    )
};

export default icon;