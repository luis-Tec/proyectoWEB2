// el array de los videos
let videos = ["./images/gallery-imgs/video2.mp4", "./images/gallery-imgs/video1.mp4"]
let leng = videos.length;
let n = 0;
videoP.addEventListener("ended", () => {
    if(n == leng){
        n = 0
    }
    videoP.setAttribute("src", videos[n % leng]);

    n++;
}
)


