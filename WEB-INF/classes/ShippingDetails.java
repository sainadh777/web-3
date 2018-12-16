/*  Login.java
    Sample login servlet
    Alan Riggins    
    CS645
    Spring 2017
 */

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import sdsu.*;



public class ShippingDetails extends HttpServlet { 
          
    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processRequest(request, response);         
        }

    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  { 
        //throw new ServletException("GET protocol is not supported, POST only");
		processRequest(request, response);         
        } 
        
    private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {
        String toDo= "";
        PrintWriter out = response.getWriter();
        String fname = (String) request.getParameter("fname");
        String lname = (String) request.getParameter("lname");
		String address = (String) request.getParameter("address");
        String city = (String) request.getParameter("city");
		String state = (String) request.getParameter("state");
        String zip = (String) request.getParameter("zip");
		String country = (String) request.getParameter("country");
        String phone = (String) request.getParameter("phone");
		HttpSession session = request.getSession(false);
		session.setAttribute("fname",fname);
		session.setAttribute("lname",lname);
		session.setAttribute("address",address);
		session.setAttribute("city",city);
		session.setAttribute("state",state);
		session.setAttribute("zip",zip);
		session.setAttribute("country",country);
		session.setAttribute("phone",phone);
		
		toDo = "/WEB-INF/jsp/billing.jsp";
	     out.print("/jadrn050/jsp/billing.jsp"); 
			
        }

		
    }      




