// AssetForm.js
import React from "react";

const AssetForm = ({ asset }) => {
  return (
    <div>
      <h1>Edit Asset</h1>
      <p>Asset Number: {asset.col1}</p>
      <p>Description: {asset.col9}</p>
      {/* Add form fields for editing asset details */}
    </div>
  );
};

export default AssetForm;
