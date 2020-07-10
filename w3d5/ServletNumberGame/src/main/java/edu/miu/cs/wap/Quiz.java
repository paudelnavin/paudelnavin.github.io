package edu.miu.cs.wap;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
	List<Question> questions = new ArrayList<>(5);
	int score = 0;
	int count = 0;

	public Quiz() {
		questions.add(new Question("[3, 1, 4, 1, 5, <font style=\"color:red\"><b> ? </b></font> ]", "9"));
		questions.add(new Question("[1, 1, 2, 3, 5, <font style=\"color:red\"><b> ? </b></font> ]", "8"));
		questions.add(new Question("[1, 4, 9, 16, 25, <font style=\"color:red\"><b> ? </b></font> ]", "36"));
		questions.add(new Question("[2, 3, 5, 7, 11, <font style=\"color:red\"><b> ? </b></font> ]", "13"));
		questions.add(new Question("[1, 2, 4, 8, 16, <font style=\"color:red\"><b> ? </b></font> ]", "32"));
	}

	public String getCurrentQuestion() {
		return questions.get(count).getQuestion();
	}

	public int getNumCorrect() {
		return score;
	}

	public boolean isCorrect(String answer) {
		if (answer.equals(questions.get(count).getAnswer())) {
			count++;
			return true;
		} else {
			return false;
		}
	}
	public void scoreAnswer(){
		score++;
	}
	public int getNumQuestions(){
		return  questions.size();
	}
}
