

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import sdsu.*;




public class GetSumData extends HttpServlet { 
          
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
		PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        response.setHeader("Cache-control", "no-cache, no-store");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "-1");

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Max-Age", "86400");
        String toDo= "";
		String cartparam=(String) request.getParameter("cartparam");
		//out.print(vendorparam);
		
		
		cartparam=cartparam.replace("$","','");
		//out.print(cartparam);


		Vector<String[]> skuData=null;
		

		if(cartparam.equals("")){
			 out.print("No items in cart");
		}
		else{
			skuData=PasswordUtilities.getCartSKU(cartparam);
		}

		HttpSession session = request.getSession(true);

        if(skuData != null) {
			
		 String res="";			
		for(int i=0;i< skuData.size();i++){
			String temp[]=skuData.elementAt(i);
			temp[1]=PasswordUtilities.getCategory(Integer.parseInt(temp[1]));
			temp[2]=PasswordUtilities.getVendor(Integer.parseInt(temp[2]));
			 for(int j=0;j < temp.length;j++){
				 res+=temp[j];
				 res+="#";
			 }
		res+="+";
		}
	//out.print(res);
	session.setAttribute("ressum",res);

  
       response.sendRedirect("/jadrn050/jsp/summary.jsp");
		/*toDo = "/WEB-INF/jsp/shoppingcart.jsp";
		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);*/
		 //out.close();	

        }
		else{
			response.sendRedirect("/jadrn050/jsp/shoppingcart.jsp");
			//session.setAttribute("skumessage","Enter the existing SKU");
			//out.print("No Products Available");
			//out.close();
			toDo = "/WEB-INF/jsp/summary.jsp";
			//response.sendRedirect("/jadrn050/jsp/menu.jsp"); 
			/*RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);*/
			//response.sendRedirect("/jadrn050/jsp/login_err.jsp"); 
            //return;*/
		}
		
    }      
}



