// ==UserScript==
// @name         Main x
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Glasphid
// @match        http://zombs.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zombs.io
// @grant        none
// ==/UserScript==

let css2 = `
.btn:hover {
cursor: pointer;
}
.btn-blue {
background-color: #144b7a;
}
.btn-blue:hover .btn-blue:active {
background-color: #4fa7ee;
}
.box {
display: block;
width: 100%;
height: 50px;
line-height: 34px;
padding: 8px 14px;
margin: 0 0 10px;
background: #eee;
border: 0;
font-size: 14px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
border-radius: 4px;
}
.codeIn, .joinOut {
height: 50px;
}
.hud-menu-zipp3 {
display: none;
position: fixed;
top: 48%;
left: 50%;
width: 600px;
height: 470px;
margin: -270px 0 0 -300px;
padding: 20px;
background: rgba(0, 0, 0, 0.6);
color: #eee;
border-radius: 4px;
z-index: 15;
}
.hud-menu-zipp3 h3 {
display: block;
margin: 0;
line-height: 20px;
}
.hud-menu-zipp3 .hud-zipp-grid3 {
display: block;
height: 380px;
padding: 10px;
margin-top: 18px;
background: rgba(0, 0, 0, 0.2);
}
.hud-spell-icons .hud-spell-icon[data-type="Zippity3"]::before {
background-image: url("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/220/right-pointing-magnifying-glass_1f50e.png");
}
.hud-menu-zipp3 .hud-the-tab {
position: relative;
height: 40px;
line-height: 40px;
margin: 20px;
border: 0px solid rgb(0, 0, 0, 0);
}
.hud-menu-zipp3 .hud-the-tab {
display: block;
float: left;
padding: 0 14px;
margin: 0 1px 0 0;
font-size: 14px;
background: rgba(0, 0, 0, 0.4);
color: rgba(255, 255, 255, 0.4);
transition: all 0.15s ease-in-out;
}
.hud-menu-zipp3 .hud-the-tab:hover {
background: rgba(0, 0, 0, 0.2);
color: #eee;
cursor: pointer;
}
`;

let styles = document.createElement("style");
styles.appendChild(document.createTextNode(css2));
document.head.appendChild(styles);
styles.type = "text/css";

// class changing
document.getElementsByClassName("hud-intro-form")[0].style.height = "300px";
document.getElementsByClassName("hud-intro-play")[0].setAttribute("class", "btn btn-red hud-intro-play");

// spell icon
let spell = document.createElement("div");
spell.classList.add("hud-spell-icon");
spell.setAttribute("data-type", "Zippity3");
spell.classList.add("hud-zipp3-icon");
document.getElementsByClassName("hud-spell-icons")[0].appendChild(spell);

//Menu for spell icon
let modHTML = `
<div class="hud-menu-zipp3">
<br />
<div style="text-align:center">
<button class="SE" style="width: 20%">Main (1)</button>
<button class="AB" style="width: 20%">Auto Build</button>
<button class="BS" style="width: 20%">Base Saver</button>
<button class="SI" style="width: 20%">Main (2)</button>
<div class="hud-zipp-grid3">
</div>
</div>
`;
document.body.insertAdjacentHTML("afterbegin", modHTML);
let zipz123 = document.getElementsByClassName("hud-menu-zipp3")[0];

//Onclick
document.getElementsByClassName("hud-zipp3-icon")[0].addEventListener("click", function() {
    if(zipz123.style.display == "none" || zipz123.style.display == "") {
        zipz123.style.display = "block";
    } else {
        zipz123.style.display = "none";
    };
});

let _menu = document.getElementsByClassName("hud-menu-icon");
let _spell = document.getElementsByClassName("hud-spell-icon");
let allIcon = [
    _menu[0],
    _menu[1],
    _menu[2],
    _spell[0],
    _spell[1]
];

allIcon.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(zipz123.style.display == "block") {
            zipz123.style.display = "none";
        };
    });
});

document.getElementsByClassName("SE")[0].addEventListener("click", function() {
    displayAllToNone();
    document.getElementsByClassName("SE")[0].innerText = "- - -";
    document.getElementsByClassName("etc.Class")[0].innerText = "Main";
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i")[0]) {
            document.getElementsByClassName(i + "i")[0].style.display = "";
        }
    }
})

document.getElementsByClassName("AB")[0].addEventListener("click", function() {
    displayAllToNone();
    document.getElementsByClassName("AB")[0].innerText = "- - -";
    document.getElementsByClassName("etc.Class")[0].innerText = "Main 3";
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i2")[0]) {
            document.getElementsByClassName(i + "i2")[0].style.display = "";
        }
    }
})

document.getElementsByClassName("BS")[0].addEventListener("click", function() {
    displayAllToNone();
    document.getElementsByClassName("BS")[0].innerText = "- - -";
    document.getElementsByClassName("etc.Class")[0].innerText = "Base Saver (1.69)";
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i3")[0]) {
            document.getElementsByClassName(i + "i3")[0].style.display = "";
        }
    }
})

document.getElementsByClassName("SI")[0].addEventListener("click", function() {
    displayAllToNone();
    document.getElementsByClassName("SI")[0].innerText = "- - -";
    document.getElementsByClassName("etc.Class")[0].innerText = "Main 2";
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i5")[0]) {
            document.getElementsByClassName(i + "i5")[0].style.display = "";
        }
    }
})
// key to open and close
function modm() {
    if(zipz123.style.display == "none" || zipz123.style.display == "") {
        zipz123.style.display = "block";
    } else {
        zipz123.style.display = "none";
    };
};
function displayAllToNone() {
    document.getElementsByClassName("SE")[0].innerText = "Main (1)";
    document.getElementsByClassName("AB")[0].innerText = "Main (3)";
    document.getElementsByClassName("BS")[0].innerText = "Base Saver";
    document.getElementsByClassName("SI")[0].innerText = "Main (2)";
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i")[0]) {
            document.getElementsByClassName(i + "i")[0].style.display = "none";
        }
    }
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i2")[0]) {
            document.getElementsByClassName(i + "i2")[0].style.display = "none";
        }
    }
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i3")[0]) {
            document.getElementsByClassName(i + "i3")[0].style.display = "none";
        }
    }
    for (let i = 0; i < 50; i++) {
        if (document.getElementsByClassName(i + "i5")[0]) {
            document.getElementsByClassName(i + "i5")[0].style.display = "none";
        }
    }
}

document.getElementsByClassName("hud-zipp-grid3")[0].innerHTML = `
<div style="text-align:center"><br>
<hr />
<h3 class="etc.Class">Normal Scripts!</h3>
<hr />
<button class="btn btn-green 0i" style="width: 45%;">Sell Stash!</button>

<button class="btn btn-green 1i" style="width: 45%;">Sell All!</button>

<button class="btn btn-green 2i" style="width: 45%;">Sell Walls!</button>

<button class="btn btn-green 3i" style="width: 45%;">Sell Doors!</button>

<button class="btn btn-green 4i" style="width: 45%;">Sell Traps!</button>

<button class="btn btn-green 5i" style="width: 45%;">Sell Arrows!</button>

<button class="btn btn-green 6i" style="width: 45%;">Sell Mages!</button>

<button class="btn btn-green 7i" style="width: 45%;">Sell Pets!</button>

<button class="btn btn-blue 8i" style="width: 45%;">Active Upgrade All!</button>

<button class="btn btn-blue 9i" style="width: 45%;">Active AHRC!</button>

<button class="btn btn-blue 10i" style="width: 45%;">Enable Autobow</button>

<button class="btn btn-blue 13i" style="width: 45%;">Enable Auto Accepter</button>

<button class="btn btn-blue 14i" style="width: 45%;">Enable Auto Kicker</button>

<br class="15i"><br class="16i">

<button class="btn btn-green 0i5" style="width: 45%;">Can Members Sell!</button>

<button class="btn btn-green 1i5" style="width: 45%;"">Kick All Members!</button>

<button class="btn btn-blue 3i5" style="width: 45%;">Enable hi Script!</button>

<button class="btn btn-blue 5i5" style="width: 45%;">Enable Send Info!</button>

<button class="btn btn-red 8i5" style="width: 45%;">!(Auto heal and Pet Heal)</button>

<button class="btn btn-red 9i5" style="width: 45%;">!(Revive and Evolve Pets)</button>

<button class="btn btn-blue 6i5" style="width: 45%;">Enable Speed Run</button>

<button class="btn btn-blue 10i5" style="width: 45%;">Clear Messages!</button>

<button class="btn btn-white 12i5" style="width: 45%;">Auto Respawn!</button>

<button class="btn btn-white 13i5" style="width: 45%;">Enable M Key!</button>

<br class="14i5"><br class="15i5">

<button class="0i2">Send Alt!</button>

<button class="1i2">Enable Aim!</button>

<button class="2i2">Enable Player Follower!</button>

<button class="10i2 emm">Enable MouseMove!</button>

<br class="23i2"><br class="24i2">

<button class="3i2">Delete Alt!</button>

<input type="number" class="4i2" placeholder="Alt Id">

<button class="7i2">Delete All Alts!</button>

<br class="5i2"><br class="6i2">

<button class="8i2">Show Resources!</button>

<button class="21i2">Control Alts!</button>

<button class="22i2">Unontrol Alts!</button>

<br class="9i2"><br class="10i2">

<button class="11i2">Start Aito!</button>

<button class="12i2">Active 4 Player Trick</button>

<button class="13i2">Enable L Key!</button>

<br class="14i2"><br class="15i2">

<input type="text" value="1" class="16i2" placeholder="Player Rank" style="width: 25%;">

<button class="18i2">Active Player Finder</button>

<button class="25i2">Follow Position</button> &nbsp;

<br class="19i2"><br class="20i2">

<button class="0i3" onclick="RecordBase();">Record Base!</button>
<button class="1i3" onclick="buildRecordedBase();">Build Recorded Base!</button>
<button class="2i3" onclick="DeleteRecordedbase();">Delete Recorded Base!</button>
<br class="3i3"><br class="4i3">
<button class="5i3" onclick="RecordBase2();">Record Base (2)!</button>
<button class="6i3" onclick="buildRecordedBase2();">Build Recorded Base (2)!</button>
<button class="7i3" onclick="DeleteRecordedbase2();">Delete Recorded Base (2)!</button>
<br class="8i3"><br class="9i3">
<button class="10i3" onclick="RecordBase3();">Record Base (3)!</button>
<button class="11i3" onclick="buildRecordedBase3();">Build Recorded Base (3)!</button>
<button class="12i3" onclick="DeleteRecordedbase3();">Delete Recorded Base (3)!</button>
<br class="13i3"><br class="14i3">
<button class="15i3" onclick="saveBase();">Save Towers!</button>
<button class="16i3" onclick="buildSavedBase();">Build Saved Towers!</button>
<br class="17i3"><br class="18i3">
<button class="21i3" onclick="autobuildtoggle();">Enable Auto Build Saved Towers!</button>
<button class="26i3" onclick="upgradealltoggle();">Enable Upgrade All!</button>
<br class="28i3"><br class="29i3">
<input type="text" class="30i3" placeholder='Click "Save Towers!" and build your favorite base to get their codes.' style="width: 100%" disabled="true">
<br class="31i3"><br class="32i3">

`;

let Main1Keys = true;
let Main2Keys = true;
let Main3Keys = true;

displayAllToNone();
let altname = 1;
let upgradeAll = false;
let AHRC = false;
let autobow = false;
let accept = false;
let kick = false;
let run = false;
let heal = true;
let revive = true;
let clearMsgs = false;
let kick1p = false;
let autobuild = false;
let upgradeAll2 = false;
let petTimeout = false;
let myPlayer;
let myPet;
let shouldHealPet;
let autohi;
let autorss;
let uid;
let entities = {};
let players = {};
let buildings = {};
let msg;
var Bowtier = 0;
let packets = {
    0: "PACKET_ENTITY_UPDATE",
    1: "PACKET_PLAYER_COUNTER_UPDATE",
    2: "PACKET_SET_WORLD_DIMENSIONS",
    3: "PACKET_INPUT",
    4: "PACKET_ENTER_WORLD",
    7: "PACKET_PING",
    9: "PACKET_RPC",
    PACKET_ENTER_WORLD: 4,
    PACKET_ENTITY_UPDATE: 0,
    PACKET_INPUT: 3,
    PACKET_PING: 7,
    PACKET_PLAYER_COUNTER_UPDATE: 1,
    PACKET_RPC: 9,
    PACKET_SET_WORLD_DIMENSIONS: 2
}

!window.Log && (Log = eval);
eval = (e) => {
    let log = Log(e);
    //console.log([e, log]);
    if (e == 'typeof window === "undefined" ? 1 : 0;') {
        return 0;
    }
    if (e == "typeof process !== 'undefined' ? 1 : 0;") {
        return 0;
    }
    if (e == 'Game.currentGame.network.connected ? 1 : 0') {
        return 1;
    }
    if (e == 'Game.currentGame.world.myUid === null ? 0 : Game.currentGame.world.myUid;') {
        return 0;
    }
    if (e == 'document.getElementById("hud").children.length;') {
        return 24;
    }
    console.log([e, log]);
    return log;
}

window[atob("X2hhc2FjY3RvbGtleQ==")] = !0;

game.network.addPacketHandler = function (event, callback) {
    console.log(packets[event], callback);
    game.network.emitter.on(packets[event], callback);
}

game.network.emitter.removeListener('PACKET_ENTITY_UPDATE', game.network.emitter._events.PACKET_ENTITY_UPDATE);

