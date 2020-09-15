import { useState, useEffect } from 'react';

export const useDB = (database) => {
    const [db, setDB] = useState(null);

    useEffect(() => {
        const dbRef = database.ref('goods');
        dbRef.on('value', (snapshot) => {setDB(snapshot.val())})
    }, [database])

    return db;
}