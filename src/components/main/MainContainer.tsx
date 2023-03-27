import { useAppSelector } from "../../hook";
import { useAppDispatch } from "../../hook";
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import questionType from "../../types/Types";
import styles from './Main.module.css';
import { newAnswer } from "../../store/QuestionSlice";
import { toggleleaveForLater } from "../../store/QuestionSlice";
import ButtonContainer from "../button/ButtonContainer";
import { setResult } from "../../store/QuestionSlice";
import Buttonone from "../button/Buttonone";



const MainContainer = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const datatest = useAppSelector(state => state.questions.data);

    const result = useAppSelector(state => state.questions.result);

    const addAnswerUser = (contentArr: { id: number; name: string; leaveForLater: boolean }) => {
        dispatch(newAnswer(contentArr))
        if (contentArr.leaveForLater) {
            dispatch(toggleleaveForLater(contentArr.id))
            return;
        }
    }

    const resultFunc = () => {
        dispatch(setResult())
    }

    const detailedResult = () => {
        navigate('/result')
    }

    return (
        <>
            <h3>Тест на знание истории Волжской Булгарии</h3>
            <p className={styles.parag}>
                Количество вопросов {datatest.length}. Правильных ответов: {result}
            </p>
            <div className={styles.forBtn}>
                <ButtonContainer
                    text={'Число правильных ответов'}
                    resultFunc={resultFunc}
                />
                <Buttonone
                    text={'Посмотреть подробный результат'}
                    detailedResult={detailedResult}
                />
            </div>
            <div className={styles.bigcontainer}>
                {datatest.map((question: questionType) => (
                    <Main
                        key={question.id}
                        {...question}
                        addAnswerUser={addAnswerUser}
                    />
                ))}
            </div>
        </>
    )
}

export default MainContainer;