import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import AllButtons from './components/AllButtons'
import Table from './components/Table'

function App() {
  const buttons = [ "Sort A->Z", "Sort Z->A", "Sort By Marks", "Sort By Passing", "Sort By Class", "Sort By Gender" ]
  const [ studentdata, setStudentdata ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ searchdata, setsearchdata ] = useState("")
  const [ allStudentData, setAllStudentData ] = useState([])

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json")
      const data = await response.json()
      setStudentdata(data)
      setAllStudentData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchStudents()
  }, [])

  const handleButtonClick = (type) => {
    let sortedData = [ ...studentdata ]

    switch (type) {
      case "Sort A->Z":
        sortedData.sort((a, b) => a.first_name.localeCompare(b.first_name))
        break
      case "Sort Z->A":
        sortedData.sort((a, b) => b.first_name.localeCompare(a.first_name))
        break
      case "Sort By Marks":
        sortedData.sort((a, b) => b.marks - a.marks)
        break
      case "Sort By Passing":
        sortedData.sort((a, b) => b.passing - a.passing)
        break
      case "Sort By Class":
        sortedData.sort((a, b) => a.class - b.class)
        break
      case "Sort By Gender":
        sortedData.sort((a, b) => a.gender.localeCompare(b.gender))
        break
      default:
        break
    }
    setStudentdata(sortedData)
  }

  return (
    <div>
      <Header />
      <div className='eighty'>
        <Search
          searchdata={searchdata}
          setsearchdata={setsearchdata}
          allStudentData={allStudentData}
          setStudentdata={setStudentdata}
        />

        <AllButtons buttons={buttons} onButtonClick={handleButtonClick} />
        <Table data={studentdata} />
      </div>
    </div>
  )
}

export default App
