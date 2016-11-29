function DongYuhYang(){

d3.csv("https://aa002868.github.io/pdata/DongYuhYang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#DongYuhYang')
        .words(data)
        .start();
});

}
