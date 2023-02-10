function Login(){
    return(
        <div className="flex w-full h-screen justify-evenly items-center bg-[url('./assests/eth2.jpg')] bg-cover bg-no-repeat ">
            <img src="user.png" alt="User" width="150" height="150" className="bg-gray-300 rounded-full hover:scale-110 ease-out duration-300"/>
            <img src="doctor.png" alt="Doctor" width="150" height="150" className="bg-gray-300 rounded-full hover:scale-110 ease-out duration-300"/>
            <img src="hospital-buildings.png" alt="Hospital" width="150" height="150" className="bg-gray-300 rounded-full hover:scale-110 ease-out duration-300"/>
        </div>
    )
}
export default Login