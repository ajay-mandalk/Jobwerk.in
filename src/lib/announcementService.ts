import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getLatestAnnouncement() {
  // If db is not initialized (server-side without proper env vars), return default
  if (!db) {
    console.log("Firebase not initialized, returning default announcement");
    return "Welcome to JobWerk!";
  }
  
  try {
    console.log("Fetching latest announcement...");
    
    // Create a query to get the latest announcement
    const announcementsRef = collection(db, "announcements");
    const q = query(announcementsRef, orderBy("createdAt", "desc"), limit(1));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Check if we have a result
    if (querySnapshot.empty) {
      return "Welcome to JobWerk!"; // Default text if no announcement found
    }
    
    // Return the text from the first (and only) document
    return querySnapshot.docs[0].data().text;
  } catch (error) {
    console.error("Error fetching announcement:", error);
    return "Welcome to JobWerk!"; // Default text in case of error
  }
}
