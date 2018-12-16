

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import sdsu.*;




public class FilterData extends HttpServlet { 
          
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
		String vendorparam = (String) request.getParameter("vendorparam"); 
		String catparam=(String) request.getParameter("catparam");
		//out.print(vendorparam);
		//out.print(catparam);
		
		vendorparam=vendorparam.replace("$",",");
		
        System.out.println(vendorparam);		
		System.out.println(catparam);
		catparam=catparam.replace("$",",");	
       	catparam=catparam.replace("C","");

		Vector<String[]> skuData=null;
		
		if(vendorparam!="" && catparam!=""){
		
		skuData=PasswordUtilities.getFilterSKU(vendorparam,catparam);
		System.out.println(skuData);
		}
		if(vendorparam.equals("")){
			 skuData=PasswordUtilities.getCatFilterSKU(catparam);
		}
		if(catparam.equals("")){
			 skuData=PasswordUtilities.getVendorFilterSKU(vendorparam);
		}
		HttpSession session = request.getSession(true);

        if(skuData != null) {
		String res="";
		//String sku = request.getParameter("sku");
       for(int i=0;i< skuData.size();i++){
			String temp[]=skuData.elementAt(i);
			temp[1]=PasswordUtilities.getCategory(Integer.parseInt(temp[1]));
			temp[2]=PasswordUtilities.getVendor(Integer.parseInt(temp[2]));
			//out.print(temp[10]+ " "+temp[11]); 
			if(temp[11]==null){
				temp[11]="*Coming Soon";
			}
			else{
			 if(Integer.parseInt(temp[11])>0){
		temp[11]="*In Stock";   
	   }
	   else if(Integer.parseInt(temp[11])==0){
		  temp[11]="*More on the way";  
	   }
			}
	   
	   for(int j=0;j < temp.length;j++){
				 res+=temp[j];
				 res+="#";
			 }
		res+="@";
		}
		
						
								

	out.print(res);


        out.close();
			

        }
		else{
			
			//session.setAttribute("skumessage","Enter the existing SKU");
			out.print("No Products Available");
			out.close();
			/*toDo = "/WEB-INF/jsp/menu.jsp";
			//response.sendRedirect("/jadrn050/jsp/menu.jsp"); 
			RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);
			//response.sendRedirect("/jadrn050/jsp/login_err.jsp"); 
            //return;*/
		}
		
    }      
}



