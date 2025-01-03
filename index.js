window.onload=onLoad;

function onLoad() {
    appendData(applicationsJson);
}

function appendData(data) {
    let mainContainer = document.getElementById("applications");
    for (let i = 0; i < data.length; i++) {
        let link = document.createElement("a");
        link.href = data[i].url;
        link.className = "appUrl";
        let img = document.createElement("img");
        img.src = data[i].image;
        img.width = "50";
        img.height = "50";
        let div = document.createElement("div");
        div.innerHTML = data[i].name;
        link.appendChild(img);
        link.appendChild(div);
        mainContainer.appendChild(link);
    }
}
