container1 = document.getElementById("main-cosmic");
container2 = document.getElementById("main-quarks");

var text1 = new Blotter.Text("COSMIC", {
    family: "monospace",
    size: 210,
    fill: "#fff",
    paddingLeft: 700,
    paddingRight: 30,
    paddingTop: 150,
    paddingBottom: 80
});
var text2 = new Blotter.Text("QUARKS", {
    family: "monospace",
    size: 210,
    fill: "#fff",
    paddingLeft: 700,
    paddingRight: 30,
    paddingTop: 300,
    paddingBottom: 80
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.3;
material.uniforms.uSpeed.value = 3;

var blotter1 = new Blotter(material, {
    texts: text1
});
var blotter2 = new Blotter(material, {
    texts: text2
});

var scope1 = blotter1.forText(text1);
scope1.appendTo(container1);
var scope2 = blotter2.forText(text2);
scope2.appendTo(container2);