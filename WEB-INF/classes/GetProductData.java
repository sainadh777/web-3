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




public class GetProductData extends HttpServlet { 
          
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
        /*if(!request.getMethod().equals("POST")) {
            response.sendRedirect("/jadrn050/jsp/login_err.jsp"); 
            return;
            }  */   
        String skuinput = (String) request.getParameter("skuinput"); 
        System.out.println(skuinput);		
		Vector<String[]> skuData=PasswordUtilities.isValidSKU(skuinput);
		System.out.println(skuData);
		HttpSession session = request.getSession(true);
		/*session.removeAttribute("category");
		session.removeAttribute("vendor");
		session.removeAttribute("vendormodel");
		session.removeAttribute("description");
		session.removeAttribute("features");
		session.removeAttribute("image");
		session.removeAttribute("retail");*/
		/*PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        response.setHeader("Cache-control", "no-cache, no-store");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "-1");

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Max-Age", "86400");*/
        if(skuData != null) {
			
		//String sku = request.getParameter("sku");

        
	   String[] objs = skuData.get(0);
	   
	   objs[1]=PasswordUtilities.getCategory(Integer.parseInt(objs[1]));
	   objs[2]=PasswordUtilities.getVendor(Integer.parseInt(objs[2]));

	   session.setAttribute("category",objs[1]);
	   session.setAttribute("vendor",objs[2]);
	   session.setAttribute("vendormodel",objs[3]);
	   session.setAttribute("description",objs[4]);
	   session.setAttribute("features",objs[5]);
	   session.setAttribute("retail",objs[7]);
	   session.setAttribute("image","/~jadrn050/proj1/file_upload/_p_images/"+objs[8]);
	   //response.sendRedirect("/jadrn050/jsp/details.jsp");
	   toDo="/WEB-INF/jsp/details.jsp";
       RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
       dispatcher.forward(request, response);

			

        }

		
    }      
}



