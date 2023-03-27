import { useAppDispatch } from '../../hook';
import Button from './Button';
import { btnTypes } from '../../types/Types';
import { toggleleaveForLater } from '../../store/QuestionSlice';
import { setValue } from '../../store/QuestionSlice';

const ButtonContainer: React.FC<btnTypes> = ({ text, id, resultFunc }) => {
    const dispatch = useAppDispatch();

    const answerLater = () => {
        let value = '0'
        dispatch(toggleleaveForLater(id))
        dispatch(setValue({id, value}))
    }

    return <Button
        text={text}
        answerLater={answerLater}
        resultFunc={resultFunc}
    />;
}

export default ButtonContainer;