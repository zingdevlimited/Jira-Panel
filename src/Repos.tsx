import React from 'react';
import { Repo} from './models/JiraObject';
import Lozenge from '@atlaskit/lozenge';
export interface ReposProps{
    repos: Repo[]
}

const Repos: React.FC<ReposProps> = (props: ReposProps) =>{

    return(
    <div>
        <ol>
            {props.repos === undefined ? '' : props.repos.map((item,i) => {
                return(<li key={i}>{item.repoName} <Lozenge appearance="moved">{item.status}</Lozenge></li>)
            })}
        </ol>
    </div>
    )
}

export default Repos;