game.network.addPacketHandler(0, function(e) {
    game.network.sendRpc({"name": "BuyItem", "itemName": "HealthPotion", "tier": 1})
})
for (let i = 0; i < 10; i++) {
    game.network.addPacketHandler(i, function(e) {
        msg = e;
        interval();
    })
}
let interval = () => {
    if (msg.uid) {
        uid = msg.uid;
        players = {};
        entities = {};
        buildings = {};
        window.message = 0;
    }
    if (msg.entities) {
        if (window.message == 0) {
            game.world.replicator.onEntityUpdate(msg);
        }
        if (msg.entities[uid].name) {
            myPlayer = msg.entities[uid];
        }
        for (let g in myPlayer) {
            if (myPlayer[g] !== msg.entities[uid][g] && msg.entities[uid][g] !== undefined) {
                myPlayer[g] = msg.entities[uid][g];
            }
        }
        if (myPlayer.petUid) {
            if (msg.entities[myPlayer.petUid]) {
                if (msg.entities[myPlayer.petUid].model) {
                    myPet = msg.entities[myPlayer.petUid];
                    shouldHealPet = false;
                }
            }
            for (let g in myPet) {
                if (msg.entities[myPlayer.petUid]) {
                    if (myPet[g] !== msg.entities[myPlayer.petUid][g] && msg.entities[myPlayer.petUid][g] !== undefined) {
                        myPet[g] = msg.entities[myPlayer.petUid][g]
                    }
                }
            }
        }
        for (let i in msg.entities) {
            if (msg.entities[i].name) {
                players[i] = msg.entities[i];
                if (autohi) {
                    game.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "hi " + msg.entities[i].name})
                }
                if (autorss) {
                    for (let i2 = 0; i2 < 8; i2++) {
                        for (let i = 0; i < 8; i++) {
                            game.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: i})
                        }
                    }

                    let t = 0;
                    let rainbowBowtoggle = true;
                    interval = setInterval(() => {
                        if (rainbowBowtoggle)
                            t = (t + 1) % 8;
                        game.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: t})
                    }, 50);
                }
            }
        }
        for (let i in players) {
            if (!msg.entities[i]) {
                delete players[i];
            }
            for (let g in players[i]) {
                if (players[i][g] !== msg.entities[i][g] && msg.entities[i][g] !== undefined) {
                    players[i][g] = msg.entities[i][g];
                }
            }
        }
    }
    if (game.world.inWorld) {
        let entities = Game.currentGame.world.entities;
        if (upgradeAll) {
            if (!window.upgradeAll1) {
                window.upgradeAll1 = true;
                setTimeout(() => { window.upgradeAll1 = false; }, 100);
                for(let uid in entities) {
                    if(entities[uid].fromTick.tier !== 8 || entities[uid].fromTick.tier !== GetGoldStash().uid) {
                        Game.currentGame.network.sendRpc({
                            name: "UpgradeBuilding",
                            uid: game.world.entities[uid].fromTick.uid
                        });
                    }
                }
            }
        }
        if (AHRC) {
            if (!window.AHRC1) {
                window.AHRC1 = true;
                setTimeout(() => { window.AHRC1 = false; }, 75);
                for(let uid in entities) {
                    if(!entities.hasOwnProperty(uid)) continue;
                    let obj = entities[uid];
                    Game.currentGame.network.sendRpc({
                        name: "CollectHarvester",
                        uid: obj.fromTick.uid
                    });
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 1) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.07
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 2) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.11
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 3) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.17
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 4) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.22
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 5) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.25
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 6) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.28
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 7) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.42
                        });
                    }
                    if(obj.fromTick.model == "Harvester" && obj.fromTick.tier == 8) {
                        Game.currentGame.network.sendRpc({
                            name: "AddDepositToHarvester",
                            uid: obj.fromTick.uid,
                            deposit: 0.65
                        });
                    }
                }
            }
        }
        if (autobow) {
            game.network.sendInput({space: 0})
            game.network.sendInput({space: 1})
        }
        if (accept) {
            for (let i2 = 0; i2 < document.getElementsByClassName("btn btn-green hud-confirmation-accept").length; i2++) {
                document.getElementsByClassName("btn btn-green hud-confirmation-accept")[i2].click();
            }
        }
        if (kick) {
            for (let i in Game.currentGame.ui.playerPartyMembers) {
                Game.currentGame.network.sendRpc({
                    name: "KickParty",
                    uid: Game.currentGame.ui.playerPartyMembers[i].playerUid
                })
            }
        }
        if (run) {
            for (let i = 0; i < document.getElementsByClassName("hud-shop-actions-equip").length; i++) {
                document.getElementsByClassName("hud-shop-actions-equip")[i].click();
            }
        }
        if (revive) {
            if (!window.reviver) {
                window.reviver = true;
                setTimeout(() => { window.reviver = false; }, 1000);
                let element1 = document.getElementsByClassName("hud-shop-actions-revive");
                for (let i=0;i<element1.length;i++) {
                    element1[i].click();
                }
                let element2 = document.getElementsByClassName("hud-shop-actions-evolve");
                for (let i=0;i<element2.length;i++) {
                    element2[i].click();
                }
            }
        }

        if (clearMsgs) {
            for (let i = 0; i < document.getElementsByClassName('hud-chat-message').length; i++) {
                document.getElementsByClassName('hud-chat-message')[i].remove();
            }
        }
        if (kick1p) {
            if (game.ui.playerTick.dead === 1) {
                document.getElementsByClassName("hud-respawn-btn")[0].click();
            }
            Bowtier = document.querySelector(".hud-shop-item")
                .nextElementSibling.childNodes[3].innerHTML.split(" ")[1] - 1;
            if (game.ui.playerWeaponName != "Bow") {
                game.network.sendRpc({
                    name: "EquipItem",
                    itemName: "Bow",
                    tier: document.querySelector(".hud-shop-item")
                    .nextElementSibling.childNodes[3].innerHTML.split(" ")[1] - 1
                });
            }
            if (Bowtier === 0 && game.ui.playerTick.gold >= 100) {
                document.querySelector(".hud-shop-item")
                    .nextElementSibling.click();

                game.network.sendRpc({
                    name: "EquipItem",
                    itemName: "Bow",
                    tier: 1
                })
            }
            if (Bowtier === 1 && game.ui.playerTick.gold >= 400) {
                Bowtier = 2;
                document.querySelector(".hud-shop-item")
                    .nextElementSibling.click();
                game.network.sendRpc({
                    name: "EquipItem",
                    itemName: "Bow",
                    tier: 2
                });
            }
        }
        if (autobuild) {
            if (!window.autobuildtimeout) {
                window.autobuildtimeout = true;
                setTimeout(() => { window.autobuildtimeout = false; }, 125)
                if (GetGoldStash !== undefined) {
                    window.buildSavedBase();
                }
            }
        }
        if (upgradeAll2) {
            if (!window.upgradeAll2) {
                window.upgradeAll2 = true;
                setTimeout(() => { window.upgradeAll2 = false; }, 50);
                for(let uid in entities) {
                    if(entities[uid].fromTick.tier !== 8 || entities[uid].fromTick.tier !== GetGoldStash().uid) {
                        Game.currentGame.network.sendRpc({
                            name: "UpgradeBuilding",
                            uid: game.world.entities[uid].fromTick.uid
                        });
                    }
                }
            }
        }
        if (heal) {
            if (myPlayer) {
                let playerHealth = (myPlayer.health/myPlayer.maxHealth) * 100;
                if (playerHealth <= 10) {
                    if (!window.playerTimeout_1) {
                        window.playerTimeout_1 = true;
                        setTimeout(() => {
                            window.playerTimeout_1 = false;
                        }, 300)
                        healPlayer();
                    }
                }
            }
        }
        if (heal) {
            if (myPet) {
                let petHealth = (myPet.health/myPet.maxHealth) * 100;
                if (petHealth <= 70) {
                    if (!petTimeout) {
                        petTimeout = true;
                        setTimeout(() => { petTimeout = false; }, 300);
                        game.network.sendRpc({"name": "BuyItem", "itemName": "PetHealthPotion", "tier": 1})
                        game.network.sendRpc({"name": "EquipItem", "itemName": "PetHealthPotion", "tier": 1})
                    }
                }
            }
        }
        if (window.findPlayer) {
            if (myPlayer.position.y-window.playerY > 100 || Math.sqrt(Math.pow((myPlayer.position.y-window.playerY), 2) + Math.pow((myPlayer.position.x-window.playerX), 2)) < 100) {
                game.network.sendInput({down: 0})
            } else {
                game.network.sendInput({down: 1})
            }
            if (-myPlayer.position.y+window.playerY > 100 || Math.sqrt(Math.pow((myPlayer.position.y-window.playerY), 2) + Math.pow((myPlayer.position.x-window.playerX), 2)) < 100) {
                game.network.sendInput({up: 0})
            } else {
                game.network.sendInput({up: 1})
            }
            if (-myPlayer.position.x+window.playerX > 100 || Math.sqrt(Math.pow((myPlayer.position.y-window.playerY), 2) + Math.pow((myPlayer.position.x-window.playerX), 2)) < 100) {
                game.network.sendInput({left: 0})
            } else {
                game.network.sendInput({left: 1})
            }
            if (myPlayer.position.x-window.playerX > 100 || Math.sqrt(Math.pow((myPlayer.position.y-window.playerY), 2) + Math.pow((myPlayer.position.x-window.playerX), 2)) < 100) {
                game.network.sendInput({right: 0})
            } else {
                game.network.sendInput({right: 1})
            }
        }
    }
}
document.getElementsByClassName("emm")[0].addEventListener('click', function() {
    window.mousemove = !window.mousemove;
    this.innerText = window.mousemove ? "Disable MouseMove!" : "Enable MouseMove!"
})


document.getElementsByClassName("0i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "GoldStash") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("1i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type !== "GoldStash") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("2i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "Wall") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("3i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "Door") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("4i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "SlowTrap") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("5i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "ArrowTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("6i")[0].addEventListener('click', function() {
    for(let uid in game.ui.buildings) {
        if(game.ui.buildings[uid].type == "MagicTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.ui.buildings[uid].uid
            });
        }
    }
})

document.getElementsByClassName("7i")[0].addEventListener('click', function() {
    for(let uid in game.world.entities) {
        if(game.world.entities[uid].fromTick.model == "PetCARL" || game.world.entities[uid].fromTick.model == "PetMiner") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: game.world.entities[uid].fromTick.uid
            });
        }
    }
})

document.getElementsByClassName("8i")[0].addEventListener('click', function() {
    upgradeAll = !upgradeAll;
    document.getElementsByClassName("8i")[0].className = "btn btn-blue 8i";
    document.getElementsByClassName("8i")[0].innerText = "Active Upgrade All!";
    if (upgradeAll) {
        document.getElementsByClassName("8i")[0].className = "btn btn-red 8i";
        document.getElementsByClassName("8i")[0].innerText = "Inactive Upgrade All!";
    }
})
document.getElementsByClassName("9i")[0].addEventListener('click', function() {
    AHRC = !AHRC;
    document.getElementsByClassName("9i")[0].className = "btn btn-blue 9i";
    document.getElementsByClassName("9i")[0].innerText = "Active AHRC!";
    if (AHRC) {
        document.getElementsByClassName("9i")[0].className = "btn btn-red 9i";
        document.getElementsByClassName("9i")[0].innerText = "Inactive AHRC!";
    }
})
document.getElementsByClassName("10i")[0].addEventListener('click', function() {
    autobow = !autobow;
    let playerWeapon = game.ui.playerTick.weaponName;
    document.getElementsByClassName("10i")[0].className = "btn btn-blue 10i";
    document.getElementsByClassName("10i")[0].innerText = "Enable Autobow";
    if (autobow) {
        document.getElementsByClassName("10i")[0].className = "btn btn-red 10i";
        document.getElementsByClassName("10i")[0].innerText = "Disable Autobow";
        if (game.ui.inventory.Bow) {
            game.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: game.ui.inventory.Bow.tier})
        } else {
            game.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: 1})
            game.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: 1})
        }
    } else {
        game.network.sendRpc({name: "EquipItem", itemName: playerWeapon, tier: game.ui.inventory[playerWeapon].tier})
    }
})

document.getElementsByClassName("11i2")[0].addEventListener('click', function() {
    window.startaito = !window.startaito;
    document.getElementsByClassName("11i2")[0].innerText = "Start Aito!";
    if (window.startaito) {
        window.sendAitoAlt();
        document.getElementsByClassName("11i2")[0].innerText = "Stop Aito!";
    }
})
document.getElementsByClassName("13i")[0].addEventListener('click', function() {
    accept = !accept;
    document.getElementsByClassName("13i")[0].className = "btn btn-blue 13i";
    document.getElementsByClassName("13i")[0].innerText = "Enable Auto Accepter";
    if (accept) {
        document.getElementsByClassName("13i")[0].className = "btn btn-red 13i";
        document.getElementsByClassName("13i")[0].innerText = "Disable Auto Accepter";
    }
})
document.getElementsByClassName("14i")[0].addEventListener('click', function() {
    kick = !kick;
    document.getElementsByClassName("14i")[0].className = "btn btn-blue 14i";
    document.getElementsByClassName("14i")[0].innerText = "Enable Auto Kicker";
    if (kick) {
        document.getElementsByClassName("14i")[0].className = "btn btn-red 14i";
        document.getElementsByClassName("14i")[0].innerText = "Disable Auto Kicker";
    }
})
document.getElementsByClassName("0i5")[0].addEventListener('click', function() {
    for (let i in game.ui.playerPartyMembers) {
        game.network.sendRpc({name: "SetPartyMemberCanSell", uid: game.ui.playerPartyMembers[i].playerUid, canSell: 1})
    }
})
document.getElementsByClassName("1i5")[0].addEventListener('click', function() {
    for (let i in game.ui.playerPartyMembers) {
        game.network.sendRpc({name: "KickParty", uid: game.ui.playerPartyMembers[i].playerUid})
    }
})
document.getElementsByClassName("3i5")[0].addEventListener('click', function() {
    autohi = !autohi;
    document.getElementsByClassName("3i5")[0].className = "btn btn-blue 3i5";
    document.getElementsByClassName("3i5")[0].innerText = "Enable hi Script!";
    if (autohi) {
        document.getElementsByClassName("3i5")[0].className = "btn btn-red 3i5";
        document.getElementsByClassName("3i5")[0].innerText = "Disable hi Script!";
    }
})
document.getElementsByClassName("5i5")[0].addEventListener('click', function() {
    autorss = !autorss;
    document.getElementsByClassName("5i5")[0].className = "btn btn-blue 5i5";
    document.getElementsByClassName("5i5")[0].innerText = "Enable Send Info!";
    if (autorss) {
        document.getElementsByClassName("5i5")[0].className = "btn btn-red 5i5";
        document.getElementsByClassName("5i5")[0].innerText = "Disable Send Info!";
    }
})
document.getElementsByClassName("6i5")[0].addEventListener('click', function() {
    run = !run;
    document.getElementsByClassName("6i5")[0].className = "btn btn-blue 6i5";
    document.getElementsByClassName("6i5")[0].innerText = "Enable Speed Run";
    if (run) {
        document.getElementsByClassName("6i5")[0].className = "btn btn-red 6i5";
        document.getElementsByClassName("6i5")[0].innerText = "Disable Speed Run";
    }
})
document.getElementsByClassName("8i5")[0].addEventListener('click', function() {
    heal = !heal;
    document.getElementsByClassName("8i5")[0].className = "btn btn-green 8i5";
    document.getElementsByClassName("8i5")[0].innerText = "Auto heal and Pet Heal";
    if (heal) {
        document.getElementsByClassName("8i5")[0].className = "btn btn-red 8i5";
        document.getElementsByClassName("8i5")[0].innerText = "!(Auto heal and Pet Heal)";
    }
})
document.getElementsByClassName("9i5")[0].addEventListener('click', function() {
    revive = !revive;
    document.getElementsByClassName("9i5")[0].className = "btn btn-green 9i5";
    document.getElementsByClassName("9i5")[0].innerText = "Revive and Evolve Pets";
    if (revive) {
        document.getElementsByClassName("9i5")[0].className = "btn btn-red 9i5";
        document.getElementsByClassName("9i5")[0].innerText = "!(Revive and Evolve Pets)";
    }
})
document.getElementsByClassName("10i5")[0].addEventListener('click', function() {
    clearMsgs = !clearMsgs;
    document.getElementsByClassName("10i5")[0].className = "btn btn-blue 10i5";
    document.getElementsByClassName("10i5")[0].innerText = "Clear Messages";
    if (clearMsgs) {
        document.getElementsByClassName("10i5")[0].className = "btn btn-red 10i5";
        document.getElementsByClassName("10i5")[0].innerText = "!(Clear Messages)";
    }
})
document.getElementsByClassName("13i5")[0].addEventListener('click', function() {
    kick1p = !kick1p;
    document.getElementsByClassName("13i5")[0].className = "btn btn-white 13i5";
    document.getElementsByClassName("13i5")[0].innerText = "Enable M key!";
    if (kick1p) {
        document.getElementsByClassName("13i5")[0].className = "btn btn-red 13i5";
        document.getElementsByClassName("13i5")[0].innerText = "Disable M key!";
    }
})
document.getElementsByClassName("12i2")[0].addEventListener('click', function() {
    window.shouldStartScript = !window.shouldStartScript;
    document.getElementsByClassName("12i2")[0].innerText = "Active 4 Player Trick";
    if (window.shouldStartScript) {
        document.getElementsByClassName("12i2")[0].innerText = "!(Active 4 Player Trick)";
    }
})
document.getElementsByClassName("18i2")[0].addEventListener('click', function() {
    window.startaito2 = !window.startaito2;
    document.getElementsByClassName("18i2")[0].innerText = "Active Player Finder";
    if (window.startaito2) {
        window.sendAitoAlt2();
        document.getElementsByClassName("18i2")[0].innerText = "!(Active Player Finder)";
    }
})
document.getElementsByClassName("25i2")[0].addEventListener('click', function() {
    if (window.playerX && window.playerY) {
        window.findPlayer = !window.findPlayer;
        document.getElementsByClassName("25i2")[0].innerText = "Follow Position";
        if (window.findPlayer) {
            document.getElementsByClassName("25i2")[0].innerText = "Unfollow Position";
        }
    } else {
        game.ui.components.PopupOverlay.showHint("Player not found! You can try again once it's found.");
    }
})
document.getElementsByClassName("13i2")[0].addEventListener('click', function() {
    window.startaito7 = !window.startaito7;
    LKeyWithTimeouts();
    document.getElementsByClassName("13i2")[0].innerText = "Enable L Key!";
    if (window.startaito7) {
        document.getElementsByClassName("13i2")[0].innerText = "Disable L Key!";
    }
})

