import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../config/firestore';

export const getAllProducts = async () => {
  const collectionRef = collection(db, 'products');
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error('Could not find product with id ' + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const updateProductById = async (id, productData) => {
  console.log('Updating product with ID:', id);
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, productData);
  return { id, ...productData };
};

export const subscribeToProducts = (callback) => {
  console.log('Subscribing to real-time product data...');
  const collectionRef = collection(db, 'products');
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    console.log('Product data changed (real-time update)');
    const productsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(productsData);
  });
  return unsubscribe;
};