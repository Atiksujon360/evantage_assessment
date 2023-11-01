import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAssetDetails } from "../api"; // Import your API function to get asset details

const EditAsset = () => {
  const { assetId } = useParams();
  const [assetDetails, setAssetDetails] = useState(null);

  console.log("assetId", assetId);

  useEffect(() => {
    const fetchAssetDetails = async () => {
      try {
        const response = await getAssetDetails(assetId); // Fetch asset details based on assetId
        console.log("response ", response);
        setAssetDetails(response.data); // Update the asset details state
      } catch (error) {
        console.error("Error fetching asset details:", error);
      }
    };

    fetchAssetDetails();
  }, [assetId]);

  if (!assetDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <h2>Edit Asset</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 font-bold mb-2">
            Asset Number
          </label>
          <input
            type="text"
            // value={assetDetails.assetNumber}
            readOnly
            className="border rounded w-full py-2 px-3"
          />
        </div>
        {/* Add more input fields for other asset details */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>

      <div className="mt-8">
        <h3>Shared Code Images</h3>
        {/* {assetDetails.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className="mr-4 mb-4"
            style={{ maxWidth: "200px" }}
          />
        ))} */}
      </div>
    </div>
  );
};

export default EditAsset;
