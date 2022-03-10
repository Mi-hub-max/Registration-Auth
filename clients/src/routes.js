import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { CreatePage } from "./Pages/CreatePage";
import { AuthPage } from "./Pages/AuthPage";
import { LinksPage } from "./Pages/LinkPage";

export const useRoutes = (isAutentificated) => {
  if (isAutentificated) {
    return (
      <Routes>
        <Route path="/linjs" element={<LinksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<Navigate replace to="/create" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate replace to="/auth" />} />
      </Routes>
    );
  }
};
