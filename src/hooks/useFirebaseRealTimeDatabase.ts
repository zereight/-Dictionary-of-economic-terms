import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { firebaseDB } from '../config/firebase';

const useFirebaseRealTimeDatabase = (path: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const dbRef = ref(firebaseDB, `live/${path}`);

    onValue(dbRef, snapshot => {
      setData(snapshot.val());
    });
  }, [path]);

  return { data };
};

export default useFirebaseRealTimeDatabase;
