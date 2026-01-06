* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    padding: 30px;
    overflow: hidden;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #667eea;
}

header h1 {
    color: #2d3748;
    font-size: 2.8rem;
    margin-bottom: 10px;
}

header h1 i {
    color: #e53e3e;
    margin-right: 15px;
}

.subtitle {
    color: #718096;
    font-size: 1.1rem;
}

/* 游戏控制区域 */
.game-controls {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
    padding: 25px;
    background: #f7fafc;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.difficulty-selector, .game-info {
    flex: 1;
    min-width: 300px;
}

.difficulty-selector h3, .game-info h3 {
    color: #4a5568;
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.difficulty-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.difficulty-btn {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    background: #e2e8f0;
    color: #4a5568;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.difficulty-btn:hover {
    background: #cbd5e0;
    transform: translateY(-2px);
}

.difficulty-btn.active {
    background: #667eea;
    color: white;
    box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);
}

.game-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.info-box {
    background: white;
    padding: 12px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    min-width: 150px;
}

.info-box i {
    color: #667eea;
    font-size: 1.2rem;
}

.restart-btn {
    padding: 12px 25px;
    background: #48bb78;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
}

.restart-btn:hover {
    background: #38a169;
    transform: translateY(-2px);
}

/* 游戏棋盘 */
.game-container {
    background: #f7fafc;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
}

.game-board {
    display: grid;
    gap: 2px;
    background: #cbd5e0;
    padding: 3px;
    border-radius: 5px;
}

.cell {
    width: 35px;
    height: 35px;
    background: #e2e8f0;
    border: 2px outset #a0aec0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease;
}

.cell:hover {
    background: #cbd5e0;
}

.cell.revealed {
    background: #edf2f7;
    border: 1px solid #a0aec0;
}

.cell.mine {
    background: #fed7d7;
    color: #c53030;
}

.cell.flagged {
    color: #e53e3e;
}

.cell.mine.revealed {
    background: #fc8181;
    color: white;
}

/* 数字颜色 */
.cell[data-number="1"] { color: #4299e1; }
.cell[data-number="2"] { color: #48bb78; }
.cell[data-number="3"] { color: #e53e3e; }
.cell[data-number="4"] { color: #805ad5; }
.cell[data-number="5"] { color: #d69e2e; }
.cell[data-number="6"] { color: #38b2ac; }
.cell[data-number="7"] { color: #000; }
.cell[data-number="8"] { color: #718096; }

/* 计分板 */
.scoreboard {
    background: #f7fafc;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.scoreboard h3 {
    color: #4a5568;
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.score-list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.score-item {
    flex: 1;
    min-width: 200px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.score-difficulty {
    font-weight: 600;
    color: #4a5568;
    margin-right: 10px;
}

.reset-btn {
    padding: 10px 20px;
    background: #fc8181;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
}

.reset-btn:hover {
    background: #f56565;
}

/* 游戏说明 */
.instructions {
    background: #f7fafc;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.instructions h3 {
    color: #4a5568;
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.instructions ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
}

.instructions li {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.instructions li i {
    color: #667eea;
    margin-right: 10px;
    width: 20px;
}

footer {
    text-align: center;
    padding-top: 20px;
    border-top: 2px solid #e2e8f0;
    color: #718096;
    font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .game-controls {
        flex-direction: column;
    }
    
    .cell {
        width: 30px;
        height: 30px;
        font-size: 1rem;
    }
    
    header h1 {
        font-size: 2rem;
    }
}

/* 游戏状态提示 */
#game-status {
    font-weight: 600;
    color: #48bb78;
}

#game-status.game-over {
    color: #e53e3e;
}

#game-status.game-won {
    color: #d69e2e;
}