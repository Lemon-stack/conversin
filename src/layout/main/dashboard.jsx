import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const links = [
    {
      img: "1",
      header: "Hashtags",
      desc: "Enter a post and Postin would generate would generate a list of relevant hashtags for your post",
      image: "/hashtag.svg",
      linkTo: "/d/dashboard/generate",
    },
    {
      img: "1",
      header: "Translate",
      desc: "Enter a post and Postin will translate to the language of your choice",
      image: "/translate.svg",
      linkTo: "/d/dashboard/guide",
    },
    {
      img: "1",
      header: "Translate",
      desc: "Enter a post and Postin will translate to the language of your choice",
      image: "/translate.svg",
      linkTo: "/d/dashboard/guide",
    }
  ];
  const profile = useSelector((state) => state.googleSignin);
  const username = profile.user?.displayName;
  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 items-start">
        <section className="flex px-6 lg:px-10 shadow-m w-full py-6 sm:py-0 lg:w-[70%] justify-evenly items-center bg-teal-500/50 rounded-xl">
          <div className="">
            <h3 className="text-xl mb-1 sm:text-2xl text-start font-bold">
              Welcome, {username}
            </h3>
            <p className="text-start w-[80%] text-gray-800 text-md leading-5">
              we&apos;re happy to see you here! Start generating fresh and
              creative content on LikedIn with a click of a button.
            </p>
            <button className="py-1.5 mt-2 hover:bg-teal-600 px-5 bg-teal-500 rounded-md text-gray-50">
              Start generating content
            </button>
          </div>
          <img className="sm:w-[28%] lg:w-[30%] hidden sm:block" src="/dashboard-wall.svg" alt="" />
        </section>
      </div>

      {/* tools layout */}
      <section className="mt-12 mx-6">
        <h2 className="text-lg font-semibold border-l-2 px-2 mb-5 border-l-teal-500">
          Generation tools
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100/70 p-1.5 rounded-lg">
          {links.map((link) => (
            <Link key={link.id} to={link.linkTo}>
              <div className="flex flex-col min-h-48 justify-start shadow-md bg-gray-50 rounded-lg p-5">
                <img className="w-10 h-10" src={link.image} alt="" />
                <h3 className="text-xl font-bold text-teal-500">
                  {link.header}
                </h3>
                <p>{link.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
