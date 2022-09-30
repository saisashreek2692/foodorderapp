import React from "react";

import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Header, MainContent, CreateContent } from "./Components";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContent />} />
            <Route path="/createItem" element={<CreateContent />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
