var namespace = "http://www.w3.org/2000/svg"

function createFirstScene() {                    
 makeImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/695916/spce.jpg",0,0,200,200)
 makeImage("http://vignette1.wikia.nocookie.net/animal-jam-clans-1/images/d/d2/IMAGENAMEHERE.png/revision/latest?cb=20160624230052",1,50,50,50)
 makeImage("https://68.media.tumblr.com/ef9c843c64a85df48f363986a0e1457e/tumblr_mk3i3enxVN1ra707mo1_500.png",150,59,50,49)
makeImage("http://vignette3.wikia.nocookie.net/youtubepoop/images/a/a2/Mr-Krabs.gif/revision/latest?cb=20130105174003",20,-2,50,50)
makeImage("http://vignette3.wikia.nocookie.net/p__/images/4/47/Plankton.png/revision/latest?cb=20160826213027&path-prefix=protagonist",75,70,50,30)
makeImage("",50,50,50,50)
makeImage("",50,50,50,50)
makeImage("",50,50,50,50)

}


function createSecondScene() {
makeImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/695916/spce.jpg",0,0,200,200)
makeImage("http://i1.kym-cdn.com/photos/images/original/000/520/657/4aa.gif",1,50,50,50)
makeImage("http://www.clker.com/cliparts/2/6/d/8/1194986432495548228pimp_hat_james_birkett_01.svg.hi.png",-5,40,53,20)
makeImage("https://lh3.googleusercontent.com/-C4bi7bGK-dD-gh6JIZGg1hWzdkcJgZmCQ7YTSVFtEe0oo7lFA",150,56,50,50)
makeImage("https://t6.rbxcdn.com/ed5a9f705605931bd6fb73b0532927b9",150,44,50,40)

makeImage("http://vignette3.wikia.nocookie.net/spongebob/images/0/0e/Sir_Pinch-a-Lot.png/revision/latest?cb=20160911024759",20,-5,50,50)

makeImage("http://vignette3.wikia.nocookie.net/spongebob/images/1/11/Plank-Ton.png/revision/latest?cb=20150403001946",70,22,80,80)

makeImage("https://t2.rbxcdn.com/ba38f1c787c7bd727169ced42a8da539",90,27,30,25)

makeImage("https://westernoutfittersaz.com/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/g/u/gucci_370543_115-0a6_2.png",78,43,50,20)

makeImage("http://www.timberland.co.za/4771-home_default/youth-timberland-icon-6-inch-premium-boot.jpg",107,67,40,40)

makeImage("https://artimg.footway.com/01/559/55996-01/front/705/705/55996-01.png",73,73,40,28)

makeImage("",50,50,50,50)

makeImage("",50,50,50,50)

}



function createRandomScene() {
    var Number1 = Math.random()
 if (Number1 < 0.33) {
   createFirstScene()
} else {
   createSecondScene()
}
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
} 