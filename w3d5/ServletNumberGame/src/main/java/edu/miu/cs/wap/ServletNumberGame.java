package edu.miu.cs.wap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ServletNumberGame")
public class ServletNumberGame extends HttpServlet {
        private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

            out.print("<html>");
            out.print("<head>");
            out.print("	<title>NumberQuiz</title>");
            out.print("</head>");
            out.print("<body>");
            out.print("	<form method='post'>");
            out.print("<h3>Have fun with NumberQuiz!</h3>");
            out.print("<p>Your current score is: ");
            out.print(sessQuiz.getNumCorrect() + "</br></br>");
            out.print("<p>Guess the next number in the sequence! </p>");
            out.println("<p>" + currQuest.substring(0, currQuest.length() - 2)
                    + "<span style= 'color:red'>" + currQuest.charAt(currQuest.length() - 2) + "</span>" + currQuest.charAt(currQuest.length() - 1) + "</p>");

            out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

            if (error && (answer != null)) {    //REFACTOR?-- assumes answer null only when first open page

                out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
            }

            out.print("<p><input type='submit' name='btnNext' value='Next' /> ");
            out.print("<input type='submit' name='btnRestart' value='Restart' /></p> ");

            out.print("</form>");
            out.print("</body></html>");
        }

        private void startOverPage(PrintWriter out) {

            out.print("<html>");
            out.print("<head>");
            out.print("	<title>NumberQuiz</title>");
            out.print("</head>");
            out.print("<body>");
            out.print("<body>");
            out.print("<form method='get'>");

            out.print("<p style='color:red;'>Quiz is Over!</p>");
            out.print("<input type='submit' name='btnRestart' value='Start Again!' /></p> ");

            out.print("</form>");
            out.print("</body></html>");
        }
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            PrintWriter out = response.getWriter();
            HttpSession session = request.getSession();
            Quiz q = (Quiz) session.getAttribute("myQuiz");

            if (request.getParameter("btnNext") != null) {
                //out.print();
                if (q.getNumCorrect() == q.getNumQuestions() - 1) {
                    startOverPage(out);

                } else {
                    String answer = request.getParameter("txtAnswer");
                    boolean correct = q.isCorrect(answer);
                    if (correct) {
                        q.scoreAnswer();
                    }
                    genQuizPage(q, out, q.getCurrentQuestion(), !correct, answer);
                }

            } else if (request.getParameter("btnRestart") != null) {
                session.invalidate();
                doGet(request, response);
            }

        }

        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            HttpSession session = request.getSession();//returns a session to the client
            Quiz q = new Quiz();
            String currQuestion = q.getCurrentQuestion();
            session.setAttribute("myQuiz", q);
            genQuizPage(q, response.getWriter(), currQuestion, false, null);

        }
}
