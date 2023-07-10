const videoElement = document.querySelector('#video');
const btn = document.querySelector('.button-container');



async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(e) {
        console.log('Error :', e);
    }
}

async function handlePictureInPicture() {
    // console.log('click hua bro');
    await videoElement.requestPictureInPicture();
    // btn.classList.add('hide');
}


// on load
// window.addEventListener('DOMContentLoaded', () => {
//     selectMediaStream();
// });
