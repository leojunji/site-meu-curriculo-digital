import getDataLatestGist from "../GistContent";

const LoadData = async (item) => {
  try {
    if (sessionStorage.getItem(item.name)) {
      console.log(`INFO:: data for page was already loaded in session`);
    } else {
      console.log("INFO:: loading data from server");

      let data = await getDataLatestGist(item.id);
      if (data.length > 0) {
        sessionStorage.setItem(item.name, JSON.stringify(data));
      }
    }
  } catch (error) {
    console.log("ERROR:: : " + error);
    sessionStorage.clear();
  }
};

export default LoadData;
