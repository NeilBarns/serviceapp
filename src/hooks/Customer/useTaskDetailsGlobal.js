import { useState } from 'react';
import { getCurrentDate, initialTime } from '../../components/general/DateTime';

const useTaskDetailsGlobal = () => {

    const [taskDateGlobal, setTaskDateGlobal] = useState(getCurrentDate());
    const [taskTimeGlobal, setTaskTimeGlobal] = useState(initialTime());
    const [taskDescriptionGlobal, setTaskDescriptionGlobal] = useState('');
    const [taskMediaGlobal, setTaskMediaGlobal] = useState([]);


    const actions = (action) => {
        const { type, payload } = action;
        switch (type) {
            case 'setTaskDateGlobal':
                return setTaskDateGlobal(payload.value);
            case 'setTaskTimeGlobal':
                return setTaskTimeGlobal(payload.value);
            case 'setTaskDescriptionGlobal':
                return setTaskDescriptionGlobal(payload.value);
            case 'setTaskMediaGlobal':
                return setTaskMediaGlobal(payload.value);
            case 'setTaskDetailsDefault':
                setTaskDateGlobal(getCurrentDate());
                setTaskTimeGlobal(initialTime());
                setTaskDescriptionGlobal('');
                setTaskMediaGlobal([]);
                return null;
            default:
                return null;
        }
    }
    return {
        taskDateGlobal,
        taskTimeGlobal,
        taskDescriptionGlobal,
        taskMediaGlobal,
        actions
    }
};

export default useTaskDetailsGlobal;
