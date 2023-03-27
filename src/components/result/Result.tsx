import questionType from "../../types/Types";
import styles from './Result.module.css';

const Result: React.FC<questionType> = ({ id, question, answeruser, correctanswer }) => {

    return (
        <div className={styles.container}>
            <p className={styles.paragQuestion}>
                {id}. {question}
            </p>
            <p className={styles.answeruser}>
                Ваш ответ:&nbsp;&nbsp;{answeruser === '' ? 'вы не ответили на вопрос' : answeruser}

            </p>
            <p className={styles.correctanswer}>
                Правильный ответ:&nbsp;&nbsp;
                {correctanswer}
            </p>
        </div>
    );
}

export default Result;