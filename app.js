const video = document.getElementById('video')


function eyeTracking(){
navigator.getUserMedia(
    {video: {}},
    stream => video.srcObject = stream,
    err => console.log.error(err)
)
console.log(e.target.id)
}

eyeTracking()