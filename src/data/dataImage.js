import CenterDefault from '../assets/image/center-default.svg';
import CenterCorrect from '../assets/image/center-correct.svg';
import CenterWrong from '../assets/image/center-wrong.svg';
import EndDefault from '../assets/image/end-default.svg';
import EndCorrect from '../assets/image/end-correct.svg';
import EndWrong from '../assets/image/end-wrong.svg';
import SpaceBDefault from '../assets/image/space-b-default.svg';
import SpaceBCorrect from '../assets/image/space-b-correct.svg';
import SpaceBWrong from '../assets/image/space-b-wrong.svg';
import StartDefault from '../assets/image/start-default.svg';
import StartCorrect from '../assets/image/start-correct.svg';
import StartWrong from '../assets/image/start-wrong.svg';

const DataImage = [
    {
        center: {
            default: {CenterDefault},
            correct: {CenterCorrect},
            wrong: {CenterWrong}
        },
        
        spaceBetween: {
            default: {SpaceBDefault},
            correct: {SpaceBCorrect},
            wrong: {SpaceBWrong}
        },

        start: {
            default: {StartDefault},
            correct: {StartCorrect},
            wrong: {StartWrong}
        },

        end: {
            default: {EndDefault},
            correct: {EndCorrect},
            wrong:{EndWrong}
        }
    }
]

export default DataImage;