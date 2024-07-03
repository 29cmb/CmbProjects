class Project {
    constructor(imgPath, title, description, redirection) {
      this.imgPath = imgPath;
      this.title = title;
      this.description = description;
      this.redirection = redirection;
    }

    display() {
        let projectHTML = `
            <div class="project">
            <img src="${this.imgPath}" alt="Project Image">
            <p style='font-size:18px;'><b>${this.title}</b></p>
            <p class="desc">${this.description}</p>
        `;

        if (this.redirection != null){
          projectHTML +=` <button onclick="window.location.href='${this.redirection}'">Check it out</button>`
        }
        
        projectHTML +=`</div>`;
        document.getElementById('container').innerHTML += projectHTML;
    }

}