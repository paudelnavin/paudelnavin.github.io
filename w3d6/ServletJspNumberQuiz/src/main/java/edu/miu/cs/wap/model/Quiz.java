package edu.miu.cs.wap.model;

import java.util.HashMap;
import java.util.Map;

public class Quiz {
	private int correctAnswers;
	private int currentQuestion;
	private Map<Integer, Integer> questionAnswerMap;
	private String[] questions;

	public Quiz(){
		correctAnswers = 0;
		currentQuestion = 0;
		questionAnswerMap = new HashMap<>();
		questionAnswerMap.put(0, 9);
		questionAnswerMap.put(1, 8);
		questionAnswerMap.put(2, 36);
		questionAnswerMap.put(3, 13);
		questionAnswerMap.put(4, 32);
		questions = new String[]{"[3, 1, 4, 1, 5, ?]", "[1, 1, 2, 3, 5, ?]", "[1, 4, 9, 16, 25, ?]", "[2, 3, 5, 7, 11, ?]", "[1, 2, 4, 8, 16, ?]"};
	}
	public int getNumCorrect() {
		return correctAnswers;
	}
	public String getCurrentQuestion() {
		return questions[currentQuestion];
	}
	public boolean isCorrect(String ans) {
		if(questionAnswerMap.get(currentQuestion) == Integer.parseInt(ans))
			return true;
		return false;
	}
	public void scoreAnswer() {
		correctAnswers++;
		currentQuestion++;
	}
	public int getNumQuestions() {
		return 5;
	}
	public int getCurrentQuestionIndex() {
		return currentQuestion;
	}
}