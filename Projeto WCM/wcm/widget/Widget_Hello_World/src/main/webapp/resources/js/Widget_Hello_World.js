var HelloWorld = SuperWidget.extend({
    

    init: function () {
        //code
    	
    	if(this.isEditMode){
    		
    	  	var settings = {
        		    changeDelay: 200,
        		    control: 'wheel',
        		    defaultValue: '#58595b',
        		    inline: false,
        		    letterCase: 'lowercase',
        		    opacity: true,
        		    position: 'bottom left',
        		    customColorNames: {
        		        'mycustomcolor': '#123456'
        		    }
        		} 
        		var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic', settings);
    		
    		
    		
    	} else{
    		
    		alert("ESTOU NO MODO DE VIEW");
    	}
    
    	
    },

    bindings: {
        local: {
            'save': ['click_Save'],
           
            
        }
    },
    
    
    Save:function(){
    	
    	var args = {};
    	args.cor = $("#colorpicker-example-generic", this.DOM).val();
    	
    	
    	var result = WCMSpaceAPI.PageService.UPDATEPREFERENCES({async:false}, this.instanceId, args);
    	
    	if (result){
    		WCMC.messageInfo(result.message);
    		
    	}else{
    		
    		WCMC.messageError("Erro");
    	}
    	
    }
   
    
   
     
});