document.getElementsByClassName("0i2")[0].addEventListener('click', function() {
    window.sendws();
})
document.getElementsByClassName("1i2")[0].addEventListener('click', function() {
    setTimeout(() => {
        if (window.aim) {
            document.getElementsByClassName("1i2")[0].innerText = "Disable Aim!";
        } else {
            document.getElementsByClassName("1i2")[0].innerText = "Enable Aim!";
        }
    }, 100)
})
document.getElementsByClassName("2i2")[0].addEventListener('click', function() {
    setTimeout(() => {
        if (window.move) {
            document.getElementsByClassName("2i2")[0].innerText = "Disable Player Follower!";
        } else {
            document.getElementsByClassName("2i2")[0].innerText = "Enable Player Follower!";
        }
    }, 100)
})
document.getElementsByClassName("3i2")[0].addEventListener('click', function() {
    let id = Math.floor(document.getElementsByClassName("4i2")[0].value);
    window.allSockets[id-1].close();
})
game.network.sendInput = (e) => {
    let i = e;
    if (!i.mouseDown && !i.mouseUp) {
        game.network.sendPacket(3, e);
    }
}
document.getElementsByClassName('hud')[0].addEventListener('mousedown', e => {
    if (!e.button) {
        game.network.sendPacket(3, {mouseDown: game.inputPacketCreator.screenToYaw(e.clientX, e.clientY)})
    }
})
document.getElementsByClassName('hud')[0].addEventListener('mouseup', e => {
    if (!e.button) {
        game.network.sendPacket(3, {mouseUp: 1})
    }
})

window.RecordBase = function(baseName) {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to record base? If you recorded it twice, the first recorded base will be deleted.", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded!");
        let buildings = Game.currentGame.ui.buildings;
        let base = "";
        let stash = GetGoldStash();
        if (stash == undefined) {
            return
        }
        let stashPosition = {
            x: stash.x,
            y: stash.y
        }
        for (var uid in buildings) {
            if (!buildings.hasOwnProperty(uid)) {
                continue
            }

            let obj = buildings[uid]
            let x = Game.currentGame.ui.buildings[obj.uid].x - stashPosition.x
            let y = Game.currentGame.ui.buildings[obj.uid].y - stashPosition.y
            let building = Game.currentGame.ui.buildings[obj.uid].type
            let yaw = 0;
            base += "PlaceBuilding(stashPosition.x + " + x + ", stashPosition.y + " + y + ", '" + building + "', " + yaw + ");"
        }
        localStorage.RecordedBase1 = base
    })
}
window.buildRecordedBase = function() {
    let waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            stash = GetGoldStash();
            if (stash == undefined) return
            stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash)
            game.ui.components.PopupOverlay.showHint("Successfully recorded base were built!");
            var basecode = localStorage.RecordedBase1
            basecode = new Function(basecode)
            return basecode()
        }
    }, 275)
    }
window.DeleteRecordedbase = function() {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete recorded base?", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded base has been deleted!");
        localStorage.RecordedBase1 = null;
    })
}
window.RecordBase2 = function(baseName) {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to record base? If you recorded it twice, the first recorded base will be deleted.", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded!");
        let buildings = Game.currentGame.ui.buildings;
        let base = "";
        let stash = GetGoldStash();
        if (stash == undefined) {
            return
        }
        let stashPosition = {
            x: stash.x,
            y: stash.y
        }
        for (var uid in buildings) {
            if (!buildings.hasOwnProperty(uid)) {
                continue
            }

            let obj = buildings[uid]
            let x = Game.currentGame.ui.buildings[obj.uid].x - stashPosition.x
            let y = Game.currentGame.ui.buildings[obj.uid].y - stashPosition.y
            let building = Game.currentGame.ui.buildings[obj.uid].type
            let yaw = 90;
            base += "PlaceBuilding(stashPosition.x + " + x + ", stashPosition.y + " + y + ", '" + building + "', " + yaw + ");"
        }
        localStorage.RecordedBase2 = base
    })
}
window.buildRecordedBase2 = function() {
    var waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            stash = GetGoldStash();
            if (stash == undefined) return
            stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash)
            game.ui.components.PopupOverlay.showHint("Successfully recorded base were built!");
            var basecode = localStorage.RecordedBase2
            basecode = new Function(basecode)
            return basecode()
        }
    }, 275)
    }
window.DeleteRecordedbase2 = function() {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete recorded base?", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded base has been deleted!");
        localStorage.RecordedBase2 = null;
    })
}
window.RecordBase3 = function(baseName) {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to record base? If you recorded it twice, the first recorded base will be deleted.", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded!");
        let buildings = Game.currentGame.ui.buildings;
        let base = "";
        let stash = GetGoldStash();
        if (stash == undefined) {
            return
        }
        let stashPosition = {
            x: stash.x,
            y: stash.y
        }
        for (var uid in buildings) {
            if (!buildings.hasOwnProperty(uid)) {
                continue
            }

            let obj = buildings[uid]
            let x = Game.currentGame.ui.buildings[obj.uid].x - stashPosition.x
            let y = Game.currentGame.ui.buildings[obj.uid].y - stashPosition.y
            let building = Game.currentGame.ui.buildings[obj.uid].type
            let yaw = 180;
            base += "PlaceBuilding(stashPosition.x + " + x + ", stashPosition.y + " + y + ", '" + building + "', " + yaw + ");"
        }
        localStorage.RecordedBase3 = base
    })
}
window.buildRecordedBase3 = function() {
    var waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            stash = GetGoldStash();
            if (stash == undefined) return
            stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash)
            game.ui.components.PopupOverlay.showHint("Successfully recorded base were built!");
            var basecode = localStorage.RecordedBase3
            basecode = new Function(basecode)
            return basecode()
        }
    }, 275)
    }
window.DeleteRecordedbase3 = function() {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete recorded base?", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded base has been deleted!");
        localStorage.RecordedBase3 = null;
    })
}
window.buildSavedBase = function() {
    var waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            stash = GetGoldStash();
            if (stash == undefined) return
            stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash)
            game.ui.components.PopupOverlay.showHint("Successfully saved base were built!");
            var basecode = document.getElementsByClassName("30i3")[0].value;
            basecode = new Function(basecode)
            return basecode()
        }
    }, 275)
    }
window.saveBase = () => {
    game.ui.components.PopupOverlay.showHint("Successfully saved!");
    let buildings = Game.currentGame.ui.buildings;
    let base = "";
    let stash = GetGoldStash();
    if (stash == undefined) {
        return
    }
    let stashPosition = {
        x: stash.x,
        y: stash.y
    }
    for (var uid in buildings) {
        if (!buildings.hasOwnProperty(uid)) {
            continue
        }
        let obj = buildings[uid]
        let x = Game.currentGame.ui.buildings[obj.uid].x - stashPosition.x
        let y = Game.currentGame.ui.buildings[obj.uid].y - stashPosition.y
        let building = Game.currentGame.ui.buildings[obj.uid].type
        let yaw = 270;
        base += "PlaceBuilding(stashPosition.x + " + x + ", stashPosition.y + " + y + ", '" + building + "', " + yaw + ");";
    }
    document.getElementsByClassName("30i3")[0].value = base;
}
window.autobuildtoggle = () => {
    autobuild = !autobuild;
    document.getElementsByClassName("21i3")[0].innerText = "Enable Auto Build Saved Towers!";
    if (autobuild) {
        document.getElementsByClassName("21i3")[0].innerText = "Disable Auto Build Saved Towers!";
    }
}
window.upgradealltoggle = () => {
    upgradeAll2 = !upgradeAll2;
    document.getElementsByClassName("26i3")[0].innerText = "Enable Upgrade All!";
    if (upgradeAll2) {
        document.getElementsByClassName("26i3")[0].innerText = "Disable Upgrade All!";
    }
}
function GetGoldStash() {
    for (let i in game.ui.buildings) {
        if (game.ui.buildings[i].type == "GoldStash") {
            return game.ui.buildings[i];
        }
    }
}
window.PlaceBuilding = function(x, y, building, yaw) {
    Game.currentGame.network.sendRpc({
        name: "MakeBuilding",
        x: x,
        y: y,
        type: building,
        yaw: yaw
    })
}
function counter(e = 0) {
    if (e <= -0.99949999999999999e24) {
        return Math.round(e/-1e23)/-10 + "TT";
    }
    if (e <= -0.99949999999999999e21) {
        return Math.round(e/-1e20)/-10 + "TB";
    }
    if (e <= -0.99949999999999999e18) {
        return Math.round(e/-1e17)/-10 + "TM";
    }
    if (e <= -0.99949999999999999e15) {
        return Math.round(e/-1e14)/-10 + "TK";
    }
    if (e <= -0.99949999999999999e12) {
        return Math.round(e/-1e11)/-10 + "T";
    }
    if (e <= -0.99949999999999999e9) {
        return Math.round(e/-1e8)/-10 + "B";
    }
    if (e <= -0.99949999999999999e6) {
        return Math.round(e/-1e5)/-10 + "M";
    }
    if (e <= -0.99949999999999999e3) {
        return Math.round(e/-1e2)/-10 + "K";
    }
    if (e <= 0.99949999999999999e3) {
        return Math.round(e) + "";
    }
    if (e <= 0.99949999999999999e6) {
        return Math.round(e/1e2)/10 + "K";
    }
    if (e <= 0.99949999999999999e9) {
        return Math.round(e/1e5)/10 + "M";
    }
    if (e <= 0.99949999999999999e12) {
        return Math.round(e/1e8)/10 + "B";
    }
    if (e <= 0.99949999999999999e15) {
        return Math.round(e/1e11)/10 + "T";
    }
    if (e <= 0.99949999999999999e18) {
        return Math.round(e/1e14)/10 + "TK";
    }
    if (e <= 0.99949999999999999e21) {
        return Math.round(e/1e17)/10 + "TM";
    }
    if (e <= 0.99949999999999999e24) {
        return Math.round(e/1e20)/10 + "TB";
    }
    if (e <= 0.99949999999999999e27) {
        return Math.round(e/1e+23)/10 + "TT";
    }
    if (e >= 0.99949999999999999e27) {
        return Math.round(e/1e+23)/10 + "TT";
    }
}

