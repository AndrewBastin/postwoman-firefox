import axios from "axios";

const firefoxExtSendRequest = (req) => {
  axios(req)
    .then((res) => {
      window.dispatchEvent(new CustomEvent(
        "firefoxExtSendRequestComplete",
        {
          detail: cloneInto({
            response: JSON.stringify(res)
          }, window)
        }
      ), window);
    })
    .catch((e) => {
      window.dispatchEvent(new CustomEvent(
        "firefoxExtSendRequestComplete",
        {
          detail: cloneInto({
            error: JSON.stringify(e)
          }, window)
        }
      ))
    });
}

exportFunction(firefoxExtSendRequest, window, { defineAs: "firefoxExtSendRequest" });

console.log("Connected to Postwoman Firefox Extension!");
