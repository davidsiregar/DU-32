let blogs = [];

function addBlog() {
  let title = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("desc-area").value;
  // let checkbox = document.getElementById(
  //   "tech1",
  //   "tech2",
  //   "tech3",
  //   "tech4"
  // ).value;
  let image = document.getElementById("input-image").files[0];

  image = URL.createObjectURL(image);

  let blog = {
    title: title,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    image: image,
    // checkbox: checkbox,
    author: "boys",
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
  // renderBlogDetail();
}

function deletePost(id) {
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === id) {
      blogs.splice(i, 1);
    }
  }
  renderBlog();
}

// function editPost() {
//   let elemen = document.getElementById("content-list").children[blogs];
//   let newNode = editPostD();
//   elemen.replaceChild(newNode, elemen.childNotes[blogs]);
// }
// function editPostD() {
//   let title = document.getElementById("project-name").value;
//   let startDate = document.getElementById("start-date").value;
//   let endDate = document.getElementById("end-date").value;
//   let desc = document.getElementById("desc-area").value;
//   let image = document.getElementById("input-image").files[0];

//   image = URL.createObjectURL(image);

//   let blog = {
//     title: title,
//     startDate: startDate,
//     endDate: endDate,
//     desc: desc,
//     image: image,
//     author: "boys",
//     postedAt: new Date(),
//   };

//   blogs.push(blog);

//   let blogContainer = document.getElementById("content-list");

//   for (let i = 0; i < blogs.length; i++) {
//     let startDate = new Date(blogs[i].startDate);
//     let endDate = new Date(blogs[i].endDate);

//     let difference = endDate - startDate;
//     let days = difference / (1000 * 60 * 60 * 24);

//     let month = 0,
//       years = 0,
//       weeks = 0,
//       day = 0;
//     while (days) {
//       if (days >= 365) {
//         years++;
//         days -= 365;
//       } else if (days >= 30) {
//         month++;
//         days -= 30;
//       } else if (days >= 7) {
//         weeks++;
//         days -= 7;
//       } else {
//         day++;
//         days--;
//       }
//     }

//     blogContainer.innerHTML += `<div class="content-list-item" >
//     <div class="foto">
//       <img src="${blogs[i].image}" alt="samsung" />
//     </div>

//     <div class="blog-content">
//     <div class="title">
//       <h1><a href="../Day 3/my-project-detail.html">${blogs[i].title} </a></h1>
//       <h3>durasi:${years} years ${month} month ${weeks} weeks ${day} day</h3>
//     </div>
//     <p>
//     ${blogs[i].desc}
//     </p>
//     <div class="logo-js">
//       <img src="../Day 3/asset/playstore.png" alt="">
//       <img src="../Day 3/asset/android.png" alt="">
//       <img src="../Day 3/asset/java.png" alt="">
//     </div>
//     <div class="btn-group">
//       <a href="../Day 3/my-project.html" class="btn-edit" onclick="editPost()">Edit post</a>
//       <a href="#" class="btn-delete" onclick="deletePost()" >Delete Post</a>
//     </div>
//   </div>
// </div>`;
//   }
// }

