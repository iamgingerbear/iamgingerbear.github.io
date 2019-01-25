// JavaScript Document
var elinks = document.getElementsByClassName('e-l');
			var total_elinks = elinks.length;
			for( var i=0; i < total_elinks; i++ ){
				var part1 = elinks[i].getAttribute('data-ep1');
				var part2 = elinks[i].getAttribute('data-ep2');
				var part3 = elinks[i].getAttribute('data-ep3');
				var newAddress = part1+'@'+part2+'.'+part3;
                var newAddress2 = part1+'@'+part2+'.'+part3;
				
					elinks[i].setAttribute('href','mailto:'+newAddress2)
					elinks[i].innerHTML = newAddress;
			}

var elinks2 = document.getElementsByClassName('e-l2');
			var total_elinks2 = elinks2.length;
			for( var x=0; x < total_elinks2; x++ ){
				var parts1 = elinks2[x].getAttribute('data-p1');
				var parts2 = elinks2[x].getAttribute('data-p2');
				var parts3 = elinks2[x].getAttribute('data-p3');
				var newNumber = parts1+parts2+parts3;
				
					elinks2[x].setAttribute('href','tel:'+newNumber)
					elinks2[x].innerHTML = newNumber;
			}
