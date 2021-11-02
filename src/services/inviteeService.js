import { getFirestore, doc, getDoc } from "firebase/firestore"

export class InviteeService {
    getInvitee = async (id) => {
        const db = getFirestore();

        const docRef = doc(db, Collections.Invitees, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log('Document Data: ', docSnap.data());
            return docSnap.data();
        } else {
            // doc.data will be undefined
            console.log('No such document!');
        }
    };
}