let blogs = [];

function addBlog() {
  let title = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("desc-area").value;
  let checkbox = document.getElementById("tech1").value;
  let image = document.getElementById("input-image").files[0];

  image = URL.createObjectURL(image);

  let blog = {
    title: title,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    checkbox: checkbox,
    author: "boys",
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogContainer = document.getElementById("blogs");

  blogContainer.innerHTML = ` <div class="content-list-item">
    <div class="foto">
      <img src="../Day 3/asset/samsung.webp" alt="samsung" />
    </div>

    <div class="blog-content">
    <div class="title">
      <h2>Mobile Apps</h2>
      <h3>durasi: 3 bulan</h3>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
      veniam placeat, non sapiente illum quis error blanditiis repellat at
      quia reprehenderit ipsam aliquid soluta consectetur quasi expedita
      provident nostrum accusamus.
    </p>
    <div class="logo-js">
      <img src="../Day 3/asset/react.png" alt="" />
      <img src="../Day 3/asset/nextjs.png" alt="" />
      <img src="../Day 3/asset/nodejs.png" alt="" />
      <img src="../Day 3/asset/typescript.png" alt="">
    </div>
    <div class="btn-group">
      <a href="#" class="btn-edit">Edit post</a>
      <a href="#" class="btn-delete">Delete Post</a>
    </div>
  </div>
</div>`;

  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += ` <div class="content-list-item">
    <div class="foto">
      <img src="${blogs[i].image}" alt="samsung" />
    </div>

    <div class="blog-content">
    <div class="title">
      <h2>${blogs[i].title}</h2>
    <h3>durasi: ${blogs[i].startDate} ${blogs[i].endDate}</h3>
    </div>
    <p>
      ${blogs[i].desc}
    </p>
    <div class="logo-js">
      ${blogs[i].checkbox}
    </div>
    <div class="btn-group">
      <a href="#" class="btn-edit">Edit post</a>
      <a href="#" class="btn-delete">Delete Post</a>
    </div>
  </div>
</div>`;
  }
}