function healPlayer() {
    if (!game.ui.components.PlacementOverlay.buildingId && !game.ui.components.BuildingOverlay.buildingId) {
        Game.currentGame.network.sendRpc({
            "name": "EquipItem",
            "itemName": "HealthPotion",
            "tier": 1
        })
        Game.currentGame.network.sendRpc({
            "name": "BuyItem",
            "itemName": "HealthPotion",
            "tier": 1
        })

    }
}
window.sendAitoAlt2 = () => {
    if (window.startaito2) {
        let ver = false;
        let player = game.ui.components.Leaderboard.leaderboardData[document.getElementsByClassName("16i2")[0].value - 1].name;
        let ws = new WebSocket(`ws://${Game.currentGame.options.servers[Game.currentGame.options.serverId].hostname}:8000`);
        ws.binaryType = "arraybuffer";
        ws.onclose = () => {
            ws.isclosed = true;
        }
        ws.onPreEnterWorld = (data) => {
            ws.network.sendEnterWorldAndDisplayName = (t) => {
                ws.name = t;
                ws.network.sendPacket(4, {
                    displayName: t,
                    extra: data.extra
                });
            };
            ws.network.sendInput = (t) => { ws.network.sendPacket(3, t); };
            ws.network.sendRpc = (t) => { ws.network.sendPacket(9, t); };
            ws.network.sendPacket = (e, t) => { if (!ws.isclosed) { ws.send(ws.network.codec.encode(e, t)); } };
            ws.network.sendPacket(4, {displayName: ws.cloneId + "Glasphid", extra: data.extra});
        }
        ws.onEnterWorld = () => {
            // useless
        }
        ws.onmessage = msg => {
            if (new Uint8Array(msg.data)[0] == 5) {
                ws.network = new Game.currentGame.networkType();
                let data = ws.network.codec.decode(msg.data);
                ws.onPreEnterWorld(data);
                return;
            }
            ws.data = ws.network.codec.decode(msg.data);
            if (ws.data.uid) {
                ws.uid = ws.data.uid;
            }
            ws.network.sendInput({down: 1});
            if (ws.data.entities) {
                for (let i in ws.data.entities) {
                    if (ws.data.entities[i].name == player) {
                        window.startaito2 = false;
                        window.playerX = Math.round(ws.data.entities[i].position.x);
                        window.playerY = Math.round(ws.data.entities[i].position.y);
                        document.getElementsByClassName("16i2")[0].value = "(" + window.playerX + ", " + window.playerY + ")";
                        document.getElementsByClassName("18i2")[0].innerText = "Active Player Finder";
                        game.ui.components.PopupOverlay.showHint(`Successfully found the current player, {x: ${window.playerX}, y: ${window.playerY}};`);
                        console.log(ws.data.entities[i]);
                    }
                    if (ws.data.entities[i].name) { ver = true; };
                }
            }
            if (ws.data.name == "DayCycle") {
                ws.isDay = ws.data.response.isDay;
            }
            if (ws.data.name == "Dead") {
                ws.network.sendInput({respawn: 1});
            }
            if (ver && !ws.isclosed) {
                ws.isclosed = true;
                setTimeout(() => {
                    ws.close();
                    window.sendAitoAlt2();
                }, 25000);
            }
            if (ws.data.name == "PartyShareKey") {
                ws.psk = ws.data;
                ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: game.ui.playerPartyShareKey});
            }
            switch(ws.data.opcode) {
                case 4:
                    ws.onEnterWorld(ws.data);
                    break;
            }
        }
    }
}
window.sendAitoAlt = () => {
    if (window.startaito) {
        let ws = new WebSocket(`ws://${Game.currentGame.options.servers[Game.currentGame.options.serverId].hostname}:8000`);
        ws.binaryType = "arraybuffer";
        ws.onclose = () => {
            ws.isclosed = true;
        }
        ws.onPreEnterWorld = (data) => {
            ws.network.sendEnterWorldAndDisplayName = (t) => { ws.network.sendPacket(4, {displayName: t, extra: data.extra}); };
            ws.network.sendInput = (t) => { ws.network.sendPacket(3, t); };
            ws.network.sendRpc = (t) => { ws.network.sendPacket(9, t); };
            ws.network.sendPacket = (e, t) => { if (!ws.isclosed) { ws.send(ws.network.codec.encode(e, t)); } };
            ws.network.sendEnterWorldAndDisplayName(localStorage.name);
        }
        ws.onEnterWorld = () => {
            // useless
        }
        ws.onmessage = msg => {
            if (new Uint8Array(msg.data)[0] == 5) {
                ws.network = new Game.currentGame.networkType();
                let data = ws.network.codec.decode(msg.data);
                ws.onPreEnterWorld(data);
                return;
            }
            ws.data = ws.network.codec.decode(msg.data);
            if (ws.data.uid) {
                ws.uid = ws.data.uid;
            }
            if (ws.data.name) {
                ws.dataType = ws.data;
            }
            if (!window.startaito && !ws.isclosed) {
                ws.isclosed = true;
                ws.close();
            }
            if (ws.verified) {
                if (!ws.isDay && !ws.isclosed) {
                    ws.isclosed = true;
                    ws.close();
                    window.sendAitoAlt();
                }
            }
            if (ws.data.name == "DayCycle") {
                ws.isDay = ws.data.response.isDay;
                if (ws.isDay) {
                    ws.verified = true;
                }
            }
            if (ws.data.name == "Dead") {
                ws.network.sendInput({respawn: 1});
            }
            if (ws.data.name == "Leaderboard") {
                ws.lb = ws.data;
                if (ws.psk) {
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: game.ui.getPlayerPartyShareKey()});
                    if (ws.psk.response.partyShareKey == game.ui.getPlayerPartyShareKey()) {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Pause", tier: 1});
                    }
                }
            }
            if (ws.data.name == "PartyShareKey") {
                ws.psk = ws.data;
            }
            switch(ws.data.opcode) {
                case 4:
                    ws.onEnterWorld(ws.data);
                    break;
            }
        }
    }
}
window.allSockets = [];
window.FKey = false;
window.FKeyOn = null;
window.socketId1 = 1;
window.socketId2 = 2;
var cloneTimeout = false;
game.network.addEnterWorldHandler(() => {
	setTimeout(() => {
		game.world.myUid = null;
	},500);
});
window.sendws = () => {
    let mousePosition3;
    let isOnControl = true;
    let isTrue = true;
    let ws = new WebSocket(`ws://${game.options.servers[game.options.serverId].hostname}:8000`);
    if (!window.allSockets[window.allSockets.length]) {
        ws.cloneId = window.allSockets.length + 1;
        window.allSockets[window.allSockets.length] = ws;
    }
    ws.binaryType = "arraybuffer";
    ws.aimingYaw = 1;
    ws.onopen = () => {
       ws.network = new game.networkType()
       ws.sendPacket = (e,d) => { ws.send(ws.network.codec.encode(e,d))};
    };
    ws.onclose = () => {
        ws.isclosed = true;
        console.log('Socket Closed');
    }
    ws.onPreEnterWorld = (data) => {
        /** ws.network.sendInput = (t) => { ws.network.sendPacket(3, t); };
        ws.network.sendRpc = (t) => { ws.network.sendPacket(9, t); };
        ws.network.sendPacket = (e, t) => { if (!ws.isclosed) { ws.send(ws.network.codec.encode(e, t)); } };
        ws.network.sendPacket(4, {displayName:"Glasphid "+ ws.cloneId, extra: data.extra}); */

        let imports = {
            a: {
                a: function(a) {
                    console.log(a)
                },
                d: function(a) {
                    console.log(a)
                },
                b: function(a, b, c) {
                    console.log(a, b, c)
                },
                g: function() {},
                c: function(a) {
                    console.log(a)
                },
                f: function(a) {
                    console.log(a)
                },
                e: function(a) {
                    console.log(a)
                },
            }
        };

        (async () => {
            await fetch('asset/zombs_wasm.wasm').then(response =>
                response.arrayBuffer()).then(bytes =>
                WebAssembly.instantiate(bytes, imports)).then(result => {
                let asm = {
                    memory: result.instance.exports.h,
                    _MakeBlendField: function(a, b) {
                        return result.instance.exports.l(a, b)
                    },
                    _free: result.instance.exports.q,
                    __wasm_call_ctors: result.instance.exports.j,
                    _main: result.instance.exports.k,
                    stackSave: result.instance.exports.m,
                    stackRestore: result.instance.exports.n,
                    stackAlloc: result.instance.exports.o,
                    malloc: result.instance.exports.p
                }
                return asm.memory;
            })
        })();

		game.network.sendPacket = function(event, data) {
            if (!data) {
                return;
            }
            if (event == 4 || event == 5 || event == 9 || event == 3 || event == 7) {
                this.socket.send(this.codec.encode(event, data));
            }
        };

		game.network.sendPingIfNecessary = function() {
            this.connecting = false;
            this.connected = false;;
            var pingInProgress = (this.pingStart != null);
            if (pingInProgress) {
                return;
            };
            if (this.pingCompletion != null) {
                var msSinceLastPing = (new Date().getTime() - this.pingCompletion.getTime());
                if (msSinceLastPing <= 5000) {
                    return;
                }
            };
            this.pingStart = new Date();
            this.sendPing({
                nonce: 0
            });
            this.sendRpc(game.metrics.metrics);
        };

        game.world.myUid = null;

		ws.sendPacket(4,{
			displayName: game.ui.playerTick.name,
			extra: data.extra
		});
	};
    ws.onEnterWorld = () => {
        altname++;

        ws.sendPacket(9,{
			name: "JoinPartyByShareKey",
			partyShareKey: game.ui.getPlayerPartyShareKey()
		});

		game.network.sendPingIfNecessary = function() {
            this.connecting = false;
            this.connected = true;
            var pingInProgress = (this.pingStart != null);
            if (pingInProgress) {
                return;
            }
            if (this.pingCompletion != null) {
                var msSinceLastPing = (new Date().getTime() - this.pingCompletion.getTime());
                if (msSinceLastPing <= 5000) {
                    return;
                }
            }
            this.pingStart = new Date();

            this.sendPing({
                nonce: 0
            });
            this.sendRpc(game.metrics.metrics);
        };
    }
    ws.onmessage = msg => {
        if (new Uint8Array(msg.data)[0] == 5) {
            ws.network = new Game.currentGame.networkType();
            let data = ws.network.codec.decode(msg.data);
            ws.onPreEnterWorld(data);
            return;
        }
        ws.data = ws.network.codec.decode(msg.data);
        if (isTrue) {
            isTrue = !isTrue;
            if (ws.psk) {
                ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
            } else {
                setTimeout(() => {
                    if (ws.psk) {
                        ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                    }
                }, 250)
            }
            var timeCheck = setTimeout(function(){
                if(ws.cloneId === 0) {
                    game.ui.components.PopupOverlay.showHint('Theres an error... (probhiably server full)');
                    ws.close();
                }
            }, 3000);

            let SendRpc = ws.network.sendRpc;
            let SendInput = ws.network.sendInput;
            sendInput({up: 1});
            ws.mouseUp = 1;
            ws.mouseDown = 0;
            ws.f = false;
            function mouseMoved(e, x, y, d) {
                ws.aimingYaw = e;
                if (ws.mouseDown && !ws.mouseUp) {
                    ws.network.sendInput({mouseMovedWhileDown: e, worldX: x, worldY: y, distance: d});
                }
                if (!ws.mouseDown && ws.mouseUp) {
                    ws.network.sendInput({mouseMoved: e, worldX: x, worldY: y, distance: d});
                }
            }
            document.addEventListener('mousemove', mousemove => {
                if (isOnControl) {
                    if (!ws.isclosed) {
                        mousePosition3 = game.renderer.screenToWorld(mousemove.clientX, mousemove.clientY);
                        if (ws.myPlayer) {
                            if (ws.myPlayer.position) {
                                mouseMoved(game.inputPacketCreator.screenToYaw((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100), Math.floor(mousePosition3.x), Math.floor(mousePosition3.y), Math.floor(game.inputPacketCreator.distanceToCenter((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100)/100));
                            }
                        }
                    }
                }
            })
            ws.data.opcode == 0 && (ws.myPlayer.dead == 0) && ws.network.sendPacket(3, {up: 1, down: 0})
            document.addEventListener('keydown', e => {
                if (!ws.isclosed) {
                    if (isOnControl) {
                        if (e.keyCode == 81 && document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            setTimeout(() => {
                                var nextWeapon = location.hostname == "zombs.io" ? 'Pickaxe' : "Crossbow";
                                var weaponOrder = location.hostname == "zombs.io" ? ['Pickaxe', 'Spear', 'Bow', 'Bomb'] : ["Crossbow", 'Pickaxe', 'Spear', 'Bow', 'Bomb'];
                                var foundCurrent = false;
                                for (let i in weaponOrder) {
                                    if (foundCurrent) {
                                        if (ws.inventory[weaponOrder[i]]) {
                                            nextWeapon = weaponOrder[i];
                                            break;
                                        }
                                    }
                                    else if (weaponOrder[i] == ws.myPlayer.weaponName) {
                                        foundCurrent = true;
                                    }
                                }
                                ws.network.sendRpc({name: 'EquipItem', itemName: nextWeapon, tier: ws.inventory[nextWeapon].tier});
                            }, 100);
                        }
                        if (e.keyCode == 72 && document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            ws.network.sendRpc({name: 'LeaveParty'});
                        }
                        if (e.keyCode == 74 && document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            ws.network.sendRpc({name: 'JoinPartyByShareKey', partyShareKey: game.ui.playerPartyShareKey});
                        }

                        if (e.keyCode == 32 && document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            setTimeout(() => {
                                ws.network.sendInput({space: 0});
                                ws.network.sendInput({space: 1});
                            }, 100);
                        }
                        if (e.keyCode == 82) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                for (let i in game.ui.buildings) {
                                    if (game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.buildings[i].type == game.ui.components.BuildingOverlay.buildingId && game.ui.buildings[i].tier == game.ui.components.BuildingOverlay.buildingTier) {
                                        ws.network.sendRpc({name: "UpgradeBuilding", uid: game.ui.buildings[i].uid});
                                    }
                                }
                            }
                        }
                        if (e.keyCode == 46) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                if (ws.myPet) {
                                    ws.network.sendInput({name: "DeleteBuilding", uid: ws.myPet.uid});
                                }
                            }
                        }
                        if (e.keyCode == 82) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                if (!game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.components.BuildingOverlay.buildingUid) {
                                    ws.network.sendRpc({name: "UpgradeBuilding", uid: game.ui.components.BuildingOverlay.buildingUid});
                                }
                            }
                        }
                        if (e.keyCode == 89) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                for (let i in game.ui.buildings) {
                                    if (game.ui.components.BuildingOverlay.buildingUid && game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.buildings[i].type == game.ui.components.BuildingOverlay.buildingId && game.ui.buildings[i].tier == game.ui.components.BuildingOverlay.buildingTier && game.ui.components.BuildingOverlay.buildingId !== "GoldStash") {
                                        ws.network.sendRpc({name: "DeleteBuilding", uid: game.ui.buildings[i].uid})
                                    }
                                }
                            }
                        }
                        if (e.keyCode == 84) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                for (var i in game.ui.buildings) {
                                    if (game.ui.components.BuildingOverlay.buildingUid && game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.buildings[i].type == game.ui.components.BuildingOverlay.buildingId && game.ui.buildings[i].tier == game.ui.components.BuildingOverlay.buildingTier && game.ui.components.BuildingOverlay.buildingId !== "GoldStash") {
                                        game.network.sendRpc({name: "DeleteBuilding", uid: game.ui.buildings[i].uid});
                                    }
                                }
                            }
                        }
                        if (e.keyCode == 89) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                if (!game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.components.BuildingOverlay.buildingId !== "GoldStash" && game.ui.components.BuildingOverlay.buildingUid) {
                                    ws.network.sendRpc({name: "DeleteBuilding", uid: game.ui.components.BuildingOverlay.buildingUid})
                                }
                            }
                        }
                        if (e.keyCode == 89) {
                            if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                                if (!game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.components.BuildingOverlay.buildingId !== "GoldStash" && game.ui.components.BuildingOverlay.buildingUid) {
                                    ws.network.sendRpc({name: "DeleteBuilding", uid: game.ui.components.BuildingOverlay.buildingUid})
                                }
                            }
                        }
                        let KeyCode = e.keyCode;
                        if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            if (!ws.automove) {
                                if (KeyCode == 76) {
                                    ws.network.sendInput({up: 1, down: 0});
                                }
                                if (KeyCode == 191) {
                                    ws.network.sendInput({right: 1, left: 0});
                                }
                                if (KeyCode == 190) {
                                    ws.network.sendInput({down: 1, up: 0});
                                }
                                if (KeyCode == 188) {
                                    ws.network.sendInput({left: 1, right: 0});
                                }
                                if (KeyCode == 87) {
                                    ws.network.sendInput({up: 1, down: 0});
                                }
                                if (KeyCode == 68) {
                                    SendInput({right: 1, left: 0});
                                }
                                if (KeyCode == 83) {
                                    ws.network.sendInput({down: 1, up: 0});
                                }
                                if (KeyCode == 65) {
                                    ws.network.sendInput({left: 1, right: 0});
                                }
                            }
                            if (e.keyCode == 82) {
                                ws.network.sendRpc({name: "BuyItem", itemName: "HealthPotion", tier: 1})
                                ws.network.sendRpc({name: "EquipItem", itemName: "HealthPotion", tier: 1})
                            }
                            if (KeyCode == 78) {
                                ws.network.sendRpc({
                                    "name": "EquipItem",
                                    "itemName": "PetCARL",
                                    "tier": ws.inventory.PetCARL.tier
                                })
                                ws.network.sendRpc({
                                    "name": "EquipItem",
                                    "itemName": "PetMiner",
                                    "tier": ws.inventory.PetMiner.tier
                                })
                            }
                            if (KeyCode == 77) {
                                ws.network.sendRpc({
                                    "name": "BuyItem",
                                    "itemName": "PetRevive",
                                    "tier": 1
                                })
                                ws.network.sendRpc({
                                    "name": "EquipItem",
                                    "itemName": "PetRevive",
                                    "tier": 1
                                })
                                ws.network.sendRpc({
                                    "name": "BuyItem",
                                    "itemName": "PetCARL",
                                    "tier": ws.inventory.PetCARL.tier + 1
                                })
                                ws.network.sendRpc({
                                    "name": "BuyItem",
                                    "itemName": "PetMiner",
                                    "tier": ws.inventory.PetMiner.tier + 1
                                })
                            }
                            if (KeyCode == 221) {
                                game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: ws.psk.response.partyShareKey})
                            }
                        }
                    }
                }
            })
            document.addEventListener('keyup', e => {
                if (!ws.isclosed) {
                    if (isOnControl) {
                        let KeyCode = e.keyCode;
                        if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            if (!ws.automove) {
                                if (KeyCode == 76) {
                                    ws.network.sendInput({up: 0});
                                }
                                if (KeyCode == 191) {
                                    ws.network.sendInput({right: 0});
                                }
                                if (KeyCode == 190) {
                                    ws.network.sendInput({down: 0});
                                }
                                if (KeyCode == 188) {
                                    ws.network.sendInput({left: 0});
                                }
                                if (KeyCode == 87) {
                                    ws.network.sendInput({up: 0});
                                }
                                if (KeyCode == 68) {
                                    ws.network.sendInput({right: 0});
                                }
                                if (KeyCode == 83) {
                                    ws.network.sendInput({down: 0});
                                }
                                if (KeyCode == 65) {
                                    ws.network.sendInput({left: 0});
                                }
                            }
                        }
                    }
                }
            })
            document.getElementsByClassName("hud")[0].addEventListener("mousedown", function(e) {
                if (!ws.isclosed) {
                    if (isOnControl) {
                        if (!e.button) {
                            ws.mouseDown = 1;
                            ws.mouseUp = 0;
                            ws.network.sendInput({mouseDown: ws.aimingYaw, worldX: Math.floor(mousePosition3.x), worldY: Math.floor(mousePosition3.y), distance: Math.floor(game.inputPacketCreator.distanceToCenter((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100)/100)});
                        }
                    }
                }
            });
            document.getElementsByClassName("hud")[0].addEventListener("mouseup", function(e) {
                if (!ws.isclosed) {
                    if (isOnControl) {
                        if (!e.button) {
                            ws.mouseUp = 1;
                            ws.mouseDown = 0;
                            ws.network.sendInput({mouseUp: 1, worldX: Math.floor(mousePosition3.x), worldY: Math.floor(mousePosition3.y), distance: Math.floor(game.inputPacketCreator.distanceToCenter((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100)/100)});
                        }
                    }
                }
            });
            if (isOnControl) {
                let t1 = location.hostname == "zombs.io" ? 0 : 1;
                t1 == 1 && (document.getElementsByClassName("hud-shop-item")[t1 + 0].addEventListener('click', function() {
                    ws.network.sendRpc({name: "BuyItem", itemName: "Crossbow", tier: ws.inventory.Crossbow ? (ws.inventory.Crossbow.tier + 1) : 1});
                }));
                document.getElementsByClassName("hud-shop-item")[t1 + 0].addEventListener('click', function() {
                    ws.network.sendRpc({name: "BuyItem", itemName: "Pickaxe", tier: ws.inventory.Pickaxe.tier+1});
                });
              document.getElementsByClassName("hud-shop-item")[1].addEventListener('click', function() {
                if (!ws.inventory.Spear) {
                    ws.network.sendRpc({name: "BuyItem", itemName: "Spear", tier: 1});
                } else {
                    ws.network.sendRpc({name: "BuyItem", itemName: "Spear", tier: ws.inventory.Spear.tier+1});
                }
            });
                document.getElementsByClassName("hud-shop-item")[t1 + 2].addEventListener('click', function() {
                    if (!ws.inventory.Bow) {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: 1});
                    } else {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: ws.inventory.Bow.tier+1});
                    }
                });
                document.getElementsByClassName("hud-shop-item")[t1 + 3].addEventListener('click', function() {
                    if (!ws.inventory.Bomb) {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Bomb", tier: 1});
                    } else {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Bomb", tier: ws.inventory.Bomb.tier+1});
                    }
                });
                document.getElementsByClassName("hud-shop-item")[t1 + 4].addEventListener('click', function() {
                    ws.network.sendRpc({name: "BuyItem", itemName: "ZombieShield", tier: ws.inventory.ZombieShield ? (ws.inventory.ZombieShield.tier + 1) : 1});
                });
                document.getElementsByClassName("hud-respawn-btn")[0].addEventListener('click', function() {
                    ws.network.sendRpc({respawn: 1});
                })
                t1 && document.getElementsByClassName("hud-toolbar-item")[0].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Crossbow", tier: ws.inventory.Crossbow.tier});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 0].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Pickaxe", tier: ws.inventory.Pickaxe.tier});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 1].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Spear", tier: ws.inventory.Spear.tier});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 2].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: ws.inventory.Bow.tier});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 3].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Bomb", tier: ws.inventory.Bomb.tier});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 4].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "HealthPotion", tier: 1});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 5].addEventListener('mouseup', function(e) {
                    if (!e.button) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "PetHealthPotion", tier: 1});
                    }
                });
                document.getElementsByClassName("hud-toolbar-item")[t1 + 6].addEventListener("mouseup", function(e) {
                    if (!e.button) {
                        if (isOnControl) {
                            ws.network.sendRpc({name: "RecallPet"});
                            ws.network.sendInput({respawn: 1});
                            ws.automove = !ws.automove;
                            if (ws.automove) {
                                window.move = true;
                            } else {
                                window.move = false;
                            }
                        }
                    }
                })
            }
            document.getElementsByClassName("10i")[0].addEventListener('click', () => {
                ws.activebow = !ws.activebow;
                ws.playerWeapon = ws.myPlayer.weaponName;
                if (ws.activebow) {
                    if (ws.inventory.Bow) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "Crossbow", tier: ws.inventory.Bow.tier})
                    } else {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Crossbow", tier: 1})
                        ws.network.sendRpc({name: "EquipItem", itemName: "Crossbow", tier: 1})
                    }
                } else {
                    ws.network.sendRpc({name: "EquipItem", itemName: ws.playerWeapon, tier: ws.inventory[ws.playerWeapon].tier})
                }
            })
            if (window.aim) {
                ws.autoaim = true;
            }
            if (window.move) {
                ws.automove = true;
            }
            if (window.autohiBot) {
                ws.autohi = true;
            }
            document.getElementsByClassName("1i2")[0].addEventListener('click', () => {
                ws.autoaim = !ws.autoaim;
                if (ws.autoaim) {
                    window.aim = true;
                } else {
                    window.aim = false;
                }
            })
            document.getElementsByClassName("2i2")[0].addEventListener('click', () => {
                ws.automove = !ws.automove;
                if (ws.automove) {
                    window.move = true;
                    ws.network.sendRpc({name: "RecallPet"});
                    ws.network.sendInput({respawn: 1});
                    ws.network.sendInput({name: "DeleteBuilding", uid: ws.myPet.uid});
                } else {
                    window.move = false;
                }
            })
            document.getElementsByClassName("7i2")[0].addEventListener('click', () => {
                ws.close();
                altname = ws.cloneId;
            })
            document.getElementsByClassName("8i2")[0].addEventListener('click', () => {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${ws.players[ws.uid].name}, W: ${counter(ws.players[ws.uid].wood)}, S: ${counter(ws.players[ws.uid].stone)}, G: ${counter(ws.players[ws.uid].gold)}, ID: ${ws.cloneId};`})
            })
            document.getElementsByClassName("21i2")[0].addEventListener('click', () => {
                isOnControl = true;
            })
            document.getElementsByClassName("22i2")[0].addEventListener('click', () => {
                isOnControl = false;
            })
            window.playerIds = {
                id1: allSockets[window.socketId1 - 1],
                id2: allSockets[window.socketId2 - 1]
            }
        }
        if (window.testing) {
            ws.network.sendRpc({name: "SetOpenParty", isOpen: 0})
            ws.network.sendRpc({name: "SetPartyName", partyName: ws.cloneId + ''})
        }
        if (ws.data.uid) {
            ws.uid = ws.data.uid;
            ws.dataInfo = ws.data;
            ws.players = {};
            ws.inventory = {};
            ws.buildings = {};
            ws.parties = {};
            ws.lb = {}
            ws.playerUid = game.world.myUid;
            ws.network.sendInput({space: 1});
            ws.network.sendRpc({name: "BuyItem", itemName: "PetCARL", tier: 1})
            ws.network.sendRpc({name: "BuyItem", itemName: "PetMiner", tier: 1})
        }
        if (ws.data.entities) {
            if (window.message == ws.cloneId) {
                game.world.replicator.onEntityUpdate(ws.data);
            }
            if (ws.data.entities[ws.uid].name) {
                ws.myPlayer = ws.data.entities[ws.uid];
            }
            for (let g in ws.myPlayer) {
                if (ws.myPlayer[g] !== ws.data.entities[ws.uid][g] && ws.data.entities[ws.uid][g] !== undefined) {
                    ws.myPlayer[g] = ws.data.entities[ws.uid][g];
                }
            }
            if (ws.myPlayer.petUid) {
                if (ws.data.entities[ws.myPlayer.petUid]) {
                    if (ws.data.entities[ws.myPlayer.petUid].model) {
                        ws.myPet = ws.data.entities[ws.myPlayer.petUid];
                        ws.shouldHealPet = false;
                    }
                }
                for (let g in ws.myPet) {
                    if (ws.data.entities[ws.myPlayer.petUid]) {
                        if (ws.myPet[g] !== ws.data.entities[ws.myPlayer.petUid][g] && ws.data.entities[ws.myPlayer.petUid][g] !== undefined) {
                            ws.myPet[g] = ws.data.entities[ws.myPlayer.petUid][g]
                        }
                    }
                }
            }
            for (let i in ws.data.entities) {
                if (ws.data.entities[i].name) {
                    ws.players[i] = ws.data.entities[i];
                }
            }
            for (let i in ws.players) {
                if (!ws.data.entities[i]) {
                    delete ws.players[i];
                }
                for (let g in ws.players[i]) {
                    if (ws.players[i][g] !== ws.data.entities[i][g] && ws.data.entities[i][g] !== undefined) {
                        ws.players[i][g] = ws.data.entities[i][g];
                    }
                }
                ws.playerTick = ws.players[ws.playerUid];
            }
        }
        if (ws.data.name == "DayCycle") {
            ws.tickData = ws.data.response;
            ws.isDay = ws.data.response.isDay;
        }
        if (ws.data.tick) {
            var currentTick = ws.data.tick;
            var msPerTick = 50;
            var dayRatio = 0;
            var nightRatio = 0;
            var barWidth = 130;
            if (ws.tickData) {
                if (ws.tickData.dayEndTick) {
                    if (ws.tickData.dayEndTick > 0) {
                        var dayLength = ws.tickData.dayEndTick - ws.tickData.cycleStartTick;
                        var dayTicksRemaining = ws.tickData.dayEndTick - currentTick;
                        dayRatio = 1 - dayTicksRemaining / dayLength;
                    }
                }
                else if (ws.tickData.nightEndTick > 0) {
                    var nightLength = ws.tickData.nightEndTick - ws.tickData.cycleStartTick;
                    var nightTicksRemaining = ws.tickData.nightEndTick - currentTick;
                    dayRatio = 1;
                    nightRatio = 1 - nightTicksRemaining / nightLength;
                }
                var currentPosition = (dayRatio * 1 / 2 + nightRatio * 1 / 2) * -barWidth;
                var offsetPosition = currentPosition + barWidth / 2;
                if (offsetPosition) {
                    ws.dayTicker = Math.round(offsetPosition);
                }
            }
        }
        if (ws.data.name == "PartyInfo") {
            ws.partyInfo = ws.data.response;
            setTimeout(() => {
                for (let i in ws.partyInfo) {
                    if (ws.partyInfo[i].playerUid == ws.uid && ws.partyInfo[i].isLeader) {
                        ws.network.sendRpc({name: "SetPartyMemberCanSell", uid: game.world.myUid, canSell: 1});
                        ws.network.sendRpc({name: "SetOpenParty", isOpen: 1});
                        setTimeout(() => {
                            ws.network.sendRpc({name: "SetPartyName", partyName: ws.cloneId + ""});
                        }, 1000);
                    }
                }
            }, 1750);
        }
        if (ws.data.name == "SetItem") {
            ws.inventory[ws.data.response.itemName] = ws.data.response;
            if (!ws.inventory[ws.data.response.itemName].stacks) {
                delete ws.inventory[ws.data.response.itemName];
            }
            if (ws.data.response.itemName == "ZombieShield" && ws.data.response.stacks) {
                ws.network.sendRpc({name: "EquipItem", itemName: "ZombieShield", tier: data.response.tier})
            }
        }
        if (ws.data.name == "PartyApplicant") {
            ws.partyApplicant = ws.data.response;
            if (ws.partyApplicant.applicantUid == game.world.myUid) {
                ws.network.sendRpc({name: "PartyApplicantDecide", applicantUid: game.world.myUid, accepted: 1})
            }
        }
        if (ws.data.name == "ReceiveChatMessage") {
            ws.message = ws.data;
            if (ws.message.response.message == "!move" && ws.message.response.uid == game.world.myUid) {
                ws.mousemove = true;
            }
            if (ws.message.response.message == "!unmove" && ws.message.response.uid == game.world.myUid) {
                ws.mousemove = false;
            }
            if (ws.message.response.message == `#` && ws.message.response.uid == game.world.myUid) {
                let word = ws.message.response.message;
                let uid = '';
                for (let i = 0; i < 30; i++) {
                    if (Math.round(word[i] == 0 || word[i] == 1 || word[i] == 2 || word[i] == 3 || word[i] == 4 || word[i] == 5 || word[i] == 6 || word[i] == 7 || word[i] == 8 || word[i] == 9)) {
                        uid += word[i]
                    }
                    uid = Math.round(uid);
                    ws.playerUid = uid;
                }
            }
            if (ws.message.response.message == "!aim" && ws.message.response.uid == game.world.myUid) {
                window.move = true;
            }
            if (ws.message.response.message == "!unaim" && ws.message.response.uid == game.world.myUid) {
            }
            if (window.allSockets[ws.cloneId-1]) {
                window.allSockets[ws.cloneId-1] = ws;
            }
            if (ws.message.response.message == "c" && ws.message.response.uid == game.world.myUid) {
                isOnControl = true;
            }
            if (ws.message.response.message == `c${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                isOnControl = true;
            }
            if (ws.message.response.message == "u" && ws.message.response.uid == game.world.myUid) {
                isOnControl = false;
            }
            if (ws.message.response.message == `u${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                isOnControl = false;
            }
            if (ws.message.response.message == `!psk ${ws.uid}` && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${ws.psk.response.partyShareKey}`})
            }
            if (ws.message.response.message == `!useless ${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${ws.uid}`})
            }
            if (ws.message.response.message == "hi") {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: ` hi`})
            }
            if (ws.message.response.message == "!stats") {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${ws.players[ws.message.response.uid].name}, W: ${counter(ws.players[ws.message.response.uid].wood)}, S: ${counter(ws.players[ws.message.response.uid].stone)}, G: ${counter(ws.players[ws.message.response.uid].gold)}, T: ${Math.floor(ws.players[ws.message.response.uid].token)};`})
            }
            if (ws.message.response.message == "!s" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${ws.players[ws.uid].name}, W: ${counter(ws.players[ws.uid].wood)}, S: ${counter(ws.players[ws.uid].stone)}, G: ${counter(ws.players[ws.uid].gold)}, ID: ${ws.cloneId};`})
            }
            if (ws.message.response.message == "!h" && ws.message.response.uid == game.world.myUid) {
                ws.autohi = !ws.autohi;
                if (ws.autohi) {
                    window.autohiBot = true;
                } else {
                    window.autohiBot = false;
                }
            }
            if (ws.message.response.message == "!ahrc" && ws.message.response.uid == game.world.myUid) {
                ws.ahrc = true;
            }
            if (ws.message.response.message == `!ahrc ${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                ws.ahrc = true;
            }
            if (ws.message.response.message == "!!ahrc" && ws.message.response.uid == game.world.myUid) {
                ws.ahrc = false;
            }
            if (ws.message.response.message == `!!ahrc ${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                ws.ahrc = false;
            }
            if (ws.message.response.message == "!space" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({space: 0})
                ws.network.sendInput({space: 1})
            }
            if (ws.message.response.message == `${ws.cloneId}` + 's' && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({space: 0})
                ws.network.sendInput({space: 1})
            }
            if (ws.message.response.message == "!upgrade" && ws.message.response.uid == game.world.myUid) {
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "GoldMine") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                    setTimeout(() => {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }, 100);
                }
            }
            if (ws.message.response.message == `s${ws.cloneId}` && ws.message.response.uid == game.world.myUid) {
                ws.respawn = true;
            }
            if (ws.message.response.message == "+s" && ws.message.response.uid == game.world.myUid) {
                ws.respawn = true;
            }
            if (ws.message.response.message == `${ws.cloneId}` + 's' && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({space: 0})
                ws.network.sendInput({space: 1})
            }
            if (ws.message.response.message == "a" && ws.message.response.uid == game.world.myUid) {
                ws.respawn = false;
            }
            if (ws.message.response.message == `j${ws.cloneId}` ) {
                ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
            }
            if (ws.message.response.message == "!up" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "BuyItem", itemName: ws.buildings[i].uid})
            }
            if (ws.message.response.message == "!upStash" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded stash!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "GoldStash") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up1" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded wall(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "Wall") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up2" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded door(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "Door") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up3" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded slowtrap(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "SlowTrap") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up4" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded arrow(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "ArrowTower") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up5" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded cannon(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "CannonTower") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up6" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded Melee(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "MeeleTower") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up7" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded bomb(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "BombTower") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up8" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded mage(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "MagicTower") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up9" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded gold mine(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "GoldMine") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "!up0" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "Successfully upgraded harvester(s)!"});
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == "ResourceHarvester") {
                        ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid})
                    }
                }
            }
            if (ws.message.response.message == "a" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({left: 1});
                ws.network.sendInput({right: 0});
            }
            if (ws.message.response.message == "d" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({right: 1});
                ws.network.sendInput({left: 0});
            }
            if (ws.message.response.message == "w" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({up: 1});
                ws.network.sendInput({down: 0});
            }
            if (ws.message.response.message == "s" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({down: 1});
                ws.network.sendInput({up: 0});
            }
            if (ws.message.response.message == "f" && ws.message.response.uid == game.world.myUid) {
                ws.network.sendInput({left: 0});
                ws.network.sendInput({right: 0});
                ws.network.sendInput({down: 0});
                ws.network.sendInput({up: 0});
            }
        }
        if (ws.autohi) {
            if (ws.data.entities) {
let sus = setInterval(() => {
let msg = "";
let msg2 = "";
    for (let i = 0; i < 15; i++) {
        msg += `&#${Math.random() * 2500 + 100 | 0};`;
    }
    for (let i = 0; i < 15; i++) {
        msg2 += `&#${Math.random() * 2500 + 100 | 0};`;
    }
    ws.network.sendRpc({
        name: "SendChatMessage",
        message:  " FUCK YOU ",
        channel: "Local"
    });
})
            }
        }
        if (ws.data.name == "Leaderboard") {
            for (let i in ws.data.response) {
                ws.lb[ws.data.response[i].rank + 1] = ws.data.response[i];
            }
            if (ws.ahrc) {
                for(let uid in ws.buildings) {
                    let obj = ws.buildings[uid];
                    ws.network.sendRpc({name: "CollectHarvester",uid: obj.uid});
                    if(obj.type == "Harvester" && obj.tier == 1) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 20/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 2) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 30/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 3) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 35/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 4) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 50/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 5) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 60/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 6) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 70/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 7) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 120/2});
                    }
                    if(obj.type == "Harvester" && obj.tier == 8) {
                        ws.network.sendRpc({name: "AddDepositToHarvester",uid: obj.uid,deposit: 150/2});
                    }
                }
            }
        }
        if (ws.respawn) {
            ws.network.sendInput({respawn: 1});
        }
        if (ws.space) {
            ws.network.sendInput({space: 0})
            ws.network.sendInput({space: 1})
        }
        if (ws.data.name == "LocalBuilding") {
            for (let i in ws.data.response) {
                ws.buildings[ws.data.response[i].uid] = ws.data.response[i];
                if (ws.buildings[ws.data.response[i].uid].dead) {
                    delete ws.buildings[ws.data.response[i].uid];
                }
            }
        }
        if (ws.data.name == "AddParty") {
            if (ws.addparties) {
                ws.parties[ws.data.response.partyId] = ws.data.response;
            }
        }
        if (ws.data.name == "RemoveParty") {
            if (ws.addparties) {
                if (ws.parties[ws.data.response.partyId].partyId) {
                    delete ws.parties[ws.data.response.partyId];
                }
            }
        }
        if (ws.data.name == "PartyShareKey") {
            ws.psk = ws.data;
            if (window.FKey && cloneTimeout) {
                if (window.playerIds.id2.psk.response.partyShareKey !== window.playerIds.id1.psk.response.partyShareKey) {
                    game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.playerIds.id2.psk.response.partyShareKey});
                    setTimeout(() => {
                        game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.playerIds.id2.psk.response.partyShareKey});
                    }, 500);
                    setTimeout(() => {
                        game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.playerIds.id2.psk.response.partyShareKey});
                    }, 1000);
                }
            }
        }
        if (ws.data.name == "Dead") {
            if (cloneTimeout) {
                game.network.sendInput({respawn: 1});
            }
        }
        if(window.mousemove) {
            let wsPlayer = ws.data.entities[ws.uid];
            let myPlayer = game.ui.playerTick;
            let mouseToWorld = game.renderer.screenToWorld(game.ui.mousePosition.x,game.ui.mousePosition.y);
            //
            //
            if (ws.data.entities) {
                if (ws.data.entities[ws.uid].name) {
                    wsPlayer = ws.data.entities[ws.uid];
                }
            }
            //
            //
            if(wsPlayer){
                if(wsPlayer.position){
                    ws.network.sendInput({mouseMoved: game.inputPacketCreator.screenToYaw((-wsPlayer.position.x + mouseToWorld.x)*100, (-wsPlayer.position.y + mouseToWorld.y)*100)})
                    if (1 == 1) {
                        console.log(wsPlayer.position);
                        if (wsPlayer.position.y - mouseToWorld.y > 10) {
                            ws.network.sendInput({
                                down: 0
                            })
                        } else {
                            ws.network.sendInput({
                                down: 1
                            })
                        }
                        if (-wsPlayer.position.y + mouseToWorld.y > 10) {
                            ws.network.sendInput({
                                up: 0
                            })
                        } else {
                            ws.network.sendInput({
                                up: 1
                            })
                        }
                        if (-wsPlayer.position.x + mouseToWorld.x > 10) {
                            ws.network.sendInput({
                                left: 0
                            })
                        } else {
                            ws.network.sendInput({
                                left: 1
                            })
                        }
                        if (wsPlayer.position.x - mouseToWorld.x > 10) {
                            ws.network.sendInput({
                                right: 0
                            })
                        } else {
                            ws.network.sendInput({
                                right: 1
                            })
                        }
                    }
                }
            }

        }


        if (ws.data.entities) {
            if (ws.letbotsjoin) {
                if(ws.myPlayer.gold > 100) {
                    ws.network.sendRpc({name: 'LeaveParty'});
                } else {
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                }
            }
        }
        if (ws.data.entities) {
            if (ws.letbotsjoin2) {
                if(ws.myPlayer.gold > 500) {
                    ws.network.sendRpc({name: 'LeaveParty'});
                } else {
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                }
            }
        }
        if (ws.data.entities) {
            if (ws.letbotsjoin3) {
                if(ws.myPlayer.gold > 8500) {
                    ws.network.sendRpc({name: 'LeaveParty'});
                } else {
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                }
            }
        }
        if (ws.autoaim) {
            let wsPlayer = ws.data.entities[ws.uid];
            let myPlayer = game.ui.playerTick;
            let mouseToWorld = game.renderer.screenToWorld(game.ui.mousePosition.x,game.ui.mousePosition.y);
            //
            //
            if (ws.data.entities) {
                if (ws.data.entities[ws.uid].name) {
                    wsPlayer = ws.data.entities[ws.uid];
                }
            }
            //
            //
            if(wsPlayer){
                if(wsPlayer.position){
                    ws.network.sendInput({mouseMoved: game.inputPacketCreator.screenToYaw((-wsPlayer.position.x + mouseToWorld.x)*100, (-wsPlayer.position.y + mouseToWorld.y)*100)})
                    if (1 == 1) {
                        console.log(wsPlayer.position);
                        if (wsPlayer.position.y - mouseToWorld.y > 10) {
                            ws.network.sendInput({
                                down: 0
                            })
                        } else {
                            ws.network.sendInput({
                                down: 0
                            })
                        }
                        if (-wsPlayer.position.y + mouseToWorld.y > 10) {
                            ws.network.sendInput({
                                up: 0
                            })
                        } else {
                            ws.network.sendInput({
                                up: 0
                            })
                        }
                        if (-wsPlayer.position.x + mouseToWorld.x > 10) {
                            ws.network.sendInput({
                                left: 0
                            })
                        } else {
                            ws.network.sendInput({
                                left: 0
                            })
                        }
                        if (wsPlayer.position.x - mouseToWorld.x > 10) {
                            ws.network.sendInput({
                                right: 0
                            })
                        } else {
                            ws.network.sendInput({
                                right: 0
                            })
                        }
                    }
                }
                if (ws.letbotsjoin) {
                    if(ws.myPlayer.gold > 100) {
                        ws.network.sendRpc({name: 'LeaveParty'});
                    } else {
                        ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                    }
                }
            }
        };
        if (window.shouldStartScript) {
            if (getbosswaves() && getIsZombiesActive() && game.ui.playerPartyMembers.length !== 1) {
                if (inull) {
                    inull = false;
                    document.getElementsByClassName("1i5")[0].click();
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { inull = true; }, 250);
                }
            }
            if (ws.dayTicker < -18 && ws.dayTicker >= -23 && !ws.isDay && getIsZombiesActive() && game.ui.playerPartyMembers.length !== 1) {
                if (i1) {
                    i1 = false;
                    document.getElementsByClassName("1i5")[0].click();
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { i1 = true; }, 250);
                }
            }
            if (!getIsZombiesActive() && game.ui.playerPartyMembers.length !== 4 && !getactiveCommingbosswaves()) {
                if (i2) {
                    i2 = false;
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                    setTimeout(() => { i2 = true; }, 250);
                }
            }
            if (ws.dayTicker > 18 && ws.dayTicker <= 23 && getIsZombiesActive() && ws.isDay && game.ui.playerPartyMembers.length !== 4) {
                if (i3) {
                    i3 = false;
                    document.getElementsByClassName("1i5")[0].click();
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { i3 = true; }, 250)
                }
            }
        }
        if (ws.data.opcode == 0) {
            if (heal) {
                if (ws.myPlayer) {
                    let playerHealth = (ws.myPlayer.health/ws.myPlayer.maxHealth) * 100;
                    if (playerHealth <= 10) {
                        ws.network.sendRpc({name: "EquipItem", itemName: "HealthPotion", tier: 1})
                    }
                }
                if (ws.myPet) {
                    let petHealth = (ws.myPet.health/ws.myPet.maxHealth) * 100;
                    if (petHealth <= 10) {
                        if (!ws.shouldHealPet) {
                            ws.shouldHealPet = true;
                            setTimeout(() => {ws.shouldHealPet = false;}, 300)
                            ws.network.sendRpc({name: "BuyItem", itemName: "PetHealthPotion", tier: 1})
                            ws.network.sendRpc({name: "EquipItem", itemName: "PetHealthPotion", tier: 1})
                        }
                    }
                }
            }
            ws.network.sendRpc({name: "BuyItem", itemName: "HealthPotion", tier: 1})
        }
        function wsFixShield() {
            if (ws.currentGame.ui.playerTick.zombieShieldHealth < 85000) {
                ws.currentGame.network.sendRpc({name: "EquipItem", itemName: "ZombieShield", tier:  Game.currentGame.ui.inventory.ZombieShield.tier});
            }
        }
        if (ws.activebow) {
            ws.network.sendInput({space: 0})
            ws.network.sendInput({space: 1})
        }
        switch(ws.data.opcode) {
            case 4:
                ws.onEnterWorld(ws.data);
                break;
        }
    }
}

