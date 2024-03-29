import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Hey, welcome</h1>

      <Link to="/todo">
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Todo List
        </button>
      </Link>
    </div>
  );
}
