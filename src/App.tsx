import React, { useState, useEffect } from 'react';
import PullRequest from './PullRequest';
import Repos from './Repos';
import {Repo, PR, Mapping} from './models/JiraObject';
import getPRInfo from './api/getPR';
import { Typography } from '@material-ui/core';

const globalWindow:any = global;

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [PRs, setPRs] = useState<PR[]>([]);

  useEffect(() =>{
    globalWindow.window.AP.context.getContext(function(response:any){
      async function getPrs(){
        const res: Mapping = await getPRInfo({key: response.jira.issue.key});
        setPRs(res.pullRequests);
        setRepos(res.repos);
      }
      getPrs();
    })
  },[])

  return (
    <div>
      <Typography variant="h5" component="h6">Linked Pull Requests</Typography>
      {PRs.length === 0 ? 'No Linked Pull Requests' : <PullRequest PRs={PRs}/>}
      <Typography variant="h5" component="h6">Linked Repositories</Typography>
      {repos.length === 0 ? 'No Linked Repositories' :<Repos repos={repos}/>}
    </div>
  );
}

export default App;
