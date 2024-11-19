import { useState } from "react"
import Topbar from "./components/Topbar"

import Timer from "./components/Timer";
function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const [Overlay ,setOverlay] = useState(false);
  return (
    <>
      <Topbar />
      <div className="bg-black bg-opacity-40 p-2 rounded-b-xl">
      <Timer/>
     </div>
    </>
  )
}

export default App

