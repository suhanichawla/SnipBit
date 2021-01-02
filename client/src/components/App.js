import React,{useState,useEffect} from 'react';
import Editor from "./editor";

function App() {
  const [html,setHtml]=useState('')
  const [css,setCSS]=useState('')
  const [js,setJs]=useState('')
  const [srcDoc,setSrcDoc]=useState('')

  useEffect(()=>{
    const timeout=setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `)
    }, 1000);
    return ()=> clearTimeout(timeout)
  },[html,css,js])

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor 
          displayName='HTML' 
          language='xml'
          value={html}
          onChange={setHtml}
        />
        <Editor 
          displayName='CSS' 
          language='css'
          value={css}
          onChange={setCSS}
        />
        <Editor 
          displayName='JS' 
          language='javascript'
          value={js}
          onChange={setJs}
        />

      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
