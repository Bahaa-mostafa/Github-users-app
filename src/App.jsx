import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contacts/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import CompareRepos from "./Components/CompareRepos/CompareRepos";
import RepoDetails from "./Components/RepoDetails/RepoDetails";
import Repos from "./Components/Repos/Repos";
import Login from "./Components/Login/Login";
const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "Contacts", element: <Contacts /> },
      { path: "profile/:username", element: <Profile /> },
      { path: "repos/:username", element: <Repos /> },
      { path: "compare", element: <CompareRepos /> },
      { path: "repo/:username/:repoName", element: <RepoDetails /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },

    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
