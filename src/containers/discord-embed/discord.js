import React from "react";
import Loading from "../loading/Loading";

const serverId = process.env.REACT_APP_DISCORD_SERVER_ID;

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";
export default function Discord() {
  const theme = "dark";
  function timeOut() {
    setTimeout(function () {
      if (!document.getElementById("discord").innerHTML.includes("iframe")) {
        document.getElementById("discord").innerHTML = cantDisplayError;
      }
    }, 2000);
  }

  React.useEffect(() => {
    timeOut();
  }, []);

  return (
    <React.Suspense fallback={renderLoader()}>
      <div class="discord-main-div" id="discord">
        <div className="centerContent">
          <iframe
            src={`https://discordapp.com/widget?id=${serverId}&theme=${theme}`}
            width="300"
            height="380"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </React.Suspense>
  );
}
