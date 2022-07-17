const img = document.getElementById('img-button')
const heal =document.getElementById('audio');
// const hello = document.getElementById('hello-world')

heal.volume=0.08 // change the volume  0 is defualt //////////


img.addEventListener('click', ()=>{
   heal.innerHTML= heal.play()
})
document.addEventListener('keydown', (event)=>{
    
    if(event.key == 'h'){
        heal.pause();
        heal.currentTime = 0;
        heal.play()
    console.log(damage.currentTime ); 
    
   }
})

const damage =document.getElementById('damage');
damage.volume=0.04 // change the volume  0 is defualt //////////

// damage.loop=true; // loop 
//damage.muted=true;  // mute the sound
// damage.pause();   // pause the audio 

hello.addEventListener('click',()=>{
// console.log(damage.crossOrigin);

damage.play()
})

document.addEventListener('keydown',(event)=>{
    if(event.key=='p'){
    damage.pause();
    console.log("w");
    }
})


/* network

0 = NETWORK_EMPTY - audio has not yet been initialized
1 = NETWORK_IDLE - audio is active and has selected a resource, but is not using the network
2 = NETWORK_LOADING - browser is downloading data
3 = NETWORK_NO_SOURCE - no audio source found

*/
console.log('network = ',damage.networkState);

console.log(damage.buffered.end(0)); //  get the end time
console.log(damage.ended); // 	A Boolean, returns true if the playback has ended, otherwise it returns false
// damage.defaultPlaybackRate = 0.5; 
/*
 playback speed of the audio       
  Note: The value 0.0 is invalid and throws a NOT_SUPPORTED_ERR exception

    1.0 is normal speed
    0.5 is half speed (slower)
    2.0 is double speed (faster)
    -1.0 is backwards, normal speed
    -0.5 is backwards, half speed
  */

damage.load();  // The load() method is used to update the audio/video element after changing the source or other settings.
console.log(damage.currentTime );  // return A Number, representing the current playback time in seconds
// also u can change the timeplay 
// damage.currentTime=1.2     like this the value will in seconds
