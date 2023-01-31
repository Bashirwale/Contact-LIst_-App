import { createContext } from "react";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

const ContactContext = createContext({});

export function ContactProvider({ children }) {
  const url = "https://randomuser.me/api/";
  const { isLoading, data, error } = useFetch(url + "?results=100");
  const [contactList, setContactList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = data?.results?.filter((contact) => {
        const fullName = ` ${contact.name.title} ${contact.name.first} ${contact.name.last}`;
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });
      setContactList(filteredData);
    } else {
      setContactList(data?.results);
    }
  }, [data, filterQuery]);
  const getRandomUsers = () => {
    window.location.reload();
  };

  return (
    <ContactContext.Provider
      value={{
        data,
        error,
        isLoading,
        contactList,
        filterQuery,
        getRandomUsers,
        setFilterQuery,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
export default ContactContext;
