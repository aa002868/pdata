function HungLungWang(){

d3.csv("https://aa002868.github.io/NTUB10466002/HungLungWang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#wordcloud')
        .words(data)
        .start();
});

}