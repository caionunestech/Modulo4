package br.com.viagensgo.factory;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactoryViagensGo {
	
	public static Connection createConnectionSQLServer() throws Exception {
		Class.forName ("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		
		Connection connection = DriverManager.getConnection("jdbc:sqlserver://localhost;databaseName=viagensgo;integratedSecurity=true;"); 
			return connection;
	}
	

	public static void main (String[] args) throws Exception {
		Connection con = createConnectionSQLServer();
		
		if (con != null) {
			System.out.println("Conexão obtida com sucesso!! " + con);
			con.close();
		}
		
	}
	
}
	