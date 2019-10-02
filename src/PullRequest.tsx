import React from 'react';
import {PR} from './models/JiraObject';
import Button from '@atlaskit/button';
import './PullRequest';
export interface PullRequestProps{
    PRs: PR[];
}

const PullRequest: React.FC<PullRequestProps> = (props: PullRequestProps) =>{
    
    return(
        <div>
            <ol>
            {props.PRs.map((item,i) =>{
                return(
                <li style={{height: "1em", marginBottom: "2em"}} key={i}>
                    PR ID: {item.id} <Button appearance="warning" onClick={() => window.open(`https://dev.azure.com/${item.name}/_git/${item.repoTitle}/pullrequest/${item.id}`)}>Check it out</Button>      
                </li>)
            })}
            </ol>
        </div>
    )
}

export default PullRequest;
