function ChingShihTsou(){

d3.csv("https://aa002868.github.io/pdata/ChingShihTsou.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([500, 250])
        .selector('#ChingShihTsou')
        .words(data)
        .start();
});

}
