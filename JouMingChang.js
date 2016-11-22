function JouMingChang(){

d3.csv("https://aa002868.github.io/pdata/JouMingChang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#wordcloud')
        .words(data)
        .start();
});

}
