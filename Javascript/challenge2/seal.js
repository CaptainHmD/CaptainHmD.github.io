function createSeal(){

    var sealGif = document.createElement('img');
    sealGif.setAttribute('id','sealgif');
    sealGif.src="/Javascript/challenge2/seal.gif";
    document.getElementById('seals-gifs-container').appendChild(sealGif);

}
function reset(){
    var node = document.getElementById('seals-gifs-container');
    node.innerHTML = "";
}