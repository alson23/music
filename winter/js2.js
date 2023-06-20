const music=document.querySelector("audio")
const play=document.getElementById("con2")
const title=document.getElementById("title")
const artist=document.getElementById("artist")
const prev=document.getElementById("con1")
const next=document.getElementById("con3")

const p=document.getElementById("p")
const q=document.getElementById("q")
const r=document.getElementById("r")
const s=document.getElementById("s")
const t=document.getElementById("t")
const u=document.getElementById("u")
const v=document.getElementById("v")
const w=document.getElementById("w")
const x=document.getElementById("x")
const y=document.getElementById("y")
const z=document.getElementById("z")
const aa=document.getElementById("aa")
const bb=document.getElementById("bb")
const cc=document.getElementById("cc")
const dd=document.getElementById("dd")
const ee=document.getElementById("ee")
const ff=document.getElementById("ff")
const gg=document.getElementById("gg")
const hh=document.getElementById("hh")
const ii=document.getElementById("ii")
const jj=document.getElementById("jj")
const kk=document.getElementById("kk")
const ll=document.getElementById("ll")
const mm=document.getElementById("mm")
const nn=document.getElementById("nn")
const oo=document.getElementById("oo")
const pp=document.getElementById("pp")
const qq=document.getElementById("qq")
const rr=document.getElementById("rr")
const ss=document.getElementById("ss")
const tt=document.getElementById("tt")

var preload=document.getElementById("load")

function Myfuc(){
    preload.style.display='none';
}

const audio=new Audio();
audio.src="bce.mp3";

var gif=document.getElementById("gif")


let isPlaying=false;

const playMusic= () => {
    isPlaying= true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    gif.classList.add("gif");
    music.style.display='block';
}

const pauseMusic= () => {
    isPlaying= false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    gif.classList.remove("gif");
}
play.addEventListener("click" ,() => {
    if (isPlaying){
        pauseMusic();
        
    }
    else{
        playMusic();}
});



const songs= [
{
    name:"b0",
    title:"0) -Aada Raat Ma-",
    artist:"Hostel"
},
{
    name:"b1",
    title:"1) -Aakha Ko Batoa-",
    artist:"B-Height"
},
{
    name:"b2",
    title:"2) -Ajambari Laula-",
    artist:"Kali Prasad"
},    {
    name:"b3",
    title:"3) -Sasto Mutu-",
    artist:"Sajjan Raj Vaidya"
},{
    name:"b4",
    title:"4) -Suna Batuli-",
    artist:"Kali Prasad"
},
{
    name:"b5",
    title:"5) -Risaune Bhaye-",
    artist:"Sushant KC"
},    {
    name:"b6",
    title:"6) -Maya Maya-",
    artist:"Cartoon Crew"
},
    {
    name:"b7",
    title:"7) -Ko Hola Tyo-",
    artist:"ft.Paul & Prakriti"
},
    {
    name:"b8",
    title:"8) -SuperRaga-",
    artist:"Laure"
},
    {
    name:"b9",
    title:"9) -Naya Nepal Aayo-",
    artist:"Mr. D"
},    {
    name:"b10",
    title:"10) -Parkhahema-",
    artist:"Raju Lama"
    },{
    name:"b11",
    title:"11) -Muse ko Choro-",
    artist:"ST Man"
},
    {
    name:"b12",
    title:"12) -Baba Superman-",
    artist:"Suprim Thakuri"
},    
    {
    name:"b13",
    title:"13) -Mero Tasbir-",
    artist:"ft. Yama Buddha"
},
    {
    name:"b14",
    title:"14) -Sathi-",
    artist:"Yama Buddha"
    },
    {
    name:"b15",
    title:"15) -YETI YETI PANI-",
    artist:"Almoda Rana Uprety"
    },
    {
    name:"b16",
    title:"16) -YATRA-",
    artist:"V-TEN"
    },
    {
    name:"b17",
    title:"17) Dhairya",
    artist:"Sajjan Raj Vaidya"
    },
    {
    name:"b18",
    title:"18) Aashish",
    artist:"Bipul Chettri"
    },
    {
    name:"b19",
    title:"19) Nachahe ko Hoina",
    artist:"The Edge Band"
    },
    {
    name:"b20",
    title:"20) Timi Sangai",
    artist:"Apurva Tamang"
    },
    {
    name:"b21",
    title:"21) Jau ki Basu",
    artist:"Sabin Rai"
    },
    {
    name:"b22",
    title:"22) Naganya Maya",
    artist:"Sajjan Raj Vaidya"
    },
    {
    name:"b23",
    title:"23) Mayalu Mayalu",
    artist:"Vek X Yabesh Thapa"
    },
    {
    name:"b24",
    title:"24) MAYA",
    artist:"Ashutosh KC"
    },
    {
    name:"b25",
    title:"25) Kasari Bhanu",
    artist:"Swoopna Suman"
    },
    {
    name:"b26",
    title:"26) Timi Nai Hau ",
    artist:"Sabin Rai"
    },
    {
    name:"b27",
    title:"27) Birsiney Hau Ki ",
    artist:"The Elements"
    },
    {
    name:"b28",
    title:"28) APARIBHASIT",
    artist:"SWAR"
    },
    {
    name:"b29",
    title:"29) Mellow",
    artist:"Rohit Shakya X Sajjan Raj Vaidya"
    },
    {
    name:"b30",
    title:"30) Je Chhau Timi",
    artist:"Swoopna Suman x Samir Shrestha"
    },
    
    
]

