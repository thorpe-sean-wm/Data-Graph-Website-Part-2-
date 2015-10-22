   google.load('visualization', '1', {packages: ['corechart', 'bar']});
    google.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = google.visualization.arrayToDataTable([
            ['Year', 'Deaths'],
            ['1998', 41501],
            ['2001', 42196],
            ['2004', 42836],
            ['2007', 41259],
            ['2010', 32999],
            ['2013', 32719]
        ]);

        var options = {
            title: 'Total Deaths in Car Crashes Every 3 Years ',
            chartArea: {width: '60%'},
            hAxis: {
                title: 'Total Deaths',
                minValue: 0
            },
            vAxis: {
                title: 'Year'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

    function alertButton() {
        alert("You loved me!");
    }

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    google.setOnLoadCallback(drawAnnotations);

    function drawAnnotations() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Deaths', 'Miles Driven (billions)'],
            ['1998', 41501, 2632],
            ['2001', 42196, 2797],
            ['2004', 42836, 2965],
            ['2007', 41259, 3031],
            ['2010', 32999, 2967],
            ['2013', 32719, 2946]
        ]);

        var options = {
            title: 'Population of Largest U.S. Cities',
            chartArea: {width: '50%'},
            annotations: {
                alwaysOutside: true,
                textStyle: {
                    fontSize: 12,
                    auraColor: 'none',
                    color: '#555'
                },
                boxStyle: {
                    stroke: '#ccc',
                    strokeWidth: 1,
                    gradient: {
                        color1: '#f3e5f5',
                        color2: '#f3e5f5',
                        x1: '0%', y1: '0%',
                        x2: '100%', y2: '100%'
                    }
                }
            },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
                title: 'City'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
    }

    document.getElementById("nav01").innerHTML =
        "<ul id='menu'>" +
        "<li><a href='index.html'>Main Page</a></li>" +
        "<li><a href='second_page.html'>Additional Page</a></li>" +
        "</ul>";

   $(document).ready(function() {
       $('#cryImg').click(function () {
           $('#cryImg').attr('src', 'http://wp.production.patheos.com/blogs/lovejoyfeminism/files/2013/04/tantrum.jpg');
       });
       $('#buttonOne').click(function() {
          var textOne = function(answerOne){
              $('#descOne').html(answerOne)
          };
          textOne(prompt("Enter Text"));
       });
       $('#carWreck').click(function() {
           $('#carWreck').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/5/50/Japanese_car_accident_blur.jpg')
       });
       $('#buttonTwo').click(function() {
           var textTwo = function(answerTwo){
               $('#descTwo').html(answerTwo)
           };
           textTwo(prompt("Enter Text"));
       });
       $('#burnMoney').click(function() {
           $('#burnMoney').attr('src', 'http://img.wonderhowto.com/img/45/23/63475276450128/0/burn-money-without-damaging.1280x600.jpg')
       });
       $('#buttonThree').click(function() {
           var textThree = function(answerThree){
               $('#descThree').html(answerThree)
           };
           textThree(prompt("Enter Text"));
       });
       $('#emergency').click(function() {
          $('#emergency').attr('src', 'http://www.cliparthut.com/clip-arts/590/call-911-clip-art-590034.jpg')
       });
       $('#buttonFour').click(function() {
           var textFour = function(answerFour){
               $('#descFour').html(answerFour)
           };
           textFour(prompt("Enter Text"));
       });
       $('#driverSchool').click(function(){
          $('#driverSchool').attr('src', 'data:image/jpeg;base64,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')
       });
       $('#buttonFive').click(function() {
           var textFive = function(answerFive){
               $('#descFive').html(answerFive)
           };
           textFive(prompt("Enter Text"));
       });
       $('#insuranceComp').click(function() {
          $('#insuranceComp').attr('src', 'http://nvjets.com/wp-content/uploads/2014/12/Insurance-risk1.jpg')
       });
       $('#buttonSix').click(function() {
           var textSix = function(answerSix){
               $('#descSix').html(answerSix)
           };
       textSix(prompt("Enter Text"));
       });
       $('#haloWhat').click(function() {
          $('#haloWhat').attr('src', 'http://www.natsentinel.com/wp-content/uploads/2015/06/wpid-my-excited-face.jpg')
       });
       $('#buttonSeven').click(function() {
           var textSeven = function(answerSeven){
               $('#descSeven').html(answerSeven)
           };
           textSeven(prompt("Enter Text"));
       });
       $('#wanaFight').click(function(){
           $('#wanaFight').attr('src', 'http://d2ws0xxnnorfdo.cloudfront.net/meme/535432')
       });
       $('#buttonEight').click(function() {
           var textEight = function(answerEight){
               $('#descEight').html(answerEight)
           };
           textEight(prompt("Enter Text"));
       });
       $('#whyHere').click(function() {
           $('#whyHere').attr('src', 'http://static.tumblr.com/44e684098f0ac7c33a6640c20556b923/jxahzkb/fZ5mod2rw/tumblr_static_dog-logo.jpg')
       });
       $('#buttonNine').click(function() {
           var textNine = function(answerNine){
               $('#descNine').html(answerNine)
           };
           textNine(prompt("Enter Text"));
       });
   });


