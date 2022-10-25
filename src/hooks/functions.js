import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

//Text line 
export function FormatLineBreak(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

export function formatNumberMoney(ammount) {
    return new Intl.NumberFormat("ES-PE", {
      style: 'currency',
      currency: 'PEN',
    }).format(ammount)
  }

export function formatDate(date) {
  return date.toDate().toDateString()
}

export async function getSupplier(id) {
  try {
      const snap = await getDoc(doc(db, 'supplier', id))
      if (snap.exists()) {
          return snap.data()
      }
  } catch (error) {
      console.log(error)
  }
}