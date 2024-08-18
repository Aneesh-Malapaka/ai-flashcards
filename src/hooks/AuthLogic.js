import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider.setCustomParameters({ prompt: 'select_account' }));
      const user = result.user;
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          status: "free"
        });

        // Creating the flashcards collection
        const userFlashcardsDocRef = doc(firestore, `users/${user.uid}/flashcards/`, "default");
        await setDoc(userFlashcardsDocRef, {});
      }

      localStorage.setItem("loggedIn", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("loggedIn");
      console.log("User signed out");
      navigate("/");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        localStorage.setItem("loggedIn", JSON.stringify(user));
      } else {
        localStorage.removeItem("loggedIn");
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, signInWithGoogle, signOutUser };
};

export default useAuth;
