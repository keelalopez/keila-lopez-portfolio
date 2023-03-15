import { useState } from "react";
function App() {
  return <RobotList />;
}
const RobotList = () => {
  const [robots, setRobots] = useState([])
  const [formData, setFormData] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setRobots([...robots, formData])
    setFormData("")
  }
    // console.log(robots)
  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={handleSubmit}>
        <input 
          value={formData}
          type="text"
          onChange={e => setFormData(e.target.value)}
          placeholder="Generate Robot">
        </input>
        <button>Enter</button>
      </form>
      <h1>Robot List</h1>
      {robots.map((eachRobot, index) => (
        <>
          <img 
            key={index}
            src={`https://robohash.org/${eachRobot}`} 
            alt="robot"
            // REFACTORED/CLEAN WAY TO DO IT:
            // onClick={() => setRobotList(robotList.filter((r) => r != robo))}
            onClick={()=> {
              const updatedRobots = robots.filter((robotObjFromFilter) => {
                return robotObjFromFilter!== eachRobot
              })
              setRobots(updatedRobots)
            }
            }
          />
        </>
      ))}
    </div>
  )
};
export default App;