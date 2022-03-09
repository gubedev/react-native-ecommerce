import { getFirestore, getAuth } from "./firebase"
import firebase from "firebase/app"
import "@firebase/firestore"

export const requestProducts = async categoryId => {
  const db = getFirestore()
  const itemsCollection = db.collection("items")

  if (categoryId) {
    return itemsCollection
      .where("categoryId", "==", categoryId)
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
      )
  }

  return itemsCollection.get().then(querySnapshot =>
    querySnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
  )
}
