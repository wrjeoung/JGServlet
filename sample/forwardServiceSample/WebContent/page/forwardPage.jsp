<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>JGServlet</title>
</head>
<body>
	<h1>Welcome to JGServlet</h1>
	<h3><%=request.getAttribute("message") %></h3>
	<p>
		Example for forwarding service<br>
		<a href="main?srvID=another">go to another page</a>
	</p>
</body>
</html>