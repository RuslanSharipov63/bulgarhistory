import { SetStateAction } from "react";

interface questionType {
    id: number,
    question: string,
    answer1: string,
    answer2: string,
    answer3?: string,
    correctanswer: string,
    answeruser: string,
    leaveForLater: boolean,
    value: SetStateAction<string>,
    
}

export interface initialStateType {
    data: questionType[],
    status: null | string,
    error: null | string,
    result: number
}

export interface btnTypes {
    id?: number | undefined
    text: string | null
    answerLater?: () => void
    resultFunc?: () => void
    detailedResult?: () => void
}

export interface typeForMain extends questionType {
addAnswerUser?: (content: { id: number; name: string, leaveForLater: boolean }) => void;
}

export default questionType;