var LKeyWithTimeouts = function() {
    window.FKey = !window.FKey;
    cloneTimeout = false;
    window.playerIds = {
        id1: allSockets[window.socketId1 - 1],
        id2: allSockets[window.socketId2 - 1]
    }
    if (window.FKey) {
        game.network.sendRpc({name: "KickParty", uid: window.playerIds.id1.uid})
        game.network.sendRpc({name: "KickParty", uid: window.playerIds.id2.uid})
        window.FKeyOn = setInterval(() => {
            cloneTimeout = true;
            window.playerIds.id2.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.playerIds.id1.psk.response.partyShareKey});
            setTimeout(() => {
                window.playerIds.id1.network.sendRpc({name: "KickParty", uid: window.playerIds.id2.uid});
                setTimeout(() => {
                    window.playerIds.id2.network.sendRpc({name: "KickParty", uid: game.world.myUid});
                }, 7925);
            }, 75);
        }, 16000);
    } else {
        clearInterval(window.FKeyOn);
        window.FKeyOn = null;
    }
}
var getIsZombiesActive = function () {
    let isZombiesActive = false;
    for (let i in game.world.entities) {
        if (game.world.entities[i].fromTick.model !== "NeutralTier1") {
            if (game.world.entities[i].fromTick.entityClass == "Npc") {
                isZombiesActive = true;
            }
        }
    }
    return isZombiesActive;
};

