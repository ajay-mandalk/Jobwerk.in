import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "./firebase";

// Add caching to reduce Firebase calls
let cachedAnnouncement: string | PromiseLike<string> | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getLatestAnnouncement(): Promise<string> {
  // Check cache first
  if (cachedAnnouncement && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    console.log("Returning cached announcement");
    return cachedAnnouncement;
  }
  
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
    
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Firebase query timeout')), 5000)
    );
    
    // Execute the query with timeout
    const querySnapshot = await Promise.race([getDocs(q), timeoutPromise]);
    
    // Check if we have a result
    if (querySnapshot.empty) {
      console.log("No announcements found");
      return "Welcome to JobWerk!"; // Default text if no announcement found
    }
    
    // Get the data and ensure it's a string
    const data = querySnapshot.docs[0].data();
    const text = data.text;
    
    // Validate that text is a string
    if (typeof text !== 'string') {
      console.error("Announcement text is not a string:", text);
      return "Welcome to JobWerk!";
    }
    
    // Update cache
    cachedAnnouncement = text;
    cacheTimestamp = Date.now();
    
    return text;
  } catch (error) {
    console.error("Error fetching announcement:", error);
    return "Welcome to JobWerk!"; // Default text in case of error
  }
}
