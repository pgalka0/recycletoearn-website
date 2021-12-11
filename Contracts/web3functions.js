

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
			.send({from: address})
			.on("receipt", (receipt) => {
				console.log('User added, receipt: ', receipt)
			})
			.on("error", (error) => {console.error(error)})
	}
	catch(e) {
		console.log(e)
	}

}