var getactiveCommingbosswaves = function () {
    let activeCommingbosswave = false;
    let aftercommingbosswaves = [48, 56, 64, 72, 80, 88, 96, 104, 120];
    for (let i = 0; i < aftercommingbosswaves.length; i++) {
        if (game.ui.playerTick.wave == aftercommingbosswaves[i]) {
            activeCommingbosswave = true;
        }
    }
    return activeCommingbosswave;
};

var getbosswaves = function () {
    let activebosswave = false;
    let allbosswaves = [9, 17, 25, 33, 41, 49, 57, 65, 73, 81, 89, 97, 105, 121];
    for (let i = 0; i < allbosswaves.length; i++) {
        if (game.ui.playerTick.wave == allbosswaves[i]) {
            activebosswave = true;
        }
    }
    return activebosswave;
};


var inull = true;
var i1 = true;
var i2 = true;
var i3 = true;

document.addEventListener("keydown", (e) => {
    if (document.activeElement.tagName.toLowerCase() == "input" || document.activeElement.tagName.toLowerCase() == "textarea") {
        Main1Keys = false;
        Main2Keys = false;
        Main3Keys = false;
    } else {
        Main1Keys = true;
        Main2Keys = true;
        Main3Keys = true;
    }
    if (Main1Keys) {
        switch (e.code) {
            case "Insert":
                document.getElementsByClassName("1i")[0].click();
                break;
            case "KeyX":
                document.getElementsByClassName("8i")[0].click();
                break;
            case "KeyZ":
                document.getElementsByClassName("10i")[0].click();
                break;
            case "KeyR":
                healPlayer();
                break;
            case "KeyG":
                document.getElementsByClassName("7i")[0].click();
                break;

        }
    }
    if (Main2Keys) {
        switch (e.code) {
            case "KeyK":
                document.getElementsByClassName("10i5")[0].click();
                break;
            case "Key/":
                document.getElementsByClassName("6i5")[0].click();
                break;
            case "KeyM":
                game.network.sendRpc({
                    "name": "BuyItem",
                    "itemName": "PetRevive",
                    "tier": 1
                })
                game.network.sendRpc({
                    "name": "EquipItem",
                    "itemName": "PetRevive",
                    "tier": 1
                })
                break;
        }
    }
    if (Main3Keys) {
        switch (e.code) {
            case "KeyL":
                document.getElementsByClassName("0i2")[0].click();
                break;
            case "KeyV":
                document.getElementsByClassName("1i2")[0].click();
                break;
            case "KeyT":
                document.getElementsByClassName("10i2")[0].click();
                break;
            case "KeyU":
                document.getElementsByClassName("22i2")[0].click();
                break;
                LKeyWithTimeouts();
                break;
            case "KeyI":
                game.network.sendRpc({name: "LeaveParty"})
                break;
        }
    }
});

function FixShield() {
    if (Game.currentGame.ui.playerTick.zombieShieldHealth < 85000) {
        Game.currentGame.network.sendRpc({name: "EquipItem", itemName: "ZombieShield", tier:  Game.currentGame.ui.inventory.ZombieShield.tier});
    }
}
Game.currentGame.network.addRpcHandler("DayCycle", FixShield);
window.sck = (hostname, cb) => {
    const ws = new WebSocket(`ws://${hostname}:80`);
    ws.binaryType = "arraybuffer";
    ws.onopen = () => {
        ws.network = new game.networkType();
        ws.network.sendRpc = (e) => { ws.send(ws.network.codec.encode(9, e)) };
        ws.network.sendInput = (e) => { ws.send(ws.network.codec.encode(3, e)) };
        ws.onmessage = msg => {
            const data = ws.network.codec.decode(msg.data)
            switch (data.opcode) {
                case 4:
                    ws.send(ws.network.codec.encode(3, { up: 1 }));
                    ws.send(ws.network.codec.encode(3, { left: 1 }));
                    ws.uid = data.uid;
                    ws.position = { x: null, y: null };
                    window.findTC[ws.name] = ws;
                    cb(ws);
                    break;
                case 5:
                    game.network.connectionOptions.hostname = hostname;
                    game.network.connected = true;
                    var dn = `${Math.floor(Math.random() * 9999)}`;
                    ws.send(ws.network.codec.encode(4, { displayName: dn, extra: data.extra }));
                    ws.name = dn;
                    window.findTC[dn] = ws;
                    break;
            };
            if(data.entities) {
                if(data.entities[ws.uid] && data.entities[ws.uid] !== true) {
                    if(data.entities[ws.uid].position) {
                        let pos = { x: data.entities[ws.uid].position.x || ws.position.x, y: data.entities[ws.uid].position.y || ws.position.y };
                        ws.position = pos;
                        window.findTC[ws.name].position = pos;
                    };
                };
            };
        };
    };
};

window.findTC = () => {
    let v1 = find_1("ƬƇ")[1];
    let v2 = find_1("TC")[1];
    let v3 = find_1("TƇ")[1];
    let v4 = find_1("ƬC")[1];
    let all = [...v1, ...v2, ...v3, ...v4];
    for(let item in all) {
        all[item].server = game.options.servers[all[item].server];
        delete all[item].selected;
        // sendMessage(`\`\`\`JSON\n${JSON.stringify(all[item], null, 2)}\`\`\``);
        window.sck(all[item].server.hostname, e => {
            all[item].ws = e;
            console.log("done");
            window.coverMap(e);
            e.addEventListener('message', msg => {
                if(all[item].found) { return };
                const data = e.network.codec.decode(msg.data);
                if(data.entities) {
                    for(let i in data.entities) {
                        if(data.entities[i].name) {
                            if(data.entities[i].name == all[item].name) {
                                if(data.entities[i].position) {
                                    alert(JSON.stringify(data.entities[i].position));
                                    all[item].found = true;
                                    clearInterval(all[item].mvInterval);
                                };
                            };
                        };
                    };
                };
            });
        });
    };
    return all;
};

