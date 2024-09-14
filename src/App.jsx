import "./App.css";
import SearchParams from "./2.pages/SearchPage/SearchParams.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./2.pages/SearchPage/Details.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./1.components/Navbar.jsx";
import Footer from "./1.components/Footer.jsx";
import { Provider } from "react-redux";
import storePet from "./Petstore.js";
import UserHome from "./2.pages/AdminPage/UserHome.jsx";
import Contact from "./2.pages/ContactPage/Contact.jsx";
import CreateUsers from "./2.pages/AdminPage/UserCreate.jsx";
import UserEdit from "./2.pages/AdminPage/UserEdit.jsx";
import About from "./2.pages/AboutPage/About.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Provider store={storePet}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/userHome/edit/:id" element={<UserEdit />} />
            <Route path="/userHome/CreateUsers" element={<CreateUsers />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Provider>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
