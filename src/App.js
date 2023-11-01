// App.js
import React from "react";
import AssetList from "./components/AssetList";
import EditAsset from "./components/EditAsset";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetList />} />
        <Route path="/edit/:assetNumber" component={EditAsset} />
      </Routes>
    </Router>
  );
}

export default App;
