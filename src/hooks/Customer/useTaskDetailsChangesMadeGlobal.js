import { useState } from 'react';

const useTaskDetailsChangesMade = () => {

    const [taskDetailsChangesMade, setTaskDetailsChangesMade] = useState(false);

    const actions_changes = (action) => {
        const { type } = action;
        switch (type) {
            case 'changesMade':
                return setTaskDetailsChangesMade(true);
            case 'noChanges':
                return setTaskDetailsChangesMade(false);
            default:
                return null;
        }
    }

    return { taskDetailsChangesMade, actions_changes };
};

export default useTaskDetailsChangesMade;
