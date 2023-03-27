import styles from './Button.module.css';
import { btnTypes } from '../../types/Types';

const Button: React.FC<btnTypes> = ({ text, answerLater, resultFunc }) => {



    return (
        <button
            className={`${styles.custombtn} ${styles.btn10}`}
            onClick={text === 'Число правильных ответов' ? resultFunc : answerLater}
        >
            {text}
        </button >

    );
}

export default Button;