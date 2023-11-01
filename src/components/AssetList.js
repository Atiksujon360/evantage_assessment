import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { getAssetList } from "../api"; // Import your API function
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const AssetList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3); // Set to 3 to display up to 3 pages
  const [assets, setAssets] = useState([]);

  const fetchAssets = useCallback(async () => {
    try {
      const response = await getAssetList("MSW", currentPage, searchTerm);
      setAssets(response.data.result);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  }, [currentPage, searchTerm]);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchAssets();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mr-2 px-4 py-2 rounded ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {i}
        </button>
      );
    }
    return paginationButtons;
  };

  return (
    <div className="container mx-auto my-8">
      <TextField
        label="Search Asset Number"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        className="mb-4 mr-4"
      >
        Search
      </Button>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset Number</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.col1}>
                <TableCell>{asset.col1}</TableCell>
                <TableCell>{asset.col9}</TableCell>
                <TableCell>
                  <Link
                    to={`/edit/${asset.col1}`}
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-4">{renderPaginationButtons()}</div>
    </div>
  );
};

export default AssetList;
