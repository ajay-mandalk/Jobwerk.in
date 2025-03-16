import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getLatestAnnouncement() {
  try {
    console.log("Fetching latest announcement (without ordering)...");
    
    // Create a simpler query without ordering
    const announcementsRef = collection(db, "announcements");
    const q = query(announcementsRef, limit(1));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    console.log("Simple query executed. Empty?", querySnapshot.empty);
    console.log("Documents count:", querySnapshot.size);
    
    // Check if we have a result
    if (querySnapshot.empty) {
      return "Welcome to JobWerk!"; // Default text if no announcement found
    }
    
    const data = querySnapshot.docs[0].data();
    console.log("Document data:", data);
    
    // Return the text from the first document
    return data.text || "Welcome to JobWerk!";
  } catch (error) {
    console.error("Error fetching announcement:", error);
    return "Welcome to JobWerk!"; // Default text in case of error
  }
}
