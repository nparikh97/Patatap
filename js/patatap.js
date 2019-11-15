var circle = [];
            function onKeyDown(event){
                if(keyData[event.key]){
                    var point = new Point(view.size.width,view.size.height);
                    var randomPoint = point*Point.random();
                    var createcircle = new Path.Circle(new Point(randomPoint),300);
                    createcircle.fillColor = keyData[event.key].color;
                    keyData[event.key].sound.play();
                    circle.push(createcircle);
                }
            }
        function onFrame(event) {
            // Each frame, change the fill color of the path slightly by
            // adding 1 to its hue:
            for(var i = 0; i < circle.length;i++){
                circle [i].fillColor.hue += 1;
                circle[i].scale(0.9);
            }
        }