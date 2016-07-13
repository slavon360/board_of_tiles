function newBoard(){
tilesFlipped=0;
var output='';
for (var i=0;i<memoryArr.length;i++){
output+='<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memoryArr[i]+'\')"></div>';
}
document.getElementById('memory_board').innerHTML=output;
}
function memoryFlipTile(tile,val){
    if (tile.innerHTML=='' && memoryVal.length<2) {
        tile.style.background='url'+'('+val+')'+' no-repeat'+' center center / contain';
        
        if (memoryVal.length==0) {
            memoryVal.push(val);
            memoryTileId.push(tile.id);            
        } else if (memoryVal.length==1) {
            memoryVal.push(val);
            memoryTileId.push(tile.id);
            var tile2=document.getElementById(memoryTileId[0]);
         if (memoryVal[0]==memoryVal[1] && tile.id!=tile2.id) {
            tile.style.visibility='hidden';
            tile2.style.visibility='hidden'; 
            tilesFlipped +=2;
            memoryVal=[];
            memoryTileId=[];
            if (tilesFlipped==memoryArr.length) {
              setTimeout(finish,1500);
            }
          } else{
            setTimeout(flipBack, 1500);
        }
    }
}
function flipBack() {
                var tile_1=document.getElementById(memoryTileId[0]);
                var tile_2=document.getElementById(memoryTileId[1]);
                
                tile_1.className='error';
                tile_1.style.background='#555';
                tile_2.className='error';
                tile_2.style.background='#555';
                memoryVal=[];
                memoryTileId=[];
                setTimeout(remove,200, tile_1, tile_2);
            }
function remove(arg1,arg2){
    arg1.className='cancel';
    arg2.className='cancel';
}
function finish(){
    alert('Good job!!!');
}
}
newBoard();