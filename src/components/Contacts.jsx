import { useContext } from "react";
import ContactContext from "../ContactContext";
import ContactCard from "./ContactCard";
import Spinner from "./Spinner";

function Contacts() {
  const { isLoading, contactList, error } = useContext(ContactContext);
  return (
    <div>
      {isLoading && <Spinner />}
      <main className="p-20 grid sm:grid-cols-1  gap-6 md:grid-cols-3 lg:grid-cols-4">
        {contactList?.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
        {error && (
          <h1 className="font-black text-center text-gray-800 text-2xl">
            No user on contact list
          </h1>
        )}
      </main>
    </div>
  );
}

export default Contacts;