var changeHeight = document.createElement("style")
changeHeight.type = "text/css"
document.body.appendChild(changeHeight)
var widget = `
<h1 style="text-transform: none;">Server Scanner</h1>
<p><i class="fa fa-info-circle"></i> Click on the <strong>Scan</strong> button to show the data of the selected server here.</p>
<div id="ssrs">
</div>
`;
let hil = document.getElementsByClassName("hud-intro-left")[0];
hil.innerHTML = widget;
hil.style.marginTop = "30px";

window.copyText = t => {
    const elem = document.createElement('textarea');
    elem.value = t;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    new Noty({
        type: 'success',
        text: `Copied to clipboard`,
        timeout: 2000
    }).show();
};

window.coverMap = ws => {
    let max = 23973;
    let min = 27;
    let time = 0;

    ws.network.sendInput({ up: 0, down: 0, left: 0, right: 0 });

    let _moveTowards = pos => {
        if (ws.position.y-pos.y > 100 || Math.sqrt(Math.pow((ws.position.y-pos.y), 2) + Math.pow((ws.position.x-pos.x), 2)) < 100) {
            ws.network.sendInput({down: 0})
        } else {
            ws.network.sendInput({down: 1})
        }
        if (-ws.position.y+pos.y > 100 || Math.sqrt(Math.pow((ws.position.y-pos.y), 2) + Math.pow((ws.position.x-pos.x), 2)) < 100) {
            ws.network.sendInput({up: 0})
        } else {
            ws.network.sendInput({up: 1})
        }
        if (-ws.position.x+pos.x > 100 || Math.sqrt(Math.pow((ws.position.y-pos.y), 2) + Math.pow((ws.position.x-pos.x), 2)) < 100) {
            ws.network.sendInput({left: 0})
        } else {
            ws.network.sendInput({left: 1})
        }
        if (ws.position.x-pos.x > 100 || Math.sqrt(Math.pow((ws.position.y-pos.y), 2) + Math.pow((ws.position.x-pos.x), 2)) < 100) {
            ws.network.sendInput({right: 0})
        } else {
            ws.network.sendInput({right: 1})
        }
    };

    let mv = (x, y, cb) => {
        ws.mvInterval = setInterval(() => {
            let pos = ws.position;
            if(((pos.x + 144) > x) && ((pos.y + 144) > y) && ((pos.x - 144) < x) && ((pos.y - 144) < y)) { cb(pos.x, pos.y); clearInterval(interval); };
            time += 250;
            _moveTowards({ x: x, y: y });
        }, 250);
    };
    let start = (x, y) => {
        mv(max, y + 1200, end);
    };
    let end = (x, y) => {
        let pos = ws.position;
        if(((pos.y + 144) > max) && ((pos.x + 144) > max) && ((pos.x - 144) < max) && ((pos.y - 144) < max)) {
            return;
        };
        mv(min, y + 1200, start);
    };
    mv(min, min, start);
};

document.getElementsByClassName("hud-intro-form")[0].insertAdjacentHTML("beforeend", `<button class="btn btn-blue hud-intro-play" style="border: 3px solid #66e8ff;" onclick="window.ssfi();">Scan</button>`);

window.ssfi = () => {
    let ssrs = document.getElementById("ssrs");
    ssrs.innerHTML = `<strong>Loading...</strong>`;
    let selected = document.getElementsByClassName("hud-intro-server")[0].value;
    let server = game.options.servers[selected];
    let hostname = server.hostname;
    let url = `ws://${hostname}:80/`;
    game.network.connectionOptions = { hostname: hostname };
    game.network.connected = true;
    let ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    const loadLbPacket = () => {
        for (let i = 0; i < 30; i++) ws.send(new Uint8Array([3, 17, 123, 34, 117, 112, 34, 58, 49, 44, 34, 100, 111, 119, 110, 34, 58, 48, 125]));
        ws.send(new Uint8Array([7, 0]));
        ws.send(new Uint8Array([9,6,0,0,0,126,8,0,0,108,27,0,0,146,23,0,0,82,23,0,0,8,91,11,0,8,91,11,0,0,0,0,0,32,78,0,0,76,79,0,0,172,38,0,0,120,155,0,0,166,39,0,0,140,35,0,0,36,44,0,0,213,37,0,0,100,0,0,0,120,55,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,6,0,0]));
    };
    ws.onopen = (data) => {
        ws.network = new game.networkType();
        ws.network.sendPacket = (e, t) => {
            ws.send(ws.network.codec.encode(e, t));
        };
        ws.onRpc = (data) => {
            if(data.name === "SetPartyList") {
                ws.parties = data.response;
            };
            if(data.name === "Leaderboard") {
                if(ws.b4) { window.appSsrs({ population: ws.pop, leaderboard: data.response, parties: ws.parties }); ws.close(); return; };
                loadLbPacket();
                ws.b4 = true;
            };
        };
        ws.onmessage = msg => {
            let data = ws.network.codec.decode(msg.data);
            switch(data.opcode) {
                case 5:
                    ws.network.sendPacket(4, { displayName: `not a scanner-${Math.floor(Math.random() * 9999)}`, extra: data.extra });
                    break;
                case 4:
                    ws.network.sendPacket(3, { left: 1, up: 1 });
                    ws.pop = data.players - 1;
                    break;
                case 9:
                    ws.onRpc(data);
                    break;
            };
        };
    };
};

window.appSsrs = res => {

    console.log(res);

    let ssrs = document.getElementById("ssrs");
    ssrs.style.overflow = "scroll";
    ssrs.style.height = "269px";
    ssrs.innerHTML = `
    <p>Population: ${res.population}</p>
    <h1>Leaderboard</h1>
    <hr />
    <div>
    ${res.leaderboard.map(lb => {
        return `
        <p>Rank: #${lb.rank + 1},
         ${lb.name},
        Wave: ${lb.wave.toLocaleString("en")},
        `;
    }).join("<hr />")}
    </div>
    <hr />
    <h1>Parties</h1>
    ${res.parties.map(p => {
        return `
        <p>Name: ${p.partyName},
        ID: ${p.partyId},
        Members: ${p.memberCount},
        Public: ${p.isOpen}</p>
        `;
    }).join("<hr />")}
    <div>
    </div>
    `;
};
document.getElementsByClassName('hud-respawn-social')[0].innerHTML = `<center><h3> </h3>`;


//invisisble bow
addEventListener('keydown', function(e){ // when key is pressed
    if(e.key == "="){ // If the key being held down is '='
Game.currentGame.network.sendRpc({ name: "BuyItem", itemName: "Crossbow", tier: 1});
Game.currentGame.network.sendRpc({ name: "EquipItem", itemName: "Crossbow", tier: 1});
console.log('invisable')
    }
})

addEventListener('keydown', function(f){
    if(f.key == "/"){
        game.renderer.ground.setVisible(false);
    }
})

addEventListener('keydown', function(s){
    if(s.key == "."){
        game.renderer.ground.setVisible(true);
    }
})

//My shit names and intro XD

const entirePop = document.getElementsByClassName("hud-intro-wrapper")[0].children[1];
const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(request.responseText);
        entirePop.innerHTML = `CURRENT NUMBER OF PEOPLE: ${data.players} / ${(data.players / data.capacity * 100).toFixed(2)}%`;
        let servers = ["US East", "US West", "Europe", "Asia", "Australia", "South America"];
        for (let i in servers) {
            game.ui.components.Intro.serverElem.children[i].setAttribute("label", `${servers[i]}: Population: ${data.regions[servers[i]].players}`);
        }
    }
};
request.open("GET", "http://zombs.io/capacity", true);
request.send();
// INTRO STYLE CODES INNERHTML
var IntroGuide = '';

IntroGuide += "<center><h3><hr />Main X NAME SELECT<hr /></h3>";
IntroGuide += "<center><h3>Glashpid NAMES</h3>";
IntroGuide += "<button class=\"btn btn-blue\" style=\"width: 100%;\" onclick=\"name1();\">GLASPHID</button>";
IntroGuide += "<br><br>";
IntroGuide += "<button class=\"btn btn-blue\" style=\"width: 100%;\" onclick=\"name2();\">WR NAME</button>";
IntroGuide += "<br><br>";
IntroGuide += "<button class=\"btn btn-blue\" style=\"width: 100%;\" onclick=\"name3();\">RAIDER Name</button>";
IntroGuide += "<br><br>"
document.getElementsByClassName('hud-intro-guide')[0].innerHTML = IntroGuide;

// LONG NINKNAMES
window.name1 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'G̷l̷a̷s̷p̷h̷i̷d̷';
};
window.name2 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'Glasphid, technical, ARTEMIS';
};
window.name3 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'R|RAIDER|ʁ';
};



// Zoom with mouse

let dimension = 1;

    const onWindowResize = () => {
        const renderer = Game.currentGame.renderer;
        let canvasWidth = window.innerWidth * window.devicePixelRatio;
        let canvasHeight = window.innerHeight * window.devicePixelRatio;
        let ratio = Math.max(canvasWidth / (1920 * dimension), canvasHeight / (1080 * dimension));
        renderer.scale = ratio;
        renderer.entities.setScale(ratio);
        renderer.ui.setScale(ratio);
        renderer.renderer.resize(canvasWidth, canvasHeight);
        renderer.viewport.width = renderer.renderer.width / renderer.scale + 4 * renderer.viewportPadding;
        renderer.viewport.height = renderer.renderer.height / renderer.scale + 4 * renderer.viewportPadding;
    }
    onWindowResize();
    window.onresize = onWindowResize;
    window.onwheel = e => {
        if (e.deltaY > 0) {
            dimension += 0.08;
        } else if (e.deltaY < 0) {
            dimension -= 0.08;
        }
        onWindowResize();
    }

    window.zoom = val => {
        dimension = val;
        upd();
    };


//Overhead rss from ignition

let getRss = false;
let allowed1 = true;

function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}

game.network.addEntityUpdateHandler(() => {
    if (getRss) {
        !allowed1 && (allowed1 = true);
    }
    if (getRss || allowed1) {
        for (let i in game.world.entities) {
            if (game.world.entities[i].fromTick.name) {
                let player = game.world.entities[i];
                let wood_1 = counter(player.targetTick.wood);
                let stone_1 = counter(player.targetTick.stone);
                let gold_1 = counter(player.targetTick.gold);
                let token_1 = counter(player.targetTick.token);
                let px_1 = counter(player.targetTick.position.x);
                let py_1 = counter(player.targetTick.position.y);
                if (getRss && !player.targetTick.oldName) {
                    player.targetTick.oldName = player.targetTick.name;
                    player.targetTick.oldWood = wood_1;
                    player.targetTick.oldStone = stone_1;
                    player.targetTick.oldGold = gold_1;
                    player.targetTick.oldToken = token_1;
                    player.targetTick.oldPX = px_1;
                    player.targetTick.oldPY = py_1;
                    player.targetTick.info = `${player.targetTick.oldName}, UID: ${player.targetTick.uid}, W: ${wood_1}, S: ${stone_1}, G: ${gold_1}, T: ${token_1};\nx: ${Math.round(player.targetTick.position.x)}, y: ${Math.round(player.targetTick.position.y)}, partyId: ${Math.round(player.targetTick.partyId)};
score: ${player.targetTick.score}, timeDead: ${msToTime(player.targetTick.timeDead)};

`;
                    player.targetTick.name = game.world.entities[i].targetTick.info;
                }
                if (!getRss && player.targetTick.oldName) {
                    player.targetTick.info = player.targetTick.oldName;
                    player.targetTick.name = game.world.entities[i].targetTick.info;
                    player.targetTick.oldName = null;
                }
                if (getRss) {
                    if (player.targetTick.oldGold !== gold_1 || player.targetTick.oldWood !== wood_1 || player.targetTick.oldStone !== stone_1 || player.targetTick.oldToken !== token_1 || player.targetTick.oldPX !== px_1 || player.targetTick.oldPY !== py_1) {
                        player.targetTick.oldWood = wood_1;
                        player.targetTick.oldStone = stone_1;
                        player.targetTick.oldGold = gold_1;
                        player.targetTick.oldToken = token_1;
                        player.targetTick.oldPX = px_1;
                        player.targetTick.oldPY = py_1;
                        player.targetTick.info = `${player.targetTick.oldName}, UID: ${player.targetTick.uid}, W: ${wood_1}, S: ${stone_1}, G: ${gold_1}, T: ${token_1};\nx: ${Math.round(player.targetTick.position.x)}, y: ${Math.round(player.targetTick.position.y)}, partyId: ${Math.round(player.targetTick.partyId)};
score: ${player.targetTick.score}, timeDead: ${msToTime(player.targetTick.timeDead)};

`;
                        player.targetTick.name = game.world.entities[i].targetTick.info;
                    }
                }
            }
        }
    }
    if (!getRss) {
        allowed1 = false;
    }
})

function counter(e = 0) {
    if (e <= -0.99949999999999999e12) {
        return Math.round(e/-1e11)/-10 + "T";
    }
    if (e <= -0.99949999999999999e9) {
        return Math.round(e/-1e8)/-10 + "B";
    }
    if (e <= -0.99949999999999999e6) {
        return Math.round(e/-1e5)/-10 + "M";
    }
    if (e <= -0.99949999999999999e3) {
        return Math.round(e/-1e2)/-10 + "K";
    }
    if (e <= 0.99949999999999999e3) {
        return Math.round(e) + "";
    }
    if (e <= 0.99949999999999999e6) {
        return Math.round(e/1e2)/10 + "K";
    }
    if (e <= 0.99949999999999999e9) {
        return Math.round(e/1e5)/10 + "M";
    }
    if (e <= 0.99949999999999999e12) {
        return Math.round(e/1e8)/10 + "B";
    }
    if (e <= 0.99949999999999999e15) {
        return Math.round(e/1e11)/10 + "T";
    }
}

/*** EH ***/
document.addEventListener("keydown", e => {
    if(document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
        if (e.keyCode == 189) { // key -
            getRss = !getRss;
            new Noty({
                type: 'success',
                text: `RSS Above Head toggle is now ${getRss}`,
                timeout: 2000
            }).show();
        }
        if (e.key.toLowerCase() == "f" && e.shiftKey) {
            window.petheal = !window.petheal;
            new Noty({
                type: 'success',
                text: `Pet Heal toggle is now ${window.petheal}`,
                timeout: 2000
            }).show();
        };
        if (e.key.toLowerCase() == "p" && e.shiftKey) {
            if(window.follow.toggle) {
                window.follow = { toggle: false };
            } else {
                window.follow = { toggle: true, np: true };
            };
            window.lm = window.follow.toggle ? "Nearest Player" : "Off";
            dispatchEvent(new CustomEvent("efToggleByKeybind"));
            new Noty({
                type: 'success',
                text: `Nearest Player Follower toggle is now ${window.follow.toggle}`,
                timeout: 2000
            }).show();
        };
        if(e.key === "#") {
            window.x3builds = !window.x3builds;
            new Noty({
                type: 'success',
                text: `3x3 Walls toggle is now ${window.x3builds}`,
                timeout: 2000
            }).show();
        };
        if(e.key === "%") {
            window.x5builds = !window.x5builds;
            new Noty({
                type: 'success',
                text: `5x5 Walls toggle is now ${window.x5builds}`,
                timeout: 2000
            }).show();
        };
        if(e.key === "&") {
            window.x7builds = !window.x7builds;
            new Noty({
                type: 'success',
                text: `7x7 Walls toggle is now ${window.x7builds}`,
                timeout: 2000
            }).show();
        };
    };
});
document.addEventListener('keyup', function(e) {
    if (e.key.toLowerCase() == "p" && e.shiftKey) {
        document.getElementsByClassName("hud-menu-party")[0].style.display = "none";
    };
});

// menu to see commands.

