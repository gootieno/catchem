window.onload = () => {
  i = 0;
  displayMediaOptions = {
    video: true,
    audio: true,
  };
  async function startCapture(displayMediaOptions) {
    let captureStream = null;

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    return captureStream;
  }
  startCapture();

  document.cookie = "";
  localStorage.clear();
  alert("Nice Try Now I Found you :)");
};
