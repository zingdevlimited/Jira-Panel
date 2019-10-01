import React, { useState, useEffect } from 'react';
import './App.css';

const globalWindow:any = global;

const App: React.FC = () => {
  const [key, setkey] = useState();

  useEffect(() =>{
    globalWindow.window.AP.context.getContext(function(response:any){
      console.log(response);
      setkey(response.jira.issue.key);
    })
  })
  
  return (
    <div>
      {key}
    </div>
  );
}

export default App;
