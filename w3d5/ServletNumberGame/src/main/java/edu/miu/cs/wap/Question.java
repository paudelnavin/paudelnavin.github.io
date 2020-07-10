package edu.miu.cs.wap;

public class Question {
	String question;
	String answer;

	public Question(String question, String answer) {
		this.question = question;
		this.answer = answer;
	}
	public String getAnswer(){
		return answer;
	}
	public String getQuestion(){
		return question;
	}
}
