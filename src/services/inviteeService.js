import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import Collections from "resources/constants";

export class InviteeService {
    getInvitee = async (id) => {
        const db = getFirestore();

        console.log(db);
        const docRef = doc(db, Collections.Invitees, id);

        return getDoc(docRef).then(document => {
            if (document.exists()) {
                console.log('Document Data: ', document.data());
                return document.data();
            } else {
                console.log('No such document!');
                return null;
            }
        }).catch(error => {
            console.log('ERROR');
            console.log(error);

            return null;
        });
    };

    postInvitee = async (id, invitee) => {
        console.log('Posting doc!');

        const db = getFirestore();

        return setDoc(doc(db, Collections.Invitees, id), invitee)
            .then(response => {
                console.log(`Successfully complete setDoc for id: ${id}`);
                console.log(response);
                return true;
            })
            .catch(e => {
                console.log(e);
                return false;
            })
    }
}