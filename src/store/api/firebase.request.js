import { getFirestore, getAuth } from "./firebase"
import "@firebase/firestore"

export const requestProducts = async category => {
  const db = getFirestore()
  const itemsCollection = db.collection("items")

  if (category) {
    return itemsCollection
      .where("category", "==", category)
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
