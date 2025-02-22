			
			// Parameters configure jsembed itself.
			var params = {
				//base: "/games/data/spongebob/spongebob-bikini-bottom-bop-em/html5/", // base url of all content. Defaults ""
				base: "",
			 	api: "flambe", // supported custom apis are defined in jsembed. Defaults none.
			 	//scaletype: "fillto",
                                autoscale: "true", // update window.canvasScale on window resize? Defaults true.
			 	indexroot: "true", // use index url as path root? If false, uses domain root instead. Defaults false (uses domain root).
			 	maxwidth: 1024, //The maximum width to scale the canvas to. Only works with fillto.
			 	maxheight: 720, //The maximum height to scale the canvas to. Only works with fillto.  	  
			 	libs: ["flambe.js"] // array of libs to embed before trying to launch app. Defaults []
			}			
			// Attributes will be set on the embed target for use by the app. "base" will be set as well.
			var attr = {					
			};
			jsembed.embed("flambe.js", "embedtarget", "960", "560", params, attr);
		