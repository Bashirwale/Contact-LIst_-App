import { ContactProvider } from "./ContactContext";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

function App() {
  return (
    <ContactProvider>
      <div className="bg-gray-100 h-full p-4">
        <Header />
        <Contacts />
      </div>
    </ContactProvider>
  );
}

export default App;
