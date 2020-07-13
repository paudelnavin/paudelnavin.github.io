<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix ="c" %>
<%@ page isELIgnored="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Quiz</title>
</head>
<body>
<form method='post' action="quiz">
    <h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is:
        ${Quiz.numCorrect} <br><br></p>
    <p>Guess the next number in the sequence! </p>
    <p>${Quiz.currentQuestion}</p>

    <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
    <c:if test =  "${Error == true}">
        <p>Your last answer was not correct! Please try again</p>
    </c:if>
    <input type='submit' name='btnNext' value='Next'/>
</form>
<form action = "finishQuiz" method="post">
    <input type = "submit" name = 'btnRestart' value = 'Restart'/>
</form>
</body>
</html>