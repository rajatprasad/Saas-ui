import vector from "../assets/Vector.png"

const Bar = () => {
  return (
    <div className="bg-black flex justify-center py-4 ">
        <div className="text-white/60 opa  px-2">
            <p>This page is included in a free SaaS Website Kit.</p>
        </div>
        <div className="text-white px-2 flex items-center">
            <span>View the complete kit</span>
            <span className="px-2" >
                <img src={vector} alt="right-arrow" />
            </span>
        </div>
    </div>
  )
}

export default Bar