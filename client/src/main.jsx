import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepasge from "./routes/homepage/Homepasge";
import RootLayout from "./layouts/RootLayoute/RootLayout";
import Dashboardpage from "./routes/dashboard/Dashboardpage";
import Dashboardlayout from "./layouts/DashboardLayout/Dashboardlayout";
import Chatpage from "./routes/chatpage/Chatpage";
import Signinpage from "./routes/SignPage/Signinpage";
import SignUppage from "./routes/Signuppage/SignUppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepasge />,
      },
      {
        path: "/sign-in/*",
        element: <Signinpage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUppage />,
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboardpage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
