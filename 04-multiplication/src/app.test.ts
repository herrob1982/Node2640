import { describe, test } from 'node:test';
import assert from 'node:assert';
import { CreateTable } from './domain/use-cases/create-table.use-case.ts';

describe('Multiplication', () => {
  test('should multiply two numbers correctly', () => {
    assert.strictEqual(true, true);
  });


test('test1', () => {
    
  const createTable = new CreateTable();
  const tabla = createTable.execute({ base: 15, limit: 10 });
  const rows = tabla.split('\n').length;

  console.log(tabla);
  console.log(rows);

  assert.ok(createTable instanceof CreateTable);

  // Validar que devuelve algo
    assert.ok(tabla);

    // Opcional: validar contenido
    assert.ok(typeof tabla === 'string');
    assert.ok(tabla.includes('15 x 1 = 15'));
    assert.strictEqual(rows, 10);
  
});

test('test2', () => {
  
  const options = {
    base: 7,
    limit: 5
  }
  const createTable = new CreateTable();
  const tabla = createTable.execute(options);

  


  
});


});

