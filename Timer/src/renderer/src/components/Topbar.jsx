import React from 'react'

export default function Topbar() {
  const handleClose =()=>{
      window.Electron.ipcRenderer.send("close-window")
  }
  const handleMinimize = ()=>{
    window.electron.ipcRenderer.send("minimize-window")
  }
  return (

    <div>
      <div className="rounded-t-xl bg-blue-400 w-screen h-5" style={{ webAppRegion: 'drag' }}>
      </div>
      <div className='bg-blue-400 w-screen h-3'></div>
      <div id="control-button" className='text-stone-200 absolute top-1 right-0 pe-2'>
        <button className='pe-1'  id="minimizer" onClick={handleMinimize}>&#95;</button>
        <button className='pe-1' id="close"  onClick={handleClose}>&#10006;</button>
      </div>
    </div>
  )
}
