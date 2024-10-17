
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const body = document.querySelector("body");
  // body.style.backgroundColor = "teal";
  
  const init = () => {
    const section = document.createElement("section");
    section.style.display = "flex";
    section.style.flexWrap = "wrap";
    section.style.justifyContent = "space-around";
    for (let i = 0; i < freelancers.length; i++) {
      const element = freelancers[i];
      const div = document.createElement("div");
      div.style.display = "grid";
      const h3 = document.createElement("h3");
      h3.innerText = element.name;
      h3.style.backgroundColor = "magenta";
      div.append(h3);
      const img = document.createElement("img");
      img.src = element.image;
      img.style.width = "200px";
      div.append(img);
      const a = document.createElement("a");
      a.href = element.url;
      a.innerText = `Learn more ${element.name}`;
      a.target = "_blank";
      div.append(a);
      section.append(div);
    }
    body.append(section);

    const init = () => {
        const section = document.createElement("section");
        section.style.display = "flex";
        section.style.flexWrap = "wrap";
        section.style.justifyContent = "space-around";
        document.body.append(section);
      
        const randomFreelancers = getRandomItems(freelancers, 2);
        const addFreelancer = () => {
          const randomIndex = Math.floor(Math.random() * freelancers.length);
          const add = freelancers[randomIndex];
          const myTimeout = setTimeout(myGreeting, 8000);
          body.append(add);
        };
        randomFreelancers.forEach((element) => {
          const div = document.createElement("div");
          const h3 = document.createElement("h3");
          const h4 = document.createElement("h4");
          const h5 = document.createElement("h5");
          h3.innerText = element.name;
          h3.style.backgroundColor = "teal";
          h4.innerText = element.occupation;
          h4.style.backgroundColor = "white";
          p.innerText = `Price per Hour: $${element.price}`;
          p.style.backgroundColor = "white";
          div.append(h3);
          div.append(h4);
          div.append(h5);
          section.append(div);
        });
        document.body.append(section);
      };
      
  };
  
  init();

  // be sure to decalre your body and then at the end to append your divs and sections and stuff into your body
// setInterval()
