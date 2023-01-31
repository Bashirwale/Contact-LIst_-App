import { useContext } from "react";
import ContactContext from "../ContactContext";

function Header() {
  const { contactList, setFilterQuery, getRandomUsers, isloading } =
    useContext(ContactContext);
  return (
    <div>
      <header className="flex justify-between items-center">
        <form>
          <input
            type="text"
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search for contacts"
            className="p-1 rounded-md text-gray-800 bg-gray-300"
          />
        </form>
        <h1>
          Number of contacts:
          {isloading ? "loading..." : contactList ? contactList.length : 0}
        </h1>

        <button
          onClick={getRandomUsers}
          className="bg-gray-800 text-gray-300 p-1 rounded-md shadow-lg hover:text-gray-800 hover:bg-gray-300 hover:shadow-md "
        >
          Get Users
        </button>
      </header>
    </div>
  );
}

export default Header;
