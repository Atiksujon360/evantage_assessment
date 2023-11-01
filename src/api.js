// api.js
import axios from "axios";

const BASE_URL = "http://evantage.ddns.net/react_web";

export const getAssetList = async (siteCd, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/get_assetmasterTableData.php?site_cd=${siteCd}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAssetDetails = async (assetId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get_asset_details.php`, {
      params: {
        asset_id: assetId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSelectedAsset = async (assetNumber) => {
  try {
    const response = await axios.post(
      "http://evantage.ddns.net/react_web/get_assetmaster_select.php",
      {
        site_cd: "MSW",
        ast_mst_asset_no: assetNumber,
        asset_shortdesc: "",
        cost_center: "",
        asset_status: "",
        asset_type: "",
        asset_grpcode: "",
        work_area: "",
        asset_locn: "",
        asset_code: "",
        ast_lvl: "",
        ast_sts_typ_cd: "",
        createby: "",
        service_type: "",
        block: "",
        floor: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
