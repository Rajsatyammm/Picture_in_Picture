const videoElement = document.querySelector('#video');
const btn = document.querySelector('.button-container');
const singleClick = document.querySelector('#singleClick');
const dblClick = document.querySelector('#dblClick');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            dblClick.classList.add('hide');
            singleClick.classList.add('active');
            singleClick.classList.remove('hide');
        }
    } catch(e) {
        console.log('Error :', e);
    }
}

async function handlePictureInPicture() {
    // console.log('click hua bro');
    await videoElement.requestPictureInPicture();
    singleClick.classList.add('hide');

    // btn.classList.add('hide');
}


// on load
// window.addEventListener('DOMContentLoaded', () => {
//     selectMediaStream();
// });
