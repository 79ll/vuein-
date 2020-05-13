function myrandom(list){let add=0
						let addrandom=0
						let end=0
	for(item in list){
		add+=list.item
	}
	
	addrandom=add*Math.random()
	for(item in list)
	{	end+=list.item
		if(end>addrandom)
		{
			return item
		}
	}
}