var index = 0;
function changeColors(){
    var colors = ["red","blue","orange","green","yellow","pink","purple","beige","cyan","gold","silver","brown"]
    document.getElementsByTagName("body")[0]
    .style.background = colors[index++];
    if(index > colors.length - 1)
    index=0;
}