
function ProfilePicture() {
  const imageUrl = './src/assets/download.jpeg';

  const handleCLick = (e) => e.target.style.display="none";  
return (
    <>
    <img onClick={(e)=>handleCLick(e) } src={imageUrl}></img>
    
    </>
  )
  }

export default ProfilePicture;