function renderBlog() {
  let blogContainer = document.getElementById("content-list");

  blogContainer.innerHTML = `<div class="content-list-item" >
  <div class="foto">
    <img src="../Day 3/asset/samsung.webp" alt="samsung" />
  </div>

  <div class="blog-content">
  <div class="title">
    <h1><a href="../Day 3/my-project-detail.html">Mobile Apps</a></h1>
    <h3>durasi: 3 bulan</h3>
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
    veniam placeat, non sapiente illum quis error blanditiis repellat at
    quia reprehenderit ipsam aliquid soluta consectetur quasi expedita
    provident nostrum accusamus.
  </p>
  <div class="logo-js">
    <img src="../Day 3/asset/playstore.png" alt="">
    <img src="../Day 3/asset/android.png" alt="">
    <img src="../Day 3/asset/java.png" alt="">
  </div>
  <div class="btn-group">
    <a href="#" class="btn-edit">Edit post</a>
    <a href="#" class="btn-delete" onclick="deletePost()">Delete Post</a>
  </div>
</div>
</div>`;

  for (let i = 0; i < blogs.length; i++) {
    let startDate = new Date(blogs[i].startDate);
    let endDate = new Date(blogs[i].endDate);

    let difference = endDate - startDate;
    let days = difference / (1000 * 60 * 60 * 24);
    // let month = Math.round(difference / (1000 * 60 * 60 * 24 * 30));

    let month = 0,
      years = 0,
      weeks = 0,
      day = 0;
    while (days) {
      if (days >= 365) {
        years++;
        days -= 365;
      } else if (days >= 30) {
        month++;
        days -= 30;
      } else if (days >= 7) {
        weeks++;
        days -= 7;
      } else {
        day++;
        days--;
      }
    }

    blogContainer.innerHTML += `<div class="content-list-item" >
    <div class="foto">
      <img src="${blogs[i].image}" alt="samsung" />
    </div>

    <div class="blog-content">
    <div class="title">
      <h1><a href="../Day 3/my-project-detail.html">${blogs[i].title} </a></h1>
      <h3>durasi:${years} years ${month} month ${weeks} weeks ${day} day</h3>
    </div>
    <p>
    ${blogs[i].desc}
    </p>
    <div class="logo-js">
      <img src="../Day 3/asset/playstore.png" alt="">
      <img src="../Day 3/asset/android.png" alt="">
      <img src="../Day 3/asset/java.png" alt="">
    </div>
    <div class="btn-group">
      <a href="#" class="btn-edit" onclick="editPost()">Edit post</a>
      <a href="#" class="btn-delete" onclick="deletePost()" >Delete Post</a>
    </div>
  </div>
</div>`;
  }
}

function addBlogDetail() {
  let title = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("desc-area").value;
  // let checkbox = document.getElementById(
  //   "tech1",
  //   "tech2",
  //   "tech3",
  //   "tech4"
  // ).value;
  let image = document.getElementById("input-image").files[0];

  image = URL.createObjectURL(image);

  let blog = {
    title: title,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    image: image,
    // checkbox: checkbox,
    author: "boys",
    postedAt: new Date(),
  };

  blogs.push(blog);
  renderBlogDetail();
}

function renderBlogDetail() {
  let blogDetailContainer = document.getElementById("content-list");
  for (let i = 0; i < blogs.length; i++) {
    blogDetailContainer.innerHTML += ` <div class="project-detail">
    <h1>${blogs[i].title}</h1>
    <div class="content-detail">
      <div class="left">
        <img src="${blogs[i].image}" alt="">
      </div>
      <div class="right">
        <h2>Duration</h2>
        <div class="duration-date">
          <img src="../Day 3/asset/date.png" alt="">
          <h3>${blogDetailContainer[i].startDate} ${blogDetailContainer[i].endDate}</h3>
        </div>
        <div class="month">
          <img src="../Day 3/asset/clock.jpg" alt="">
          <h3>1 Month</h3>
        </div>
  
        <h2>Technology</h2>
        <div class="tech-post">
          <div class="left">
            <div class="tech">
              <img src="../Day 3/asset/react.png" alt=""> 
              <h3>React js</h3>
          </div>
  
          <div class="tech2">
            <img src="../Day 3/asset/react.png" alt=""> 
            <h3>React js</h3>
        </div>
          </div>
  
        <div class="right">
          <div class="tech3">
            <img src="../Day 3/asset/nextjs.png" alt=""> 
            <h3>React js</h3>
        </div>
  
        <div class="tech4">
          <img src="../Day 3/asset/typescript.png" alt=""> 
          <h3>React js</h3>
      </div>
  
        </div>
        </div>
        </div>
      
    </div>
  <p>A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go.
  
    One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.
  </p>
   
  
  </div>`;
  }
}

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hour = time.getHours();
  let minute = time.getMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute}`;

  return fullTime;
}

function getDistanceTime(time) {
  let timeStart = new Date();
}
