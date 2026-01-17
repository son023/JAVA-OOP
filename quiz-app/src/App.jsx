import React, { useState, useEffect } from 'react';
import './App.css';
import { questions } from './questions';

function App() {
  const [view, setView] = useState('home'); // 'home', 'quiz', 'result', 'history', 'history-detail'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Update selected answer when navigating between questions
  useEffect(() => {
    if (view === 'quiz' && quizQuestions.length > 0) {
      const answer = answeredQuestions.find(a => a.questionIndex === currentQuestion);
      setSelectedAnswer(answer ? answer.selected : null);
    }
  }, [currentQuestion, answeredQuestions, view, quizQuestions.length]);

  const startQuiz = (setNumber) => {
    // Calculate question range: Set 1 = 1-50, Set 2 = 51-100, Set 3 = 101-150, Set 4 = 151-200
    const startIndex = (setNumber - 1) * 50;
    const endIndex = startIndex + 50;
    const selected = questions.slice(startIndex, endIndex);
    
    setQuizQuestions(selected);
    setCurrentSet(setNumber);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions([]);
    setView('quiz');
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);
    const isCorrect = option === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      questionIndex: currentQuestion,
      questionNumber: (currentSet - 1) * 50 + currentQuestion + 1, // Actual question number from 1-200
      question: quizQuestions[currentQuestion].question,
      selected: option,
      correct: quizQuestions[currentQuestion].correctAnswer,
      isCorrect: isCorrect,
      options: quizQuestions[currentQuestion].options,
      code: quizQuestions[currentQuestion].code,
      explanation: quizQuestions[currentQuestion].explanation || null
    }]);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    const answeredCount = answeredQuestions.length;
    const quizResult = {
      id: Date.now(),
      date: new Date().toLocaleString('vi-VN'),
      setNumber: currentSet,
      questionRange: `${(currentSet - 1) * 50 + 1}-${currentSet * 50}`,
      totalQuestions: quizQuestions.length,
      answeredQuestions: answeredCount,
      score: score,
      percentage: answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : '0.0',
      answers: answeredQuestions
    };

    // Save to history
    const newHistory = [quizResult, ...quizHistory];
    setQuizHistory(newHistory);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    
    setView('result');
  };

  const handleRestart = () => {
    setView('home');
  };

  const handleFinishQuizClick = () => {
    setShowFinishConfirm(true);
  };

  const handleConfirmFinish = () => {
    setShowFinishConfirm(false);
    finishQuiz();
  };

  const handleCancelFinish = () => {
    setShowFinishConfirm(false);
  };

  const viewHistoryDetail = (historyItem) => {
    setSelectedHistoryItem(historyItem);
    setView('history-detail');
  };

  const getButtonClass = (option) => {
    if (selectedAnswer === null) {
      return 'option-button';
    }
    
    if (option === quizQuestions[currentQuestion].correctAnswer) {
      return 'option-button correct';
    }
    
    if (option === selectedAnswer && option !== quizQuestions[currentQuestion].correctAnswer) {
      return 'option-button incorrect';
    }
    
    return 'option-button disabled';
  };

  // Home Screen
  if (view === 'home') {
    return (
      <div className="app">
        <div className="quiz-container home-container">
          <div className="home-header">
            <h1>🎯 OOP Java Quiz</h1>
            <p className="home-subtitle">Test your knowledge with 200 challenging OOP questions</p>
          </div>

          <div className="quiz-options">
            <h2>Choose Question Set (50 questions each)</h2>
            <div className="quiz-set-buttons">
              <button className="set-button" onClick={() => startQuiz(1)}>
                <span className="set-icon">📝</span>
                <span className="set-title">Set 1</span>
                <span className="set-desc">Questions 1-50</span>
              </button>
              <button className="set-button" onClick={() => startQuiz(2)}>
                <span className="set-icon">📚</span>
                <span className="set-title">Set 2</span>
                <span className="set-desc">Questions 51-100</span>
              </button>
              <button className="set-button" onClick={() => startQuiz(3)}>
                <span className="set-icon">📖</span>
                <span className="set-title">Set 3</span>
                <span className="set-desc">Questions 101-150</span>
              </button>
              <button className="set-button" onClick={() => startQuiz(4)}>
                <span className="set-icon">🏆</span>
                <span className="set-title">Set 4</span>
                <span className="set-desc">Questions 151-200</span>
              </button>
            </div>
          </div>

          <div className="history-dashboard">
            <h2>📊 Quiz History Dashboard</h2>
            {quizHistory.length === 0 ? (
              <div className="no-history-message">
                <p>No quiz history yet. Complete a quiz to see your results here!</p>
              </div>
            ) : (
              <div className="history-list-dashboard">
                {quizHistory.map((item) => (
                  <div key={item.id} className="history-item-dashboard" onClick={() => viewHistoryDetail(item)}>
                    <div className="history-item-left">
                      <div className="history-set-badge">Set {item.setNumber}</div>
                      <div className="history-info">
                        <div className="history-date">{item.date}</div>
                        <div className="history-range">Questions {item.questionRange}</div>
                      </div>
                    </div>
                    <div className="history-item-right">
                      <div className="history-score-display">
                        <span className="history-score-number">{item.score}</span>
                        <span className="history-score-total">/ {item.totalQuestions}</span>
                      </div>
                      <div className="history-percentage-badge" style={{
                        backgroundColor: parseFloat(item.percentage) >= 70 ? '#10b981' : parseFloat(item.percentage) >= 50 ? '#f59e0b' : '#ef4444'
                      }}>
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // History Detail Screen
  if (view === 'history-detail') {
    return (
      <div className="app">
        <div className="quiz-container history-detail-container">
          <div className="history-detail-header">
            <button className="back-button" onClick={() => setView('home')}>
              ← Back to Dashboard
            </button>
            <h1>Quiz Details</h1>
            <div className="history-detail-info">
              <div className="detail-item">
                <span className="detail-label">Set</span>
                <span className="detail-value">Set {selectedHistoryItem.setNumber}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date</span>
                <span className="detail-value">{selectedHistoryItem.date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Questions</span>
                <span className="detail-value">{selectedHistoryItem.questionRange}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Score</span>
                <span className="detail-value">{selectedHistoryItem.score} / {selectedHistoryItem.totalQuestions}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Percentage</span>
                <span className="detail-value">{selectedHistoryItem.percentage}%</span>
              </div>
            </div>
          </div>

          <div className="history-answers-review">
            <h2>Question Review</h2>
            <div className="answers-summary">
              <div className="summary-stat correct-stat">
                <span className="stat-icon">✓</span>
                <span className="stat-text">
                  {selectedHistoryItem.answers.filter(a => a.isCorrect).length} Correct
                </span>
              </div>
              <div className="summary-stat incorrect-stat">
                <span className="stat-icon">✗</span>
                <span className="stat-text">
                  {selectedHistoryItem.answers.filter(a => !a.isCorrect).length} Incorrect
                </span>
              </div>
            </div>
            {selectedHistoryItem.answers.map((answer, index) => (
              <div key={index} className={`review-item ${answer.isCorrect ? 'review-correct' : 'review-incorrect'}`}>
                <div className="review-header">
                  <span className="review-number">Question {answer.questionNumber}</span>
                  <span className={`review-badge ${answer.isCorrect ? 'badge-correct' : 'badge-incorrect'}`}>
                    {answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>
                <p className="review-question">{answer.question}</p>
                {answer.code && (
                  <pre className="code-block">
                    <code>{answer.code}</code>
                  </pre>
                )}
                <div className="review-answers">
                  <div className="answer-row">
                    <span className="answer-label">Your answer:</span>
                    <strong className={answer.isCorrect ? 'text-correct' : 'text-incorrect'}>
                      {answer.selected}) {answer.options[answer.selected]}
                    </strong>
                  </div>
                  {!answer.isCorrect && (
                    <div className="answer-row">
                      <span className="answer-label">Correct answer:</span>
                      <strong className="text-correct">
                        {answer.correct}) {answer.options[answer.correct]}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (view === 'result') {
    const lastQuiz = quizHistory[0];
    const answeredCount = answeredQuestions.length;
    const incorrectCount = answeredCount - score;
    const percentage = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : '0.0';
    
    return (
      <div className="app">
        <div className="quiz-container result-container">
          <div className="result-header">
            <h1>🎉 Quiz Completed!</h1>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {answeredCount}</span>
              </div>
              <p className="score-percentage">
                {percentage}%
              </p>
              {answeredCount < quizQuestions.length && (
                <p className="score-note">
                  Đã làm {answeredCount} / {quizQuestions.length} câu
                </p>
              )}
            </div>
          </div>

          <div className="result-summary">
            <div className="summary-card correct-card">
              <span className="summary-icon">✓</span>
              <div>
                <p className="summary-number">{score}</p>
                <p className="summary-label">Correct</p>
              </div>
            </div>
            <div className="summary-card incorrect-card">
              <span className="summary-icon">✗</span>
              <div>
                <p className="summary-number">{incorrectCount}</p>
                <p className="summary-label">Incorrect</p>
              </div>
            </div>
          </div>

          <div className="result-actions">
            <button className="restart-button" onClick={handleRestart}>
              🏠 Back to Home
            </button>
            <button className="view-history-button" onClick={() => viewHistoryDetail(lastQuiz)}>
              📊 View Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="app">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quiz-header-top">
            <h1>OOP Java Quiz - Set {currentSet}</h1>
            <button className="finish-quiz-button" onClick={handleFinishQuizClick}>
              ⏹️ Kết thúc bài
            </button>
          </div>
          <div className="progress-info">
            <span className="question-counter">
              Question {currentQuestion + 1} of {quizQuestions.length} (Q{(currentSet - 1) * 50 + currentQuestion + 1})
            </span>
            <span className="current-score">Score: {score}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {showFinishConfirm && (
          <div className="confirm-dialog-overlay" onClick={handleCancelFinish}>
            <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
              <h3>Xác nhận kết thúc bài</h3>
              <p>Bạn có chắc chắn muốn kết thúc bài làm ngay bây giờ?</p>
              <p className="confirm-info">
                Đã làm: {answeredQuestions.length} / {quizQuestions.length} câu<br/>
                Điểm hiện tại: {score} / {answeredQuestions.length || 1}
              </p>
              <div className="confirm-buttons">
                <button className="confirm-button cancel-button" onClick={handleCancelFinish}>
                  Hủy
                </button>
                <button className="confirm-button confirm-button-primary" onClick={handleConfirmFinish}>
                  Kết thúc
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="question-section">
          <h2 className="question-text">
            {quizQuestions[currentQuestion].question}
          </h2>
          
          {quizQuestions[currentQuestion].code && (
            <pre className="code-block">
              <code>{quizQuestions[currentQuestion].code}</code>
            </pre>
          )}
        </div>

        <div className="options-section">
          {['A', 'B', 'C', 'D'].map((option) => (
            <button
              key={option}
              className={getButtonClass(option)}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
            >
              <span className="option-letter">{option}</span>
              <span className="option-text">
                {quizQuestions[currentQuestion].options[option]}
              </span>
              {selectedAnswer !== null && option === quizQuestions[currentQuestion].correctAnswer && (
                <span className="check-icon">✓</span>
              )}
              {selectedAnswer !== null && option === selectedAnswer && option !== quizQuestions[currentQuestion].correctAnswer && (
                <span className="cross-icon">✗</span>
              )}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className={`feedback ${selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? 'feedback-correct' : 'feedback-incorrect'}`}>
            <div className="feedback-header">
              {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? (
                <>
                  <span className="feedback-icon">🎉</span>
                  <span className="feedback-text">Chính xác! Bạn đã trả lời đúng!</span>
                </>
              ) : (
                <>
                  <span className="feedback-icon">💡</span>
                  <span className="feedback-text">
                    Sai rồi! Đáp án đúng là <strong>{quizQuestions[currentQuestion].correctAnswer}</strong>
                  </span>
                </>
              )}
            </div>
            {quizQuestions[currentQuestion].explanation && (
              <div className="explanation">
                <strong>Giải thích:</strong>
                <p>{quizQuestions[currentQuestion].explanation}</p>
              </div>
            )}
          </div>
        )}

        <div className="navigation-buttons">
          <button 
            className="nav-button prev-button"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>
          <button 
            className="nav-button next-button"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
