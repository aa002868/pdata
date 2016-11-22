function HungLungWang(){

d3.csv("https://aa002868.github.io/pdata/HungLungWang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#HungLungWang')
        .words(data)
        .start();
});

}
