var graphic = SuperWidget.extend({
    message: null,

    init: function () {
    	
    	var ds = DatasetFactory.getDataset("ds_graficos", null, null, null);
    	//var ds = DatasetFactory.getDataset("workflowProcess", null, null, null);
    	
    	var dados = [];
    	
    	for (x = 0; x < ds.values.length; x++){
    		dados[x] = ds.values[x].Valor;
    	}
    	
    	
    	    	
    	var data = {
    		    labels: ["Ferro de Passar", "Fogão", "Guarda-Roupas", "Maquina de Lavar", "Refrigerador"],
    			//labels: ["processId", "startDateProcess", "periodId", "requestId", "endDateProcess"],
    			datasets: [
    		        {
    		            label: "My First dataset",
    		            fillColor: "rgba(220,220,220,0.5)",
    		            strokeColor: "rgba(220,220,220,0.8)",
    		            highlightFill: "rgba(220,220,220,0.75)",
    		            highlightStroke: "rgba(220,220,220,1)",
    		            data: dados
    		        },
    		        
    		        
    		    ]
    		};
    	
    	
       
    	var chart = FLUIGC.chart('#MY_SELECTOR', {
    	    id: 'set_an_id_for_my_chart',
    	    width: '700',
    	    height: '200',

    	});
    	// call the bar function
    	var barChart = chart.bar(data,"");
    	
    	
    	
    	
    	
    	
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    }
});