

export const contractAddress = "0x64c8d4D5511F4ef262624453883f4f5EEAfF6eA6";

export const handleMetamaskConnection = async (window) => {

	if (window.ethereum) {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		localStorage.setItem("address", accounts[0]);
		// window.ethereum.on('accountsChanged', function (accounts) {
		// 	setAccount(accounts[0]);
		// });
	} else {
		console.log('Install metamask')
	}

};

export const addUser = async (contract, address) => {
	try {
		await contract.methods.addUser()
			.send({ from: address, gasLimit: 210000 })
			.on("receipt", (receipt) => {
				console.log('User added, receipt: ', receipt)
			})
			.on("error", (error) => { console.error(error) })
	}
	catch (e) {
		console.log(e)
	}

}

class User {
	constructor(id, address, totalScore, plastic, glass, bio) {
		this.id = id
		this.address = address
		this.totalScore = totalScore
		this.plastic = plastic
		this.glass = glass
		this.bio = bio
	}
}

export const readUsers = async (contract) => {
	
	let users = []
	await contract.getPastEvents({ fromBlock: 0 }, (error, events) => {
		events.forEach((event) => {
			if (event.event === "userAdded") {
				users.push(new User(event.returnValues.userId, event.returnValues.addr, 0, 0, 0, 0))
			}
			else if (event.event === "userScored") {

				users[event.returnValues.userId].totalScore += parseInt(event.returnValues.totalScore);

				switch (event.returnValues.achievementType) {
					case 'plastic':
						users[event.returnValues.userId].plastic += parseInt(event.returnValues.specificAchievementScore);
						break;
					case 'glass':
						users[event.returnValues.userId].glass += parseInt(event.returnValues.specificAchievementScore);
						break;
					case 'bio':
						users[event.returnValues.userId].bio += parseInt(event.returnValues.specificAchievementScore);
						break;
				}
			}
		})
	})
	return users

}


export const userScored = (contract, address, score, type) => {
	readUsers(contract).then((users) => {
		const id = users.filter((user) => {return user.address.toLowerCase() === address.toLowerCase()})[0].id
		contract.methods.scored(id, score, type)
			.send({from: address, gasLimit: 210000})
			.then((receipt) => {console.log(receipt)})
	})
}
