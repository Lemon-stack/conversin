import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { signInStart, signInFailure } from "@/reducers/googleSigninSlice";
import { auth } from "@/client/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  let navigate = useNavigate();
  const loading = useSelector((state) => state.googleSignIn?.loading);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.googleSignin);

  useEffect(() => {
    if (profile?.user) {
      navigate('/d/dashboard/main');
    }
  }, [profile.user, navigate]);

  const handleSignin = async () => {
    dispatch(signInStart());
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('/d/dashboard/main');
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">

    <div className="rounded-md shadow-md p-10 flex flex-col justify-center items-start">
      <h2 className="text-gray-700 mb-2 text-start text-lg">Login</h2>
      {!loading ? (
        <button
        className="bg-black rounded-md text-gray-50 py-1 px-4"
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
          </section>
  );
}
