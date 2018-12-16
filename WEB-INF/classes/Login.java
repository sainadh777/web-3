/*  Login.java
    Sample login servlet
    Alan Riggins    
    CS645
    Spring 2017
 */

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;



public class Login extends HttpServlet { 
          
    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processRequest(request, response);         
        }

    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  { 
        throw new ServletException("GET protocol is not supported, POST only");
        } 
        
    private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {
        String toDo= "";
        if(!request.getMethod().equals("POST")) {
            response.
			sendRedirect("/jadrn050/jsp/login_err.jsp"); 
            return;
            }     
        String username = (String) request.getParameter("username");
        String password = (String) request.getParameter("password");
        if(username == null || password == null) {
            response.sendRedirect("/jadrn050/jsp/login_err.jsp"); 
			
            return;
            }        
        if(PasswordUtilities.isValidLogin(username,password)) {
			HttpSession session = request.getSession(false);
	    if(session != null) {
            	session.removeAttribute("username"); 
	    	session.removeAttribute("message");    
            session.removeAttribute("skumessage");	
			session.removeAttribute("outskumessage");
			session.removeAttribute("outskumessage");	
session.removeAttribute("adderrormessage");
session.removeAttribute("outerrormessage");			
	    	session.invalidate();
            }
            toDo = "/WEB-INF/jsp/menu.jsp";
	    //toDo = "/jsp/menu.jsp";
		    
            session = request.getSession(true);
            session.setAttribute("username", username); 
			session.setAttribute("password",password);
	    session.setAttribute("loginmessage","Successful result from database");   
	    //response.sendRedirect("/jadrn050/jsp/menu.jsp");                     
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);  
        }
		else{
			response.sendRedirect("/jadrn050/jsp/login_err.jsp"); 
            return;
		}
    }      
}



