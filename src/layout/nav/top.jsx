import { useSelector } from "react-redux";

export default function Top() {
    const profile = useSelector((state)=> state.googleSignin)
  const username =profile.user?.displayName;
  return <div>{username}</div>;
}
