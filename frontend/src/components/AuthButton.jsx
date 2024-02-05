import { Link } from "react-router-dom";

const AuthButton = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="px-4 py-3 text-white bg-black hover:bg-black/70 rounded"
    >
      {text}
    </Link>
  );
};

export default AuthButton;
