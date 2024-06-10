import { Octokit } from "octokit";
import axios from "axios";

const token = import.meta.env.TOKEN;

const octokit = new Octokit({ auth: token });

async function getUrlLatestGist(gistId) {
  console.log("INFO:: BUIDING URL");
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
    const rawUrl = `https://gist.githubusercontent.com/raw/${gistId}/${latestCommitId}`;

    console.log("raw_url: " + rawUrl);

    return rawUrl;
  } catch (error) {
    console.error("ERROR:: fetching Gist content:", error);
    return null;
  }
}

const getDataLatestGist = async (gistId) => {
  try {
    const url = await getUrlLatestGist(gistId);
    console.log("INFO:: FETCHING DATA");
    const gistContentResponse = await axios.get(url);
    const datas = gistContentResponse.data;
    return datas;
  } catch (error) {
    console.error("loadDataFromServer error = " + error);
    return [];
  }
};

export default getDataLatestGist;
