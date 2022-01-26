function newShade(hexColor, magnitude) {
  hexColor = hexColor.replace("#", "");
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
}

function openArticle(id) {
  document.querySelectorAll(".info-container article").forEach((article) => {
    article.style.display = "none";
  });
  if (document.querySelector("#texto-" + id)) {
    document.querySelector("#texto-" +id).style.display =
      "block";
  }
  document
    .querySelector(".info-container")
    .classList.remove("info-container-closed");
}

document.querySelector("#section-conteudo h2").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    openArticle('lgbt');
  },
  false
);

document.querySelector("#open-sobre").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    openArticle('sobre');
  },
  false
);

document.querySelector("#open-fontes").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    openArticle('fontes');
  },
  false
);

document.querySelector("button").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    document
      .querySelector(".info-container")
      .classList.add("info-container-closed");
    document.querySelectorAll("circle").forEach((c) => {
      c.classList.remove("h");
      c.classList.remove("ho");
    });
    document.querySelectorAll("nav a").forEach((c) => {
      c.classList.remove("h");
    });
  },
  false
);

const allflags = {
  flags: [
    {
      id: "lesbica",
      colors: ["_preto", "_branco", "_philippine-violet"],
      title: "Lésbica",
      content: ""
    } /* Lesbicas */,
    {
      id: "gay",
      colors: [
        "_branco",
        "_lime-green",
        "_dark-cyan",
        "_caribbean-green",
        "_st-patricks-blue",
        "_purple-heart",
        "_dodger-blue"
      ],
      title: "Gay",
      content: ""
    } /* Gays */,
    {
      id: "bisexual",
      colors: ["_royal-red", "_philippine-violet", "_dark-powder-blue"],
      title: "Bisexual",
      content: ""
    } /* Bisexuais */,
    {
      id: "transexual",
      colors: ["_branco", "a_maranth-pink", "_maya-blue"],
      title: "Transexual",
      content: ""
    } /* Transexuais */,
    {
      id: "transgenero",
      colors: ["_branco", "_amaranth-pink", "_maya-blue"],
      title: "Transgênero",
      content: ""
    } /* Transgereno */,
    {
      id: "travesti",
      colors: ["_branco", "_amaranth-pink", "_maya-blue"],
      title: "Travesti",
      content: ""
    } /* Travesti */,
    {
      id: "queer",
      colors: ["_branco", "_floral-lavender", "_green"],
      title: "Queer",
      content: ""
    } /* Queer */,
    {
      id: "questionandose",
      colors: ["_branco", "_deep-saffron", "_maximum-yellow", "_blue"],
      title: "Questionando-se",
      content: ""
    } /* Questionandose */,
    {
      id: "intersexo",
      colors: ["_philippine-violet", "_maximum-yellow"],
      title: "Intersexo",
      content: ""
    } /* Intersexo */,
    {
      id: "assexual",
      colors: ["_preto", "_x11-gray", "_branco", "_philippine-violet"],
      title: "Assexual",
      content: ""
    } /* Assexuado */,
    {
      id: "agenero",
      colors: ["_preto", "_x11-gray", "_branco", "_crayola-yellow-green"],
      title: "Agênero",
      content: ""
    } /* Agenero */,
    {
      id: "aliado",
      colors: [
        "_preto",
        "_branco",
        "_vivid-red",
        "p_hilippine-violet",
        "_deep-saffron",
        "_maximum-yellow",
        "_green",
        "_blue"
      ],
      title: "Aliado",
      content: ""
    } /* Aliado */,
    {
      id: "curioso",
      colors: [
        "_branco",
        "_light-pink",
        "_pink",
        "_dark-pink",
        "_dodger-blue",
        "_light-blue"
      ],
      title: "Curioso",
      content: ""
    } /* Curioso */,
    {
      id: "pansexual",
      colors: ["_philippine-pink", "_sizzling-sunrise", "_spiro-disco-ball"],
      title: "Pansexual",
      content: ""
    } /* Pansexual */,
    {
      id: "polisexual",
      colors: ["_shocking-pink", "_malachite", "_dodger-blue"],
      title: "Polisexual",
      content: ""
    } /* Polisexul */,
    {
      id: "familiares",
      colors: ["_thistle", "_lime-green", "_very-soft-cyan"],
      title: "Familiar",
      content: ""
    } /* Familiares */,
    {
      id: "twospirit",
      colors: [
        "_vivid-red",
        "_philippine-violet",
        "_deep-saffron",
        "_maximum-yellow",
        "_green",
        "_blue"
      ],
      title: '"Two Spirit"',
      content: ""
    } /* Two Spirit */,
    {
      id: "kink",
      colors: [
        "_preto",
        "_branco",
        "_vivid-red",
        "_munsell-red",
        "_st-patricks-blue"
      ],
      title: "Kink",
      content: ""
    } /* Kink */
  ],
  colors: {
    "_preto": [5, "#000000"],
    "_x11-gray": [2, "#BABABA"],
    "_branco": [12, "#FFFFFF"],
    "_light-pink": [1, "#FDC6FD"],
    "_pink": [1, "#F787FA"],
    "_very-soft-magenta": [1, "#D887DC"],
    "_dark-pink": [1, "#F347F8"],
    "_floral-lavender": [1, "#B77FDD"],
    "_thistle": [1, "#DCB6DC"],
    "_soft-pink": [1, "#FFC6DE"],
    "_amaranth-pink": [2, "#F7A8B8"],
    "_shocking-pink": [1, "#F714BA"],
    "_philippine-pink": [1, "#FF1B8D"],
    "_vivid-red": [3, "#FF0018"],
    "_munsell-red": [1, "#E80035"],
    "_royal-red": [1, "#D00070"],
    "_philippine-violet": [6, "#86007D"],
    "_deep-saffron": [3, "#FFA52C"],
    "_maximum-yellow": [4, "#FFFF41"],
    "_sizzling-sunrise": [1, "#FFDA00"],
    "_lime-green": [2, "#99E9C2"],
    "_crayola-yellow-green": [1, "#BAF584"],
    "_malachite": [1, "#01D66A"],
    "_green": [4, "#008018"],
    "_dark-cyan": [1, "#018E71"],
    "_caribbean-green": [1, "#21CFAC"],
    "_st-patricks-blue": [2, "#252580"],
    "_dark-powder-blue": [1, "#0032A0"],
    "_purple-heart": [1, "#4F47CD"],
    "_blue": [3, "#0000F9"],
    "_dodger-blue": [3, "#1594F6"],
    "_spiro-disco-ball": [1, "#1BB3FF"],
    "_maya-blue": [2, "#55CDFC"],
    "_light-blue": [1, "#C6E0FD"],
    "_very-soft-cyan": [1, "#99D9EA"]
  },
  selected: ""
};

