package edu.miu.wap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class QuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        int i = Integer.parseInt(request.getParameter("num1"));
        int j = Integer.parseInt(request.getParameter("num2"));
        int sum = i+j;
        int k = Integer.parseInt(request.getParameter("num3"));
        int l= Integer.parseInt(request.getParameter("num4"));
        int mul = k*l;
        out.print("<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" +
                "<title>ServLet Number Quiz</title></head><body><form>" );
        out.print("<input type=number value="+i+">+<input type=number value="+j+">=<input type=number value="+sum+"><br><br>");
        out.print("<input type=number value="+k+">*<input type=number value="+l+">=<input type=number value="+mul+"><br><br>");
        out.print("<button>Submit</button>");
        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
