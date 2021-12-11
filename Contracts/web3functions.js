

export const handleMetamaskConnection = async (window, setAccount) => {
	
	if (window.ethereum) {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		setAccount(accounts[0]);
		window.ethereum.on('accountsChanged', function (accounts) {
			setAccount(accounts[0]);
		});
	}else{
		console.log('Install metamask')
	}

};

export const addUser = async (address, contract) => {
	try{
		await contract.methods.addUser()
			.send({from: address, gas: 3000000})
			.on("receipt", (receipt) => {
				console.log('User added, receipt: ', receipt)
			})
			.on("error", (error) => {console.error(error)})
	}
	catch(e) {
		console.log(e)
	}

}

export const readUsers = async (contract, setUsers) => {
	const users = []
	try {
		contract.events.allEvents({fromBlock: 0}, (error, event) => {
		
			if(event.event === "userAdded") {
				users.push({id: event.returnValues.userId, address: event.returnValues.addr, totalScore: 0, plastic: 0, glass: 0, bio: 0}) 
			}
			else if(event.event === "userScored"){

				users[event.returnValues.userId].totalScore += event.returnValues.totalScore;

				switch(event.returnValues.achievementType){
					case 'plastic': 
						users[event.returnValues.userId].plastic += event.returnValues.specificAchievementScore;
						break;
					case 'glass': 
						users[event.returnValues.userId].plastic += event.returnValues.specificAchievementScore;
						break;
					case 'bio': 
						users[event.returnValues.userId].plastic += event.returnValues.specificAchievementScore;
						break;
				}
			}
			setUsers(users)


			
		})
		
	}catch(e) {
		console.log(e)
	}
	
}


