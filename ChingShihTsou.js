function ChingShihTsou(){

d3.csv("https://aa002868.github.io/pdata/ChingShihTsou.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([600, 300])
        .selector('#ChingShihTsou')
        .words(data)
        .start();
});

}
