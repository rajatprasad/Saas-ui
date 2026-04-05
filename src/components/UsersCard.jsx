
const UsersCard = ({text, name, username, image}) => {
  return (
    <div className="p-4 my-4 mx-4 rounded-xl shadow-xl">
        <div className="w-70">
            {text}
        </div>
        <div className="mt-4 flex items-center">
            <div className="" >
                <img src={image} alt="" />
            </div>
            <div className="ml-3">
                <p>{name}</p>
                <p>{username}</p>
            </div>
        </div>
    </div>
  )
}

export default UsersCard