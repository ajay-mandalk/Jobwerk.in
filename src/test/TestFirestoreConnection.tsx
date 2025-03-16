import { useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const TestFirestoreConnection = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        // Add a test document to Firestore
        const docRef = await addDoc(collection(db, 'test-collection'), {
          message: 'Firestore connection test',
          timestamp: new Date(),
        });
        console.log('Document written with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    };

    testConnection();
  }, []);

  return <div>Checking Firestore connection...</div>;
};

export default TestFirestoreConnection;