import getDataLatestGist from "../GistContent";
import { ERROR_PREFIX, INFO_PREFIX } from "../../constants";

const StoreInSessionData = async (item) => {
  try {
    // if (sessionStorage.getItem(item.name)) {
    //   console.log(`INFO:: data for page was already loaded in session`);
    // } else {

    let data = await getDataLatestGist(item.id);
    if (data.length > 0) {
      sessionStorage.setItem(item.name, JSON.stringify(data));
      console.log(`${INFO_PREFIX} -DATA STORED IN SESSION`);
    }
    // }
  } catch (error) {
    console.log(`${ERROR_PREFIX} >" + ${error}`);
    sessionStorage.clear();
  }
};

export default StoreInSessionData;