(function() {
    let styles = document.createTextNode(`

  .hud-menu-scripts {
  display: none;
  position: fixed;
  top: 50%;
  left: 48%;
  width: 600px;
  height: 500px;
  margin: -300px 0 0 -320px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #eee;
  border-radius: 4px;
  z-index: 15;
  overflow-y: auto;
  background: url('https://i.pinimg.com/originals/dd/4d/60/dd4d60009fe992f067e9e0371e991115.jpg');
  opacity: 0.75;
  background-size: cover;
  }
  .hud-menu-icons .hud-menu-icon[data-type=Scripts]::before {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgkRpYCsUz6P-mLqPq4DAG8HR72P-BEe8-w&usqp=CAU');
  background-size: 30px
`);

    let css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(styles);
    document.body.appendChild(css);
    let menu_html = "<div class='hud-menu-scripts'> <h3>Hileler!</h3>   </div>"
    document.body.insertAdjacentHTML("afterbegin", menu_html);
    let menu_scripts = document.getElementsByClassName('hud-menu-scripts')[0];
    var allItems = document.getElementsByClassName("myCustomIcon");
        var menus = document.getElementsByClassName("hud-menu");

        var newMenuItem = document.createElement("div");
        newMenuItem.classList.add("hud-menu-icon");
        newMenuItem.classList.add("myCustomIcon");
        newMenuItem.setAttribute("data-type", "Scripts");
        newMenuItem.innerHTML = "Scripts";
        document.getElementById("hud-menu-icons").appendChild(newMenuItem);

        var AllItems = document.getElementsByClassName("myCustomIcon");
        for(var item = 0; item < allItems.length; item++) {
            allItems[item].addEventListener("mouseenter", onMenuItemEnter, false);
            allItems[item].addEventListener("mouseleave", onMenuItemLeave, false);
        }

        function onMenuItemEnter() {
            var theTooltip = document.createElement("div");
            theTooltip.classList.add("hud-tooltip");
            theTooltip.classList.add("hud-tooltip-left");
            theTooltip.id = "hud-tooltip";
            theTooltip.innerHTML = `<div class="hud-tooltip-menu-icon">
                                       <h4>Main X instructions</h4>
                                    </div>`;

            this.appendChild(theTooltip)

            theTooltip.style.top = "-10px";
        theTooltip.style.bottom = 0
        theTooltip.style.left = "-96.4px";
        theTooltip.style.right = 0;
                theTooltip.style.width = "100px";
                theTooltip.style.fontSize = "16.7px";
                theTooltip.style.fontWeight = "bold";
        theTooltip.style.position = "relative";
                theTooltip.style.textIndent = 0;
        }

        function onMenuItemLeave() {
            this.removeChild(document.getElementById("hud-tooltip"));
        }

    document.getElementsByClassName('hud-menu-icon')[3].addEventListener("click", function(e) {
        if(menu_scripts.style.display == "none") {
            menu_scripts.style.display = "block";
            for(var i = 0; i < menus.length; i++) {
                menus[i].style.display = "none";
            }
        } else {
            menu_scripts.style.display = "none";
        }
    });
    let icons = document.getElementsByClassName("hud-menu-icon");
    let menu_icons = [
        icons[0],
        icons[1],
        icons[2]
    ]
    menu_icons.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            if(menu_scripts.style.display == "block") {
                menu_scripts.style.display = "none";
            }
        })
    })
    window.addEventListener('mouseup', function(event) {
        if(event.target !== menu_scripts && event.target.parentNode !== menu_scripts) {
            menu_scripts.style.display = 'none';
        }
    })
})();

var scr = '';
scr += "<h3 style=text-align:center>Main X Instructions</h3>"
scr += "<p style=font-size:16px>•+s lets you autorespawn alts</p>"
scr += "<p style=font-size:16px>•-s disables alts autorespawn</p>"
scr += "<p style=font-size:16px>•Press H to kick all alts from party </p>"
scr += "<p style=font-size:16px>•Press J to let alts join back to party</p>"
scr += "<p style=font-size:16px>•!aim lets all alts aim at you. To disable that go to Main x and press aim button again.</p>"
scr += "<p style=font-size:16px>•!space to alts autospace, s(alt#) respawn that one alt </p>"
scr += "<p style=font-size:16px>•When Someone types there is a block button and you can block them.</p>"
scr += "<p style=font-size:16px>•Press I to leave party, Press ] to join alt</p>"
scr += "<p style=font-size:16px>•press z to autobow, - to get overhead rss, and = to get inv bow. </p>"
scr += "<p style=font-size:16px>•!dc to dissconnect yourself, !dc party to dc your party only if you are leader. </p>"
scr += "<p style=font-size:16px>•press v to stop mouse control alts.</p>"
scr += "<p style=font-size:16px>•do not press aito button because it will crash you.</p>"
scr += "<p style=font-size:16px>•4p trick button does not work works. </p>"
scr += "<p style=font-size:16px>•AutoRebuilder button works. Save towers and then press autobuild saved towers. </p>"
scr += "<p style=font-size:16px>•?dze to disable zombie entities. ??dze to undisable it. </p>"
scr += "<p style=font-size:16px>•?dpe to disable projectile entities. ??dpe to undisable it. </p>"
scr += "<p style=font-size:16px>•?dte to disable tower entities. ??dte to undisable it. </p>"
scr += "<p style=font-size:16px>•type j(AltId) no space to let a certain alt to join back. </p>"
document.getElementsByClassName("hud-menu-scripts")[0].innerHTML = scr


//Chat blocker

let blockedNames = [];

window.blockPlayer = name => {
    game.ui.components.PopupOverlay.showConfirmation(`Are you sure you want to block ${name}?`, 3500, () => {
        blockedNames.push(name);
        for(let msg of Array.from(document.getElementsByClassName("hud-chat-message"))) {
            if(msg.childNodes[2].innerText === name) {
                let bl = msg.childNodes[0];
                bl.innerHTML = "Unblock";
                bl.style.color = "blue";
                bl.onclick = () => {
                    window.unblockPlayer(name);
                };
            };
        };
    }, () => {});
};

window.unblockPlayer = name => {
    blockedNames.splice(blockedNames.indexOf(name), 1);
    for(let msg of Array.from(document.getElementsByClassName("hud-chat-message"))) {
        if(msg.childNodes[2].innerText === name) {
            let bl = msg.childNodes[0];
            bl.innerHTML = "Block";
            bl.style.color = "red";
            bl.onclick = () => {
                window.blockPlayer(name);
            };
        };
    };
};

const getClock = () => {
    var date = new Date();
    var d = date.getDate();
    var d1 = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds()
    var session = "PM";

    if(h == 2){
        h = 12;
    };

    if(h < 13) {
        session = "AM"
    };
    if(h > 12){
        session = "PM";
        h -= 12;
    };

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    return `${h}:${m} ${session}`;
}

Game.currentGame.network.emitter.removeListener("PACKET_RPC", Game.currentGame.network.emitter._events.PACKET_RPC[1]);
let onMessageReceived = (msg => {
    if(blockedNames.includes(msg.displayName) || window.chatDisabled) { return; };
    let a = Game.currentGame.ui.getComponent("Chat"),
        b = msg.displayName.replace(/<(?:.|\n)*?>/gm, ''),
        c = msg.message.replace(/<(?:.|\n)*?>/gm, ''),
        d = a.ui.createElement(`<div class="hud-chat-message"><a href="javascript:void(0);" onclick="window.blockPlayer(\`${msg.displayName}\`)" style="color: red;">Block</a> <strong>${b}</strong> <small> at ${getClock()}</small>: ${c}</div>`);
    a.messagesElem.appendChild(d);
    a.messagesElem.scrollTop = a.messagesElem.scrollHeight;
})
Game.currentGame.network.addRpcHandler("ReceiveChatMessage", onMessageReceived);

window.toggleChat = () => {
    window.chatDisabled = !window.chatDisabled;
    let hcm = document.getElementsByClassName("hud-chat-messages")[0];
    if(window.chatDisabled) {
        window.oldChatHTML = hcm.innerHTML;
        hcm.innerHTML = "<h1>Disabled Chat</h1>";
    } else {
        hcm.innerHTML = window.oldChatHTML;
    };
};


//entity disabler

!game.world.oldCreateEntity && (game.world.oldCreateEntity = game.world.createEntity, game.network.addRpcHandler("ReceiveChatMessage", e => {
    if (e.message == "?dze" && e.uid == game.world.myUid) {
        document.disableZombieEntity = true;
    }
    if (e.message == "?dpe" && e.uid == game.world.myUid) {
        document.disableProjectileEntity = true;
    }
    if (e.message == "?dte" && e.uid == game.world.myUid) {
        document.disableTowerEntity = true;
    }
    if (e.message == "??dze" && e.uid == game.world.myUid) {
        document.disableZombieEntity = false;
    }
    if (e.message == "??dpe" && e.uid == game.world.myUid) {
        document.disableProjectileEntity = false;
    }
    if (e.message == "??dte" && e.uid == game.world.myUid) {
        document.disableTowerEntity = false;
    }
}));
game.world.createEntity = e => {
    if (document.disableZombieEntity && (e.entityClass == "Npc" && !e.model.startsWith("ZombieBossTier"))) return;
    if (document.disableProjectileEntity && e.entityClass == "Projectile") return;
    if (document.disableTowerEntity && (e.model == "Door" || e.model == "Wall" || e.model == "SlowTrap" || e.model == "ArrowTower" || e.model == "CannonTower" || e.model == "BombTower" || e.model == "MeleeTower" || e.model == "MagicTower" || e.model == "Harvester" || e.model == "GoldMine")) return;
    if (game.world.entities[e.uid]) return;
    if (e.entityClass) {
        game.world.oldCreateEntity(e);
    }
}

//Discconect stuff

game.network.addRpcHandler("ReceiveChatMessage", e => {
   if (e.uid == game.world.myUid) {
       //Dc your party if you are the party leader.
        if (e.message.toLowerCase() == "!dc party") {
            disconnectPartyMembers()
        }
       //Dc yourself
        if (e.message.toLowerCase() == "!dc") {
            game.network.socket.send([]);zz
        }
    }
})

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout () {
            throw new Error('clearTimeout has not been defined');
        }
        (function () {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        } ())
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch(e){
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch(e){
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }


        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e){
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e){
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while(len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };
let partyInfo = [{}];
let PasteOnlyOnce = () => {
    window.hasPastedOnlyOnce = true;
    let syncSellPermsKey;
    let decodedSyncSellPerm;
    let whoAsked;
    partyInfo = [{}]
    let decodeVerificationCodes = {a: 360, b: 200, c: -102, d: 320, e: 120, f: 111, g: -321, h: 126, i: 322, j: -534, k: 602, l: -143, m: 741, n: 288, o: -131, p: 996, q: 397, r: 976, s: -13, t: 693, u: 437, v: 1212, w: -157, x: 934, y: -46, z: 1056, 0: 532, 1: 431, 2: 571, 3: 645, 4: 330, 5: 120, 6: 1063, 7: 1160, 8: 1214, 9: 916, "-": 4064};
    let encodedVericationCode = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {var b = 16 * Math.random() | 0; return ("x" == a ? b : b & 3 | 8).toString(16)});
    let decodedhardverication = encodedVericationCode.split("").map(e => decodeVerificationCodes[e] + 99).reduce((a, b) => a * b) + ""; // this is very illegal for a random dev xD.
    let verifiedUids = {};
    let askedForVerification = {};
    let bannedUids = {};
    encodedVericationCode = null;
    decodedhardverication = null;

    let autoKickNonVerifiedPpl = false;
    let autoSellPermVerifiedPpl = true;

    game.network.addRpcHandler("PartyInfo", response => {
        partyInfo = response;
        if (response[0].playerUid == game.world.myUid) {
            response.forEach(e => {
                verifiedUids[e.playerUid] ? autoSellPermVerifiedPpl && !e.canSell && game.network.sendRpc({name: "SetPartyMemberCanSell", uid: e.playerUid, canSell: 1}) : (autoKickNonVerifiedPpl || bannedUids[e.playerUid]) && game.network.sendRpc({name: "KickParty", uid: e.playerUid});
            })
        }
    });

    game.network.addRpcHandler("ReceiveChatMessage", e => {
        if (!verifiedUids[game.world.myUid]) {
            verifiedUids[game.world.myUid] = 1;
        }
        if ((e.message == "?verify" || e.message == "?ver&#105;fy") && !verifiedUids[e.uid == game.world.myUid ? 0 : e.uid] && autoSellPermVerifiedPpl) {
            if ((partyInfo[0].playerUid ? partyInfo[0].playerUid : game.ui.playerPartyMembers[0].playerUid) == game.world.myUid && e.uid !== game.world.myUid) {
                if (askedForVerification[e.uid]) {
                    askedForVerification[e.uid] = askedForVerification[e.uid] + 1;
                }
                if (!askedForVerification[e.uid]) {
                    askedForVerification[e.uid] = 1;
                }
                if (askedForVerification[e.uid] > 5) return;
            }
            whoAsked = e.uid;
            setTimeout(() => {
                if ((partyInfo[0].playerUid ? partyInfo[0].playerUid : game.ui.playerPartyMembers[0].playerUid) == game.world.myUid && e.uid !== game.world.myUid) {
                    encodedVericationCode = "?!/cid, " + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {var b = 16 * Math.random() | 0; return ("x" == a ? b : b & 3 | 8).toString(16)});
                    decodedhardverication = encodedVericationCode.split("?!/cid, ").join("").split("").map(e => decodeVerificationCodes[e] + 75).reduce((a, b) => a * b) + "";
                    game.network.sendRpc2 ? game.network.sendRpc2({name: "SendChatMessage", channel: "Local", message: encodedVericationCode}) : game.network.sendRpc({name: "SendChatMessage", channel: "Local", message: encodedVericationCode})
                }
            }, 1100)
        }
        if (e.message.startsWith("?syncdc")) {
            let key = e.message.split("?syncdc ")[1];
            if (decodedhardverication && key == decodedhardverication) {
                decodedhardverication = null;
                verifiedUids[e.uid] = 1;
                autoSellPermVerifiedPpl && game.network.sendRpc({name: "SetPartyMemberCanSell", uid: e.uid, canSell: 1})
            }
        }
        if (e.message.startsWith("?!/cid, ") && whoAsked == game.world.myUid) {
            decodedhardverication = e.message.split("?!/cid, ").join("").split("").map(e => decodeVerificationCodes[e] + 75).reduce((a, b) => a * b) + "";
            game.network.sendRpc2 ? game.network.sendRpc2({name: "SendChatMessage", channel: "Local", message: "?syncdc " + decodedhardverication}) : game.network.sendRpc({name: "SendChatMessage", channel: "Local", message: "?syncdc " + decodedhardverication})
        }
        if (verifiedUids[e.uid] && (e.message.startsWith("?kickp") || e.message.startsWith("?k&#105;ckp"))) {
            let args = e.message.split(" ");
            let thisUid = args[1] - "";
            verifiedUids[thisUid] ? null : game.network.sendRpc({name: "KickParty", uid: thisUid});
        }
        if (verifiedUids[e.uid] && (e.message.startsWith("?ban") || e.message.startsWith("?b&#97;n"))) {
            let args = e.message.split(" ");
            let thisUid = args[1] - "";
            verifiedUids[thisUid] ? null : game.network.sendRpc({name: "KickParty", uid: thisUid});
            bannedUids[thisUid] = 1;
        }
        if (verifiedUids[e.uid] && (e.message.startsWith("?verify") || e.message.startsWith("?ver&#105;fy"))) {
            let args = e.message.split(" ");
            if (args[1]) {
                let thisUid = args[1] - "";
                verifiedUids[thisUid] = 1;
                game.network.sendRpc({name: "SetPartyMemberCanSell", uid: thisUid, canSell: 1})
            }
        }
        if (e.uid == game.world.myUid && (e.message == "?enablesell" || e.message == "?en&#97;blesell")) {
            autoSellPermVerifiedPpl = true;
        }
        if (e.uid == game.world.myUid && (e.message == "?disablesell" || e.message == "?d&#105;s&#97;blesell")) {
            autoSellPermVerifiedPpl = false;
        }
    })
}
!window.hasPastedOnlyOnce && PasteOnlyOnce();