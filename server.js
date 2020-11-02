const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/mydb"
const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const TronWeb = require('tronweb')


const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "1e9e06fb5a5c61f8d9566a33e22d6ab77109d073f9d10471765bbf96afc0b7f4";


const addressTronator = 'TVkKM66MnezvpGw6puPCuttDxJTaX9QkEd'


MongoClient.connect(url, (err, db)=>{
  if (err) throw err
  console.log("Database created!")

  db.close()
})

const newRT3Events = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newRT3Event?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newRT3Event?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newRT3Event?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of newRT3Events ', events.length)
	return events

}



const newFT3Events = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newFT3Event?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newFT3Event?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newFT3Event?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of newFT3Events ', events.length)
	return events

}

const payToDirectUplineEvents = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToDirectUplineEvent?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToDirectUplineEvent?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToDirectUplineEvent?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of payToDirectUplineEvents ', events.length)
	return events

}

const payToT3UplineEvents = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT3UplineEvent?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT3UplineEvent?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT3UplineEvent?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of payToT3UplineEvents ', events.length)
	return events

}



const payToT4UplineEvents = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT4UplineEvent?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT4UplineEvent?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/payToT4UplineEvent?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of payToT4UplineEvents ', events.length)
	return events

}



const T4LostMoneyEvents = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/T4LostMoneyEvent?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/T4LostMoneyEvent?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/T4LostMoneyEvent?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of T4LostMoneyEvents ', events.length)
	return events

}





const newT4Events = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newT4Event?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newT4Event?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newT4Event?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of newT4Events ', events.length)
	return events

}



const newLevelT4Events = async ()=>{

	let events

	await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newLevelT4Event?size=200`).then(async (res)=>{

		events = res.data
		if(events.length==200){
			let firstEvent = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newLevelT4Event?sort=block_timestamp`)
			firstEvent = firstEvent.data[0].block_timestamp
			let block_timestamp
			while(events[events.length-1].block_timestamp>firstEvent){
				block_timestamp = events[events.length-1].block_timestamp
				let _events = await axios.get(`https://api.trongrid.io/event/contract/${addressTronator}/newLevelT4Event?size=200&since=${block_timestamp}`)

				events = events.concat(_events.data)
			}

		}
		for(let i=1; i<=events.length; i++){
			if(JSON.stringify(events[i-1])===JSON.stringify(events[i])){
				events.splice(i, i)
				i--
			}
		}
		events = events.reverse()
	})
	console.log('count of newLevelT4Events ', events.length)
	return events

}



// MongoClient.connect(url, (err, db)=>{
//   if (err) throw err
//   console.log("Database created!")

//   db.close()
// })

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("mydb")
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err
//     console.log("Collection created!")
//     db.close()
//   })
// })

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("mydb")
//   dbo.collection("newRT3Events").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection newRT3Events deleted")
//     db.close()
//   })
//   dbo.collection("newFT3Events").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection newFT3Events deleted")
//     db.close()
//   })
//   dbo.collection("payToDirectUplineEvents").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection payToDirectUplineEvents deleted")
//     db.close()
//   })
//   dbo.collection("payToT3UplineEvents").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection payToT3UplineEvents deleted")
//     db.close()
//   })
//   dbo.collection("payToT4UplineEvents").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection payToT4UplineEvents deleted")
//     db.close()
//   })
//   dbo.collection("T4LostMoneyEvents").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection T4LostMoneyEvents deleted")
//     db.close()
//   })
//   dbo.collection("newT4Events").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection newT4Events deleted")
//     db.close()
//   })
//   dbo.collection("newLevelT4Events").drop(function(err, delOK) {
//     if (err) throw err
//     if (delOK) console.log("Collection newLevelT4Events deleted")
//     db.close()
//   })
// })







// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("mydb")
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err
//     console.log(result.name)
//     db.close()
//   })
// })



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("mydb")
//   dbo.collection("customers").find(
//   	{}, 
//   	{ 
//   		projection: { 
// 	  		_id: 0
//   		} 
//   	}
//   	).toArray(function(err, result) {
//     if (err) throw err
//     console.log(result)
//     db.close()
//   })
// })

