import { Input } from "antd"
import { useState } from "react"
import AddIconDialog from "./AddIconDialog"
import IconsShow from "./IconsShow"

function App() {
  const [searchName, setSearchName] = useState('')
  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-bold mt-48">Welcome to <span className="text-blue-500">Icon Zoo</span>!</h1>
      <div className="w-600px flex gap-2">
        <Input onPressEnter={(e) => {setSearchName(e.currentTarget.value)}} allowClear placeholder="Search icons" size="large"/>
        <AddIconDialog />
      </div>
      <IconsShow searchName={searchName} />
    </div>
  )
}

export default App
