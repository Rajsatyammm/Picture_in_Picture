const videoElement = document.querySelector('#video');
const btn = document.querySelector('.button-container');
const singleClick = document.querySelector('#singleClick');
const dblClick = document.querySelector('#dblClick');

async function selectMediaStream() {
        // navigator.mediaSession.setActionHandler('play', function () {
        //     // User clicked "Play" button.
        //     });
        // navigator.mediaSession.setActionHandler('pause', function () {
        //     // User clicked "Pause" button.
        //     });
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
        console.log('Error hai yrr :', e);
    }
}

async function handlePictureInPicture() {
    // console.log('click hua bro');

    try {
        if (videoElement != document.pictureInPictureElement) {
            await videoElement.requestPictureInPicture();
        } 
        else {
            await document.exitPictureInPicture();
        }
    } 
    catch(e) {
        console.log('Error Found', e);
    }
    // singleClick.classList.add('hide');

    // btn.classList.add('hide');
}


// on load
// window.addEventListener('DOMContentLoaded', () => {
//     selectMediaStream();
// });
