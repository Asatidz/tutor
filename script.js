const videos = [
  {
    title: "Video Pertama",
    description: "Ini adalah deskripsi video pertama.",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+1",
  },
  {
    title: "Video Kedua",
    description: "Ini adalah deskripsi video kedua.",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+2",
  },
  {
    title: "Video Ketiga",
    description: "Ini adalah deskripsi video ketiga.",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+3",
  },
];

const videoContainer = document.getElementById("video-container");

videos.forEach((video) => {
  const videoCard = document.createElement("div");
  videoCard.className = "video-card";

  videoCard.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
    `;

  videoContainer.appendChild(videoCard);
});