app.use(cors({'Access-Control-Allow-Origin': '*'}))
app.listen(port, async ()=>{
	console.log('Start server on ' + port)


	let tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)
	Tronator = await tronWeb.contract().at(addressTronator)
  	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	const dbo = db.db("mydb")

	await MongoClient.connect(url, { useUnifiedTopology: true }, async (err, db) =>{

	  
	  if (err) throw err
	  let dbo = db.db("mydb")
		console.log('START')
	  
	  
	  
	  
	  
	  
	  
	  let checkEvents



	  let _newRT3Events = await newRT3Events()
	  checkEvents = await dbo.collection("newRT3Events").find({}).toArray()
	  if(checkEvents.length>0)
	  	await dbo.collection("newRT3Events").drop()

	    await dbo.collection("newRT3Events").insertMany(_newRT3Events, function(err, res) {
	    	if (err) throw err
			console.log("Number of newRT3Events inserted: " + res.insertedCount)
	    // db.close()
	    })

	    await Tronator.newRT3Event().watch(async (err, event)=>{
		  	dbo.collection("newRT3Events").insertOne(event, async function(err, res) {
				if (err){
					console.log('error watch newRT3Event')
					console.log(err)	
				} 
				console.log("newRT3Event added");
				let events = await dbo.collection("newRT3Events").find({}).toArray()
				console.log(events.length)
			});
		})

	  


	    let _newFT3Events = await newFT3Events()
		checkEvents = await dbo.collection("newFT3Events").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("newFT3Events").drop()

		await dbo.collection("newFT3Events").insertMany(_newFT3Events, function(err, res) {
			if (err) throw err
			console.log("Number of newFT3Events inserted: " + res.insertedCount)
			// db.close()
		})

		await Tronator.newFT3Event().watch(async (err, event)=>{
		  	dbo.collection("newFT3Events").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("newFT3Event added");
				let events = await dbo.collection("newFT3Events").find({}).toArray()
				console.log(events.length)
			});
		})



		let _payToDirectUplineEvents = await payToDirectUplineEvents()
		checkEvents = await dbo.collection("payToDirectUplineEvents").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("payToDirectUplineEvents").drop()

		await dbo.collection("payToDirectUplineEvents").insertMany(_payToDirectUplineEvents, function(err, res) {
			if (err) throw err
			console.log("Number of payToDirectUplineEvents inserted: " + res.insertedCount)
			// db.close()
		})

		await Tronator.payToDirectUplineEvent().watch(async (err, event)=>{
		  	dbo.collection("payToDirectUplineEvents").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("payToDirectUplineEvent added");
				let events = await dbo.collection("payToDirectUplineEvents").find({}).toArray()
				console.log(events.length)
			});
		})



		let _payToT3UplineEvents = await payToT3UplineEvents()

		checkEvents = await dbo.collection("payToT3UplineEvents").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("payToT3UplineEvents").drop()

		await dbo.collection("payToT3UplineEvents").insertMany(_payToT3UplineEvents, function(err, res) {
			if (err) throw err
			console.log("Number of payToT3UplineEvents inserted: " + res.insertedCount)
			// db.close()
		})

		await Tronator.payToT3UplineEvent().watch(async (err, event)=>{
		  	dbo.collection("payToT3UplineEvents").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("payToT3UplineEvent added");
				let events = await dbo.collection("payToT3UplineEvents").find({}).toArray()
				console.log(events.length)
			});
		})


		let _payToT4UplineEvents = await payToT4UplineEvents()
		checkEvents = await dbo.collection("payToT4UplineEvents").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("payToT4UplineEvents").drop()

		await dbo.collection("payToT4UplineEvents").insertMany(_payToT4UplineEvents, function(err, res) {
			if (err) throw err
			console.log("Number of payToT4UplineEvents inserted: " + res.insertedCount)
			// db.close()
		})

		await Tronator.payToT4UplineEvent().watch(async (err, event)=>{
		  	dbo.collection("payToT4UplineEvents").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("payToT4UplineEvent added");
				let events = await dbo.collection("payToT4UplineEvents").find({}).toArray()
				console.log(events.length)
			});
		})


		let _T4LostMoneyEvents = await T4LostMoneyEvents()
		checkEvents = await dbo.collection("T4LostMoneyEvents").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("T4LostMoneyEvents").drop()

		await dbo.collection("T4LostMoneyEvents").insertMany(_T4LostMoneyEvents, function(err, res) {
			if (err) throw err
			console.log("Number of T4LostMoneyEvents inserted: " + res.insertedCount)
			// db.close()
		})

		await Tronator.T4LostMoneyEvent().watch(async (err, event)=>{
		  	dbo.collection("T4LostMoneyEvents").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("T4LostMoneyEvent added");
				let events = await dbo.collection("T4LostMoneyEvents").find({}).toArray()
				console.log(events.length)
			});
		})


		let _newT4Events = await newT4Events()
		checkEvents = await dbo.collection("newT4Events").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("newT4Events").drop()

		await dbo.collection("newT4Events").insertMany(_newT4Events, function(err, res) {
		if (err) throw err
			console.log("Number of newT4Events inserted: " + res.insertedCount)
		})

		await Tronator.newT4Event().watch(async (err, event)=>{
		  	dbo.collection("newT4Events").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("newT4Event added");
				let events = await dbo.collection("newT4Events").find({}).toArray()
				console.log(events.length)
			});
		})


		let _newLevelT4Events = await newLevelT4Events()
		checkEvents = await dbo.collection("newLevelT4Events").find({}).toArray()
		if(checkEvents.length>0)
			await dbo.collection("newLevelT4Events").drop()

		await dbo.collection("newLevelT4Events").insertMany(_newLevelT4Events, function(err, res) {
		if (err) throw err
			console.log("Number of newLevelT4Events inserted: " + res.insertedCount)
		})

	
		await Tronator.newLevelT4Event().watch(async (err, event)=>{
		  	dbo.collection("newLevelT4Events").insertOne(event, async function(err, res) {
				if (err) throw err;
				console.log("newLevelT4Event added");
				let events = await dbo.collection("newLevelT4Events").find({}).toArray()
				console.log(events.length)
			});
		})



	

	});

})

app.post('/newRT3Events', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	// console.log('req', req)
	// console.log('req', req.req)
	let events = await dbo.collection("newRT3Events").find({}).toArray()
	res.send(events)
})

app.post('/newFT3Events', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("newFT3Events").find({}).toArray()
	res.send(events)
})

app.post('/payToDirectUplineEvents', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("payToDirectUplineEvents").find({}).toArray()
	res.send(events)
})

app.post('/payToT3UplineEvents', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("payToT3UplineEvents").find({}).toArray()
	res.send(events)
})

app.post('/payToT4UplineEvents', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("payToT4UplineEvents").find({}).toArray()
	res.send(events)
})

app.post('/T4LostMoneyEvents', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("T4LostMoneyEvents").find({}).toArray()
	res.send(events)
})

app.post('/newT4Events', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("newT4Events").find({}).toArray()
	res.send(events)
})

app.post('/newLevelT4Events', async (req, res)=>{
	const db = await MongoClient.connect(url, { useUnifiedTopology: true })
	let dbo = db.db("mydb")
	let events = await dbo.collection("newLevelT4Events").find({}).toArray()
	res.send(events)
})
