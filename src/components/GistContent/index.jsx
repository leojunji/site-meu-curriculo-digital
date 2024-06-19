import { Octokit } from "octokit";
import axios from "axios";
import { ERROR_PREFIX, INFO_PREFIX } from "../../constants";

const token = import.meta.env.TOKEN;

const octokit = new Octokit({ auth: token });

//this function will return the URL of the latest version of the required gist
async function getUrlLatestGist(gistId) {
  console.log(`${INFO_PREFIX} -BUILDING URL`);
  try {
    // Step 1: Get the details of the Gist to find the latest commit ID
    const response = await octokit.request("GET /gists/{gist_id}", {
      gist_id: gistId,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const history = response.data.history;
    const latestCommit = history[0]; // The most recent commit is the first in the array
    const latestCommitId = latestCommit.version;

    // Step 2: Build the URL of the latest Gist version
    const rawUrl = `https://gist.githubusercontent.com/raw/${gistId}/${latestCommitId}`; //arrumar

    console.log("raw_url: " + rawUrl);

    return rawUrl;
  } catch (error) {
    console.error(`${ERROR_PREFIX} --FETCHING GIST CONTENT:", ${error}`);
    return null;
  }
}

const getDataLatestGist = async (gistId) => {
  try {
    const url = await getUrlLatestGist(gistId);
    console.log(`${INFO_PREFIX} -FETCHING DATA`);
    const gistContentResponse = await axios.get(url);
    const datas = gistContentResponse.data;
    return datas;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log(`${ERROR_PREFIX} >${error.message}`);
    }

    return null;
  }
};

export default getDataLatestGist;