const infografico = {
  selecionado: null
};

const w = 1100;
const h = 800;
const circleWidth = 5;
const nodes = [];

/* Preenche dados de cores */
Object.keys(allflags.colors).forEach((key) => {
  nodes.push({
    name: allflags.colors[key][1],
    target: [],
    value: allflags.colors[key][0],
    cname: key
  });
});

/* Cria menu */
const menu = document.querySelector("nav ul");
allflags.flags.forEach((flag) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = `#${flag.id}`;
  a.innerText = `${flag.title}`;
  a.setAttribute("data-colors", flag.colors.toString());
  a.setAttribute("data-id", flag.id);
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach((item) => {
      if (item.dataset.id === e.target.dataset.id) {
        item.classList.add("h");
      } else {
        item.classList.remove("h");
      }
    });
    document.querySelectorAll("circle").forEach((c) => {
      c.classList.add("ho");
      c.classList.remove("h");
    });
    document.querySelectorAll("circle").forEach((c) => {
      let _r = `(${e.target.dataset.colors
        .replaceAll(/[,]/g, "|")
        .replaceAll(/[-]/g, "-")})`;
      console.log(_r);
      let r = new RegExp(_r, "i");
      if (r.test(c.dataset.cname)) {
        c.classList.remove("ho");
        c.classList.add("h");
      }
    });
    openArticle(e.target.dataset.id);
  });
  li.appendChild(a);
  menu.appendChild(li);
});

let links = [];
const colors = d3.scale.category20();

for (let i = 0; i < nodes.length; i++) {
  if (nodes[i].target !== undefined) {
    for (var x = 0; x < nodes[i].target.length; x++)
      links.push({
        source: nodes[i],
        target: nodes[nodes[i].target[x]]
      });
  }
}

let myChart = d3
  .select("#section-infografico")
  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1000 800")
  .classed("svg-content-responsive", true);

var force = d3.layout
  .force()
  .nodes(nodes)
  .links([])
  .gravity(0.3)
  .charge(-1000)
  .size([w, h]);

var link = myChart
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "rgba(255, 255, 255, 0.3)")
  .attr("stroke-width", "1");

var node = myChart
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("g")
  .call(force.drag);

node
  .append("circle")
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("class", function (d) {
    return "c-" + d.name.replace("#", "");
  })
  .attr("r", function (d, i) {
    if (i > 0) {
      return circleWidth + d.value * 5 + 10;
    } else {
      return circleWidth + 35;
    }
  })
  .attr("fill", function (d, i) {
    return d.name;
  })
  .attr("stroke-width", function (d, i) {
    return 3;
  })
  .attr("stroke", function (d, i) {
    return "white";
  })
  .attr("data-cname", function (d, i) {
    return d.cname;
  })
  .on("click", (d, i) => {
    let selected = document.querySelector(`circle[data-cname="${d.cname}"]`);
    if (selected.classList.contains('h')) {
      document.querySelectorAll("nav a").forEach((e) => {
        e.classList.remove("h");
      });
      document.querySelectorAll("circle").forEach((c) => {
        c.classList.remove("h");
        c.classList.remove("ho");  
      });
      return;
    }
    document.querySelectorAll("nav a").forEach((e) => {
      if (e.dataset.colors.search(d.cname) > -1) {
        e.classList.add("h");
      } else {
        e.classList.remove("h");
      }
    });
    document.querySelectorAll("circle").forEach((c) => {
      c.classList.remove("h");
      c.classList.add("ho");
      if (c.dataset.cname == d.cname) {
        c.classList.add("h");
      }
    });
    // document.querySelector('body').style.backgroundColor = d.name;
    // if (infografico.selecionado !== null) {
    //   document.querySelector('.c-' + infografico.selecionado).classList.remove('selected');
    //   infografico.selecionado = d.name.replace('#', '');
    //   document.querySelector('.c-' + infografico.selecionado).classList.add('selected');
    // } else {
    //   infografico.selecionado = d.name.replace('#', '');
    //   document.querySelector('.c-' + infografico.selecionado).classList.add('selected');
    // }
  });

force.on("tick", function (e) {
  node.attr("transform", function (d, i) {
    return "translate(" + d.x + "," + d.y + ")";
  });
  link
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });
});

// node.append('text')
//   .text(function(d){ return d.value; })
//   .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
//   .attr('fill', function(d, i){
//     return 'white';
// })
//   .attr('text-anchor', function(d, i) {
//   return 'middle';
// })
//   .attr('font-size', function(d, i){
//   return '.9em';
// });

force.start();