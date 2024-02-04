import backgroundImg from "../../assets/7410144.png";
import AuthButton from "../../components/AuthButton";
import Footer from "../../components/Footer";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div
      className="w-full bg-cover h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container flex items-center justify-center flex-col h-screen text-white gap-4">
        <img src={logo} alt="logo" className="aspect-auto mb-9" width={250} />
        <p className="text-2xl">Welcome to the</p>
        <h1 className="text-8xl font-Main">E-Voting Portal</h1>
        <div className="flex gap-6 flex-wrap mt-5">
          <AuthButton path={`/user-auth`} text={"User Signup"} />
          <AuthButton path={`/admin-auth`} text={"Admin Login"} />
        </div>
      </div>
      <div className="fixed w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
