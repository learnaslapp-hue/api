import pool from '../db/db.js';
import camelcaseKeys from 'camelcase-keys';

export async function getByUserId(userId) {
  const sql = `
    SELECT *
    FROM dbo."QuizStatus"
    WHERE "UserId" = $1
    LIMIT 1;
  `;
  const result = await pool.query(sql, [userId]);
  if (result.rows.length === 0) return null;
  return camelcaseKeys(result.rows[0]);
}

export async function saveQuizStatus(
  userId,
  currentLevel,
  currentHighScore,
  completedQuiz,   // integer[]
  currentQuizId
) {
  const sql = `
    INSERT INTO dbo."QuizStatus"
      ("UserId", "CurrentLevel", "CurrentHighScore", "CompletedQuiz", "CurrentQuizId")
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT ("UserId") DO UPDATE
      SET "CurrentLevel"      = EXCLUDED."CurrentLevel",
          "CurrentHighScore"  = EXCLUDED."CurrentHighScore",
          "CompletedQuiz"     = EXCLUDED."CompletedQuiz",
          "CurrentQuizId"     = EXCLUDED."CurrentQuizId"
    RETURNING "UserId", "CurrentLevel", "CurrentHighScore", "CompletedQuiz", "CurrentQuizId";
  `;
  const params = [userId, currentLevel, currentHighScore, completedQuiz, currentQuizId];
  const result = await pool.query(sql, params);
  return camelcaseKeys(result.rows[0]);
}
