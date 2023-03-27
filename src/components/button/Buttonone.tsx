import styles from './Button.module.css';
import { btnTypes } from '../../types/Types';

const Buttonone: React.FC<btnTypes> = ({ text, detailedResult }) => {



    return (
        <button
            className={`${styles.custombtn} ${styles.btn10}`}
            onClick={detailedResult}
        >
            {text}
        </button >

    );
}

export default Buttonone;