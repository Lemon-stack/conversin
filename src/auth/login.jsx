import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { signInStart, signInFailure } from "@/reducers/googleSigninSlice";
import { auth } from "@/client/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Login() {
  let navigate = useNavigate()
  const loading = useSelector((state) => state.googleSignIn?.loading);
  const dispatch = useDispatch();
  const profile = useSelector((state)=> state.googleSignin)
 
  useEffect(() => {
    if(profile.user !== null){
      navigate('/d/dashboard')
    }
  
  }, [navigate,profile.user])
  
  const handleSignin = async () => {
    dispatch(signInStart());
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('d/dashboard')
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div>
      <h2 className="text-gray-700">Login</h2>
      {!loading ? (
        <button
          className="bg-black text-gray-50 py-1 px-4"
          onClick={handleSignin}
        >
          Continue with Google
        </button>
      ) : (
        <button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </button>
      )}
    </div>
  );
}
