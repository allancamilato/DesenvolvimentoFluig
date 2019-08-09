<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
    <@wcm.menu />


    <!-- Wrapper -->
    <div class="wcm-all-content">
        <div id="wcm-content" class="clearfix wcm-background">

			 <!-- Onde deverá estar a barra de formatação -->
	        <#if pageRender.isEditMode()=true>
			<div name="formatBar" id="formatBar">

			</div>
            <!-- Div geral -->
            <!-- Há CSS distinto para Edição/Visualização -->
			<div id="edicaoPagina" class="clearfix">
			
			<#else>
			<div id="visualizacaoPagina" class="clearfix">
			<div class="fluig-style-guide">

            	<div class="jumbotron">
            		<h1>HELLO WORLD</h1>
 					<p>APENAS UM EXEMPLO DE LAYOUT/p>           
            	</div>
            	
            	<div class="row">
            	
            	<div class="col-md-3">
            	<h2>TITULO 1</h2>
            	<p>
            	HAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAH
            	AHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAH
            	AHHAHAHAHAHAHAHAAHAHAHAHAHAHHAHAHAH
            	GAHAAHAHAHHAHAH
            	</p>
            	</div>
            	
            	<div class="col-md-3">
            	<h2>TITULO 2</h2>
            	<p>
            	HAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAH
            	AHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAH
            	AHHAHAHAHAHAHAHAAHAHAHAHAHAHHAHAHAH
            	GAHAAHAHAHHAHAH
            	</p>
            	</div>
            	
            	<div class="col-md-3">
            	<h2>TITULO 3</h2>
            	<p>
            	HAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAH
            	AHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAH
            	AHHAHAHAHAHAHAHAAHAHAHAHAHAHHAHAHAH
            	GAHAAHAHAHHAHAH
            	</p>
            	</div>
            	
            	</div>
            	
            	
            	
				</div>
			
	        </#if>	
		
		
		
		

		<div class="fluig-style-guide">
		
		
		<div class="col-md-3">
		<!-- Slot 1 -->
				<div class="editable-slot slotfull layout-1-1" id="slotFull1">
                    <@wcm.renderSlot id="SlotA" editableSlot="true"/>
				</div>
			</div>
			
			<div class="col-md-3">
		<!-- Slot 1 -->
				<div class="editable-slot slotfull layout-1-1" id="slotFull2">
                    <@wcm.renderSlot id="SlotB" editableSlot="true"/>
				</div>
			</div>
			
			<div class="col-md-3">
		<!-- Slot 1 -->
				<div class="editable-slot slotfull layout-1-1" id="slotFull3">
                    <@wcm.renderSlot id="SlotC" editableSlot="true"/>
				</div>
			</div>
			
			<div class="col-md-3">
			<!-- Slot 1 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
                    <@wcm.renderSlot id="SlotD" editableSlot="true"/>
				</div>
			</div>
			
			
		</div>
         
            
            	
     
            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
        </div>
    </div>
</div>