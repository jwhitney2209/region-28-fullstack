import { Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import AuthService from "./utils/auth";

import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HighSchool from "./pages/HighSchool";
import MiddleSchool from "./pages/MiddleSchool";
import Directory from "./pages/Directory";
import Calendar from "./pages/Calendar";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AddMemberForm from "./components/AddMemberForm";

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_APP_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = AuthService.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/high-school" element={<HighSchool />} />
            <Route path="/middle-school" element={<MiddleSchool />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<Admin />} />
              <Route path="add-member" element={<AddMemberForm/>} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
