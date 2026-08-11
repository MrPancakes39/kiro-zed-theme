-- Visual syntax-highlighting fixture
WITH active_users AS (
  SELECT
    u.id,
    u.email,
    COUNT(s.id) AS session_count,
    COALESCE(MAX(s.created_at), TIMESTAMP '1970-01-01 00:00:00') AS last_seen
  FROM public.users AS u
  LEFT JOIN public.sessions AS s ON s.user_id = u.id
  WHERE u.enabled = TRUE
    AND u.email LIKE '%@example.com'
    AND u.deleted_at IS NULL
  GROUP BY u.id, u.email
)
SELECT *
FROM active_users
WHERE session_count >= 3
ORDER BY last_seen DESC
LIMIT 10;
