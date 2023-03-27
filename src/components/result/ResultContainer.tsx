import Result from "./Result";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hook";
import questionType from "../../types/Types";
import styles from './Result.module.css'

const ResultContainer = () => {
    const datatest = useAppSelector(state => state.questions.data)

    return (
        <>
            <p>
                <NavLink
                    to="/"
                    className={styles.linkTitle}
                    style={{
                        textDecoration: "none",
                        fontSize: "1.5vw",
                        fontWeight: "500",
                        color: "SteelBlue"
                    }}
                >
                    Вернуться на главную
                </NavLink>
            </p>
            <div className={styles.bigContainer}>

                {datatest.map((question: questionType) => (
                    <Result
                        key={question.id}
                        {...question}

                    />
                ))}
            </div>
        </>

    )
}

export default ResultContainer;