angular
	.module('ttt')
	.controller('TttController', TttController);

    TttController.$inject = ['$firebaseArray', '$firebaseObject', '$http', '$timeout'];

/*RS========= Controller Function and Firebase Declaration ======RS*/
		function TttController($firebaseArray, $firebaseObject, $http, $timeout) {
			var self = this;
			self.videoDone = false;
			$timeout(function(){
				self.videoDone = true;
			}, 16000);
/*RS========= All Required Global Variables and Declarations are Present Here ======RS*/
			self.syncWithFirebase = syncWithFirebase();
			self.getWinner = getWinner;
			self.text;
			self.chatter = chatter;
			self.chatLog = getChat();
			self.playAgain = playAgain;
			self.makeMove = makeMove;
			var someoneWon = false;
			var winShow = document.getElementById('victory');


/*RS========= Firebase Function ======RS*/
			function syncWithFirebase() {
				var ref = new Firebase('https://alliance-atac-horde.firebaseio.com/gameData');
				var gameObject = $firebaseObject(ref);
				gameObject.counter = 0;
				gameObject.slots = [];
				gameObject.allianceScore = 0;
				gameObject.hordeScore = 0;

				for (var i = 0; i < 9; i++) 
				{
					gameObject.slots.push({numSlot:[i], allianceSlot:false, hordeSlot:false});

				}

			 gameObject.$loaded(function(){
			 	gameObject.$save();
			})
			// gameObject.$save();
			return gameObject;
			}


/*RS========= This is the function that Initiates the Game through ng-click ======RS*/
			function makeMove(slot) {

				if (someoneWon === true) {
					alert('Its Game Over buddy!')
				}

				else if (someoneWon === false) {

					if (slot.allianceSlot === true || slot.hordeSlot === true) {
						alert('Already made a move there buddy!');
						return;
					}

					else if (self.syncWithFirebase.counter % 2 === 0) {
						var audio = new Audio('assets/move.mp3');
						audio.play();
						slot.allianceSlot = true;
						self.syncWithFirebase.counter += 1;
						self.syncWithFirebase.$save();
					}

					else {
						var audio = new Audio('assets/move.mp3');
						audio.play();
						slot.hordeSlot = true;
						self.syncWithFirebase.counter += 1;
						self.syncWithFirebase.$save();
					}

					self.getWinner(slot);
				}


				} /*End of makeMove Function*/

/*RS========= Win Logic for Entire Game including Audio Embeds and Victory Div innerHTML ======RS*/

			function getWinner(slot) {


				/*RS========= Alliance Win Logic ======RS*/

				if (self.syncWithFirebase.slots[0].allianceSlot === true && self.syncWithFirebase.slots[1].allianceSlot === true && self.syncWithFirebase.slots[2].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore +=1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}

				else if (self.syncWithFirebase.slots[3].allianceSlot === true && self.syncWithFirebase.slots[4].allianceSlot === true && self.syncWithFirebase.slots[5].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}

				else if (self.syncWithFirebase.slots[6].allianceSlot === true && self.syncWithFirebase.slots[7].allianceSlot === true && self.syncWithFirebase.slots[8].allianceSlot === true)
						{

						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
							someoneWon = true;
							self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
						}
				else if (self.syncWithFirebase.slots[0].allianceSlot === true && self.syncWithFirebase.slots[3].allianceSlot === true && self.syncWithFirebase.slots[6].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}
				else if (self.syncWithFirebase.slots[1].allianceSlot === true && self.syncWithFirebase.slots[4].allianceSlot === true && self.syncWithFirebase.slots[7].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}
				else if (self.syncWithFirebase.slots[2].allianceSlot === true && self.syncWithFirebase.slots[5].allianceSlot === true && self.syncWithFirebase.slots[8].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}
				else if (self.syncWithFirebase.slots[0].allianceSlot === true && self.syncWithFirebase.slots[4].allianceSlot === true && self.syncWithFirebase.slots[8].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}
				else if (self.syncWithFirebase.slots[2].allianceSlot === true && self.syncWithFirebase.slots[4].allianceSlot === true && self.syncWithFirebase.slots[6].allianceSlot === true)
					{
						var audio = new Audio('assets/alliwins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/alliWin.png'</img>";
						someoneWon = true;
						self.allianceScore += 1;
						self.syncWithFirebase.allianceScore += 1;
						self.syncWithFirebase.$save();
					}


					/*RS========= Horde Win Logic ======RS*/

					else if (self.syncWithFirebase.slots[0].hordeSlot === true && self.syncWithFirebase.slots[1].hordeSlot === true && self.syncWithFirebase.slots[2].hordeSlot === true)
						{
							var audio = new Audio('assets/hordewins.mp3');
							audio.play();
							winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}

					else if (self.syncWithFirebase.slots[3].hordeSlot === true && self.syncWithFirebase.slots[4].hordeSlot === true && self.syncWithFirebase.slots[5].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}

					else if (self.syncWithFirebase.slots[6].hordeSlot === true && self.syncWithFirebase.slots[7].hordeSlot === true && self.syncWithFirebase.slots[8].hordeSlot === true)
							{

						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
								someoneWon = true;
								self.hordeScore += 1;
								self.syncWithFirebase.hordeScore += 1;
								self.syncWithFirebase.$save();
							}
					else if (self.syncWithFirebase.slots[0].hordeSlot === true && self.syncWithFirebase.slots[3].hordeSlot === true && self.syncWithFirebase.slots[6].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}
					else if (self.syncWithFirebase.slots[1].hordeSlot === true && self.syncWithFirebase.slots[4].hordeSlot === true && self.syncWithFirebase.slots[7].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}
					else if (self.syncWithFirebase.slots[2].hordeSlot === true && self.syncWithFirebase.slots[5].hordeSlot === true && self.syncWithFirebase.slots[8].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}
					else if (self.syncWithFirebase.slots[0].hordeSlot === true && self.syncWithFirebase.slots[4].hordeSlot === true && self.syncWithFirebase.slots[8].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}
					else if (self.syncWithFirebase.slots[2].hordeSlot === true && self.syncWithFirebase.slots[4].hordeSlot === true && self.syncWithFirebase.slots[6].hordeSlot === true)
						{
						var audio = new Audio('assets/hordewins.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/hordeWin.png'</img>";
							someoneWon = true;
							self.hordeScore += 1;
							self.syncWithFirebase.hordeScore += 1;
							self.syncWithFirebase.$save();
						}

						/*RS=========== Tied Game Logic =========RS*/
						else if ((self.syncWithFirebase.slots[0].allianceSlot === true || self.syncWithFirebase.slots[0].hordeSlot === true) && (self.syncWithFirebase.slots[1].allianceSlot === true || self.syncWithFirebase.slots[1].hordeSlot === true) && (self.syncWithFirebase.slots[2].allianceSlot === true || self.syncWithFirebase.slots[2].hordeSlot === true) && (self.syncWithFirebase.slots[3].allianceSlot === true || self.syncWithFirebase.slots[3].hordeSlot === true) && (self.syncWithFirebase.slots[4].allianceSlot === true || self.syncWithFirebase.slots[4].hordeSlot === true) && (self.syncWithFirebase.slots[5].allianceSlot === true || self.syncWithFirebase.slots[5].hordeSlot === true) && (self.syncWithFirebase.slots[6].allianceSlot === true || self.syncWithFirebase.slots[6].hordeSlot === true) && (self.syncWithFirebase.slots[7].allianceSlot === true || self.syncWithFirebase.slots[7].hordeSlot === true) && (self.syncWithFirebase.slots[8].allianceSlot === true || self.syncWithFirebase.slots[8].hordeSlot === true))
						{
						var audio = new Audio('assets/tie.mp3');
						audio.play();
						winShow.innerHTML = "<img class='animated infinite pulse' src='assets/tie.png'</img>";
						}

			} /*RS========= End of Win Logic ======RS*/



/*RS========= Firebase Connected Chat Box Function ======RS*/

			function getChat() {
			  var ref = new Firebase('https://alliance-atac-horde.firebaseio.com/getChat')
			  var chatLog = $firebaseArray(ref);
			  return chatLog;
			}

			/*RS========= Chat-Box ======RS*/
			function chatter() {
				var newChat = {chat: self.text};
				self.chatLog.$add(newChat);
				self.text = null;
			}




/*RS========= Play Again Function ======RS*/

			function playAgain() {
				var audio = new Audio('assets/wow.mp3');
				audio.play();
				winShow.innerHTML = '';
				for (var i = 0; i < 9; i++) 
				{
					self.syncWithFirebase.slots[i].allianceSlot = false;
					self.syncWithFirebase.slots[i].hordeSlot = false;
					someoneWon = false;
				}
				self.syncWithFirebase.counter = 0;
				self.syncWithFirebase.$save();
			}




};   /*RS========= End of Game Controller ======RS*/




