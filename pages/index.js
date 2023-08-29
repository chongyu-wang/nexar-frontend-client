import React, { useState } from 'react';
import Header from './components/Header';
import { useRouter } from 'next/router';
import LoginAndRegister from './components/LoginAndRegister';
import VideoPlayer from "react-background-video-player";


function Index() {
  const backgroundImg = "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg";
  const [showSignup, setShowSignup] = useState(false);

  const router = useRouter();

  function route(event) {
    event.preventDefault()
    router.push("/Chat");
  }

  return (
    <div class="flex flex-col h-screen">
      <Header setShowSignup = {setShowSignup}/>
      {/* <div class="flex-grow bg-blue-500 bg-no-repeat bg-cover items-center justify-center" style={{ backgroundImage: `url(${backgroundImg})`}}> */}
      <div class="flex-grow bg-no-repeat bg-cover items-center justify-center">
          <VideoPlayer
          className="video"
          src={
            "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
          }
          autoPlay={true}
          muted={true}
          style={{position: "relative"}}
        />
        <div style={{position: "absolute", width: "100%", height: "100%", ...(showSignup ? {top: "100px"} : {} )}}>
          {showSignup && <LoginAndRegister setShowSignup={setShowSignup}/>}
        </div>
      </div>
    </div>
  );
}

export default Index;


