import React, { useState, useEffect } from 'react';
import './App.css';
import { questions as codingQuestions } from './questions';
import { questions as solidQuestions } from './questionSOLID';

function App() {
  const [view, setView] = useState('home'); // 'home', 'quiz-select', 'quiz', 'result', 'history', 'history-detail'
  const [quizType, setQuizType] = useState(''); // 'coding' or 'solid'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentSet, setCurrentSet] = useState(1);
  const [answeredQuestions, setAnsweredQuestions] = useState({}); // Changed to object: { questionIndex: answerData }
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

  const selectQuizType = (type) => {
    setQuizType(type);
    setView('quiz-select');
  };

  const getQuestionsForType = (type) => {
    return type === 'coding' ? codingQuestions : solidQuestions;
  };

  const getMaxSets = (type) => {
    const questions = getQuestionsForType(type);
    return Math.ceil(questions.length / 50);
  };

  const startQuiz = (setNumber) => {
    const questions = getQuestionsForType(quizType);
    // Calculate question range: Set 1 = 1-50, Set 2 = 51-100, etc.
    const startIndex = (setNumber - 1) * 50;
    const endIndex = Math.min(startIndex + 50, questions.length);
    const selected = questions.slice(startIndex, endIndex);
    
    setQuizQuestions(selected);
    setCurrentSet(setNumber);
    setAnsweredQuestions({});
    setView('quiz');
  };

  const handleAnswerClick = (questionIndex, option) => {
    const question = quizQuestions[questionIndex];
    const isCorrect = option === question.correctAnswer;
    
    setAnsweredQuestions({
      ...answeredQuestions,
      [questionIndex]: {
        questionIndex: questionIndex,
        questionNumber: (currentSet - 1) * 50 + questionIndex + 1,
        question: question.question,
        selected: option,
        correct: question.correctAnswer,
        isCorrect: isCorrect,
        options: question.options,
        code: question.code,
        explanation: question.explanation || null
      }
    });
  };


  const finishQuiz = () => {
    const answeredArray = Object.values(answeredQuestions);
    const answeredCount = answeredArray.length;
    const score = answeredArray.filter(a => a.isCorrect).length;
    
    const quizResult = {
      id: Date.now(),
      date: new Date().toLocaleString('vi-VN'),
      quizType: quizType,
      quizTypeName: quizType === 'coding' ? 'Coding Convention' : 'SOLID Principles',
      setNumber: currentSet,
      questionRange: `${(currentSet - 1) * 50 + 1}-${Math.min(currentSet * 50, getQuestionsForType(quizType).length)}`,
      totalQuestions: quizQuestions.length,
      answeredQuestions: answeredCount,
      score: score,
      percentage: ((score / quizQuestions.length) * 100).toFixed(1),
      answers: answeredArray
    };

    // Save to history
    const newHistory = [quizResult, ...quizHistory];
    setQuizHistory(newHistory);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    
    setView('result');
  };

  const handleRestart = () => {
    setView('home');
    setQuizType('');
  };

  const handleBackToSelect = () => {
    setView('quiz-select');
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

  const getButtonClass = (questionIndex, option) => {
    const answer = answeredQuestions[questionIndex];
    if (!answer) {
      return 'option-button';
    }
    
    if (option === quizQuestions[questionIndex].correctAnswer) {
      return 'option-button correct';
    }
    
    if (option === answer.selected && option !== quizQuestions[questionIndex].correctAnswer) {
      return 'option-button incorrect';
    }
    
    return 'option-button disabled';
  };

  const getAnsweredCount = () => {
    return Object.keys(answeredQuestions).length;
  };

  const getScore = () => {
    return Object.values(answeredQuestions).filter(a => a.isCorrect).length;
  };

  // Home Screen - Quiz Type Selection
  if (view === 'home') {
    return (
      <div className="app">
        <div className="quiz-container home-container">
          <div className="home-header">
            <h1>Programming Quiz</h1>
            <p className="home-subtitle">Test your knowledge with challenging questions</p>
          </div>

          <div className="quiz-type-selection">
            <h2>Choose Quiz Type</h2>
            <div className="quiz-type-buttons">
              <button className="type-button coding-type" onClick={() => selectQuizType('coding')}>
                <span className="type-icon">📝</span>
                <span className="type-title">Coding Convention</span>
                <span className="type-desc">100 questions about naming, comments, structure</span>
              </button>
              <button className="type-button solid-type" onClick={() => selectQuizType('solid')}>
                <span className="type-icon">🏗️</span>
                <span className="type-title">SOLID Principles</span>
                <span className="type-desc">200 questions about OOP design principles</span>
              </button>
            </div>
          </div>

          <div className="history-dashboard">
            <h2>Quiz History</h2>
            {quizHistory.length === 0 ? (
              <div className="no-history-message">
                <p>No quiz history yet. Complete a quiz to see your results here!</p>
              </div>
            ) : (
              <div className="history-list-dashboard">
                {quizHistory.map((item) => (
                  <div key={item.id} className="history-item-dashboard" onClick={() => viewHistoryDetail(item)}>
                    <div className="history-item-left">
                      <div className={`history-type-badge ${item.quizType === 'coding' ? 'coding-badge' : 'solid-badge'}`}>
                        {item.quizTypeName}
                      </div>
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

  // Quiz Set Selection Screen
  if (view === 'quiz-select') {
    const maxSets = getMaxSets(quizType);
    const questions = getQuestionsForType(quizType);
    const quizTypeName = quizType === 'coding' ? 'Coding Convention' : 'SOLID Principles';
    
    return (
      <div className="app">
        <div className="quiz-container home-container">
          <div className="home-header">
            <button className="back-button" onClick={handleRestart}>
              ← Back to Home
            </button>
            <h1>{quizTypeName} Quiz</h1>
            <p className="home-subtitle">{questions.length} questions available</p>
          </div>

          <div className="quiz-options">
            <h2>Choose Question Set (50 questions each)</h2>
            <div className="quiz-set-buttons">
              {Array.from({ length: maxSets }, (_, i) => i + 1).map((setNum) => {
                const startQ = (setNum - 1) * 50 + 1;
                const endQ = Math.min(setNum * 50, questions.length);
                return (
                  <button key={setNum} className="set-button" onClick={() => startQuiz(setNum)}>
                    <span className="set-icon">{setNum}</span>
                    <span className="set-title">Set {setNum}</span>
                    <span className="set-desc">Questions {startQ}-{endQ}</span>
                  </button>
                );
              })}
            </div>
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
                <span className="detail-label">Type</span>
                <span className="detail-value">{selectedHistoryItem.quizTypeName}</span>
              </div>
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
                  {answer.explanation && (
                    <div className="explanation-review">
                      <strong>Giải thích:</strong>
                      <p>{answer.explanation}</p>
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
    const answeredArray = Object.values(answeredQuestions);
    const answeredCount = answeredArray.length;
    const score = answeredArray.filter(a => a.isCorrect).length;
    const incorrectCount = answeredCount - score;
    const percentage = ((score / quizQuestions.length) * 100).toFixed(1);
    
    return (
      <div className="app">
        <div className="quiz-container result-container">
          <div className="result-header">
            <h1>Quiz Completed</h1>
            <p className="result-type">{quizType === 'coding' ? 'Coding Convention' : 'SOLID Principles'} - Set {currentSet}</p>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {quizQuestions.length}</span>
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
              Back to Home
            </button>
            <button className="view-history-button" onClick={() => viewHistoryDetail(lastQuiz)}>
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const answeredCount = getAnsweredCount();
  const currentScore = getScore();
  const quizTypeName = quizType === 'coding' ? 'Coding Convention' : 'SOLID Principles';

  return (
    <div className="app">
      <div className="quiz-container quiz-view">
        <div className="quiz-header">
          <div className="quiz-header-top">
            <h1>{quizTypeName} - Set {currentSet}</h1>
            <button className="finish-quiz-button" onClick={handleFinishQuizClick}>
              Kết thúc bài
            </button>
          </div>
          <div className="progress-info">
            <span className="question-counter">
              Đã làm: {answeredCount} / {quizQuestions.length} câu
            </span>
            <span className="current-score">Điểm: {currentScore} / {answeredCount || 1}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {showFinishConfirm && (
          <div className="confirm-dialog-overlay" onClick={handleCancelFinish}>
            <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
              <h3>Xác nhận kết thúc bài</h3>
              <p>Bạn có chắc chắn muốn kết thúc bài làm ngay bây giờ?</p>
              <p className="confirm-info">
                Đã làm: {answeredCount} / {quizQuestions.length} câu<br/>
                Điểm hiện tại: {currentScore} / {answeredCount || 1}
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

        <div className="all-questions-container">
          {quizQuestions.map((question, questionIndex) => {
            const answer = answeredQuestions[questionIndex];
            const questionNumber = (currentSet - 1) * 50 + questionIndex + 1;
            
            return (
              <div key={questionIndex} className="question-item">
                <div className="question-header">
                  <span className="question-number">Câu {questionNumber}</span>
                  {answer && (
                    <span className={`answer-status ${answer.isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                      {answer.isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                  )}
                </div>
                
                <div className="question-section">
                  <h2 className="question-text">{question.question}</h2>
                  
                  {question.code && (
                    <pre className="code-block">
                      <code>{question.code}</code>
                    </pre>
                  )}
                </div>

                <div className="options-section">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button
                      key={option}
                      className={getButtonClass(questionIndex, option)}
                      onClick={() => handleAnswerClick(questionIndex, option)}
                      disabled={answer !== undefined}
                    >
                      <span className="option-letter">{option}</span>
                      <span className="option-text">
                        {question.options[option]}
                      </span>
                      {answer && option === question.correctAnswer && (
                        <span className="check-icon">✓</span>
                      )}
                      {answer && option === answer.selected && option !== question.correctAnswer && (
                        <span className="cross-icon">✗</span>
                      )}
                    </button>
                  ))}
                </div>

                {answer && (
                  <div className={`feedback ${answer.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
                    <div className="feedback-header">
                      {answer.isCorrect ? (
                        <span className="feedback-text">Chính xác! Bạn đã trả lời đúng.</span>
                      ) : (
                        <span className="feedback-text">
                          Sai rồi! Đáp án đúng là <strong>{question.correctAnswer}</strong>
                        </span>
                      )}
                    </div>
                    {question.explanation && (
                      <div className="explanation">
                        <strong>Giải thích:</strong>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
