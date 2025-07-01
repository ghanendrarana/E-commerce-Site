import React from 'react';
import { CircleUserRound } from 'lucide-react';

import styles from './userLog-button.module.css';

export default function UserLog() {
    //const [openUserLog, setOpenUserLog] = React.useState(false);
    
    return(
        <button className={styles.userLog}  > 
            <CircleUserRound />
        </button>
    );
}