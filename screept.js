    container = document.getElementById("particles-js");

    var text = new Blotter.Text("CODEGRID", {
        family: "serif",
        size: 150,
        fill: "#fff",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        paddingBottom: 80
    });

    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.01;
    material.uniforms.uPointRadius.value = 0.3;
    material.uniforms.uSpeed.value = 3;

    var blotter = new Blotter(material, {
        texts: text
    });

    var scope = blotter.forText(text);
    scope.appendTo(container);