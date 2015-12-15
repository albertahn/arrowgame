	public var scrollSpeed = 0.5F; //the speed the of the texture offset
	
    function Update()
	{
		//Make it smooth
        var offset = Time.time * scrollSpeed;
        
        //Set the texture offset
        GetComponent.<Renderer>().material.mainTextureOffset = Vector2(offset, 0);
    }