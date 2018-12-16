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



public class OrderOut extends HttpServlet { 
          
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
        String skuinput = (String) request.getParameter("outskuinput");
		//out.print(skuinput);
        String date = (String) request.getParameter("outdate");
		
		int quantity = Integer.parseInt( request.getParameter("outquantity"));    
		//Vector<String[]> skuData=PasswordUtilities.isValidSKU(skuinput);
		HttpSession session = request.getSession(false);
		//session.removeAttribute("outerrormessage");	
			session.removeAttribute("res");
			session.removeAttribute("ressum");
		PrintWriter out = response.getWriter();
        //out.print(skuinput+" "+date+" "+quantity);			
        //if(skuData != null) {
			
			String res=PasswordUtilities.addOutData(skuinput,date,quantity);
			if(res.equals("Insertion Sucessful")){
				out.print(skuinput);
				try{
				//session.setAttribute("outmessage","Sent Out Successfully");
				}
				catch(Exception e){
				//session.setAttribute("outerrormessage","Internal Error");	
				}
			}
			else{
				//out.print("failure");
				try{
				//session.setAttribute("outerrormessage",res);
				}
				catch(Exception e){
				//session.setAttribute("outerrormessage","Internal Error");	
				}
			}
  
        //}
		//else{
			//session.setAttribute("outskumessage","Enter the existing SKU");
		//}
		
    }      
}



