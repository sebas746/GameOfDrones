The project is divided in two parts. 
	BackEnd: Asp. Net Web Api 2.0 in .Net Framework 4.6.2
	FronEnd: Angular Cli 7 


1. Restore de Database
	Restore de SQL Server Database using the file DB_Backup.

2. BackEnd configuration .net App

2.1. Configure connection strings in BackEnd .net project.
<connectionStrings>
    <add name="WebAppDataContext" connectionString="data source=[Server];initial catalog=[Database];persist security info=True;user id=[databaseuser];password=[database password];MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient" />
</connectionStrings>

	Project: WebApp.Domain.DataContext 
	App.Config file
	
	Project: WebApp 
	Web.Config
	
	Project: WebApp.DAC.DataAccess 
	App.Config file
	
	Project: WebApp.Domain.Entities 
	App.Config file
	
2.2. Restore all of the Nuget packages.
	Entity Framework
	Unity Container
	Cors

2.3. Clean and rebuild the project.

3. Front-End Angular 7 installation

	Run the command: "npm install" in the FrontEnd location.
	
	Update the basepath of the params.js file with the route of the Backend app server running. Ex: var data = new Object();
	data.basePath = "http://localhost:53318/";
	It is located at: FrontEnd\src\assets\params\params.js

4. Run Both Projects and try it!


	
	
	