const loadSong= (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="audio/nep/"+songs.name+".mp3";
};
songIndex = 0;


const nextSong = () => {
    
    songIndex=(songIndex+1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    
    songIndex=(songIndex-1 + songs.length) % songs.length ;
    loadSong(songs[songIndex]);
    playMusic();
};
    const pSong = () => {
        loadSong(songs[0]);
        playMusic();
    };
    const qSong = () => {
        loadSong(songs[1]);
        playMusic();
    };
    const rSong = () => {
        loadSong(songs[2]);
        playMusic();
    };
    const sSong = () => {
        loadSong(songs[3]);
        playMusic();
    };
    const tSong = () => {
        loadSong(songs[4]);
        playMusic();
    };
    const uSong = () => {
        loadSong(songs[5]);
        playMusic();
    };
    const vSong = () => {
        loadSong(songs[6]);
        playMusic();
    };
    const wSong = () => {
        loadSong(songs[7]);
        playMusic();
    };
    const xSong = () => {
        loadSong(songs[8]);
        playMusic();
    };
    const ySong = () => {
        loadSong(songs[9]);
        playMusic();
    };
    const zSong = () => {
        loadSong(songs[10]);
        playMusic();
    };
    const aaSong = () => {
        loadSong(songs[11]);
        playMusic();
    };
    const bbSong = () => {
        loadSong(songs[12]);
        playMusic();
    };
    const ccSong = () => {
        loadSong(songs[13]);
        playMusic();
        

    };
    const ddSong = () => {
        loadSong(songs[14]);
        playMusic();
        
    };
    const eeSong = () => {
        loadSong(songs[15]);
        playMusic();
        
    };
    const ffSong = () => {
        loadSong(songs[16]);
        playMusic();
        
    };
    const ggSong = () => {
        loadSong(songs[17]);
        playMusic();
        
    };
    const hhSong = () => {
        loadSong(songs[18]);
        playMusic();
        
    };
    const iiSong = () => {
        loadSong(songs[19]);
        playMusic();
        
    };
    const jjSong = () => {
        loadSong(songs[20]);
        playMusic();
        
    };
    const kkSong = () => {
        loadSong(songs[21]);
        playMusic();
        
    };
    const llSong = () => {
        loadSong(songs[22]);
        playMusic();
        
    };
    const mmSong = () => {
        loadSong(songs[23]);
        playMusic();
        
    };
    const nnSong = () => {
        loadSong(songs[24]);
        playMusic();
        
    };
    const ooSong = () => {
        loadSong(songs[25]);
        playMusic();
        
    };
    const ppSong = () => {
        loadSong(songs[26]);
        playMusic();
        
    };
    const qqSong = () => {
        loadSong(songs[27]);
        playMusic();
        
    };
    const rrSong = () => {
        loadSong(songs[28]);
        playMusic();
        
    };
    const ssSong = () => {
        loadSong(songs[29]);
        playMusic();
        
    };
    const ttSong = () => {
        loadSong(songs[30]);
        playMusic();
        
    };
   
    
music.addEventListener("ended", nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

p.addEventListener('click', pSong);
q.addEventListener('click', qSong);
r.addEventListener('click', rSong);
s.addEventListener('click', sSong);
t.addEventListener('click', tSong);
u.addEventListener('click', uSong);
v.addEventListener('click', vSong);
w.addEventListener('click', wSong);
x.addEventListener('click', xSong);
y.addEventListener('click', ySong);
z.addEventListener('click', zSong);
aa.addEventListener('click', aaSong);
bb.addEventListener('click', bbSong);
cc.addEventListener('click', ccSong);
dd.addEventListener('click', ddSong);
ee.addEventListener('click', eeSong);
ff.addEventListener('click', ffSong);
gg.addEventListener('click', ggSong);
hh.addEventListener('click', hhSong);
ii.addEventListener('click', iiSong);
jj.addEventListener('click', jjSong);
kk.addEventListener('click', kkSong);
ll.addEventListener('click', llSong);
mm.addEventListener('click', mmSong);
nn.addEventListener('click', nnSong);
oo.addEventListener('click', ooSong);
pp.addEventListener('click', ppSong);
qq.addEventListener('click', qqSong);
rr.addEventListener('click', rrSong);
ss.addEventListener('click', ssSong);
tt.addEventListener('click', ttSong);











