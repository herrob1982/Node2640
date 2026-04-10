-- Script para detectar duplicados en la tabla TipoCurso
-- Este script busca registros duplicados basados en CodigoTipoCurso y DescripcionTipoCurso

-- 1. Verificar duplicados por CodigoTipoCurso
SELECT CodigoTipoCurso, COUNT(*) AS CantidadDuplicados
FROM TipoCurso
WHERE EsActivo = 1
GROUP BY CodigoTipoCurso
HAVING COUNT(*) > 1
ORDER BY CantidadDuplicados DESC;

-- 2. Verificar duplicados por DescripcionTipoCurso
SELECT DescripcionTipoCurso, COUNT(*) AS CantidadDuplicados
FROM TipoCurso
WHERE EsActivo = 1
GROUP BY DescripcionTipoCurso
HAVING COUNT(*) > 1
ORDER BY CantidadDuplicados DESC;

-- 3. Ver duplicados completos (mismo código y descripción)
SELECT CodigoTipoCurso, DescripcionTipoCurso, COUNT(*) AS CantidadDuplicados
FROM TipoCurso
WHERE EsActivo = 1
GROUP BY CodigoTipoCurso, DescripcionTipoCurso
HAVING COUNT(*) > 1
ORDER BY CantidadDuplicados DESC;

-- 4. Script para eliminar duplicados (manteniendo el registro más antiguo)
-- CUIDADO: Ejecutar solo si se confirma que es correcto
/*
WITH Duplicados AS (
    SELECT IdTipoCurso,
           ROW_NUMBER() OVER (PARTITION BY CodigoTipoCurso, DescripcionTipoCurso ORDER BY FechaCreacion ASC) AS RowNum
    FROM TipoCurso
    WHERE EsActivo = 1
)
DELETE FROM Duplicados
WHERE RowNum > 1;
*/

-- 5. Para prevenir duplicados futuros, agregar índices únicos (ejecutar una vez)
-- ALTER TABLE TipoCurso ADD CONSTRAINT UQ_TipoCurso_Codigo UNIQUE (CodigoTipoCurso);
-- ALTER TABLE TipoCurso ADD CONSTRAINT UQ_TipoCurso_Descripcion UNIQUE (DescripcionTipoCurso);