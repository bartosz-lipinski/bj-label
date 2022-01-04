import React from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './Label';
import data from './data.json';
import { renderToString } from 'react-dom/server';

const onSave = async () => {
  const directoryHandle: any = await (window as any).showDirectoryPicker();
  
  const TOTAL = 750;
  const URL_BASE = 'https://bj.xyz'
  for (let i = 0; i < TOTAL; i++) {
      const item = data[i];
      const fileHandle = await directoryHandle.getFileHandle(`${item.item}-${item.index}.svg`, {create: true});
      const writable = await fileHandle.createWritable();
    
      await writable.write(`<?xml version="1.0" encoding="utf-8"?>` + renderToString(<Label index={item.index} total={250} url={`${URL_BASE}/OG/${item.item}/${item.uuid}`}/>));
      await writable.close();
  }


  let jackets: string[] = []
  
    
  //   jackets.push(;
  // }

}

function App() {
  
  return (
    <div className="App">
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default App;
