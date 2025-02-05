
function ProfilePicture() {
  const imageUrl = './src/assets/download.jpeg';

  const handleCLick = () => (console.log("Ouch"));  
return (
    <>
    <img onClick={handleCLick } src={imageUrl}></img>
    
    </>
  )
  }

export default ProfilePicture;