import { useState } from "react";
import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Loader,
  Transactions,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
