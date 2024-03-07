#2 Kita dapat menggunakan fibonaci sequence.

Fibonacci sequence itu deret angka dimana setiap angka 
selanjutnya adalah hasil penjumlahan dari dua angka sebelumnya. 
Biasanya dimulai dengan 1, 1, dan seterusnya. 
Contohnya, [1, 1, 2, 3, 5, 8, 13].

Beberapa cara membuat fungsi fibonacci sequence
1. Loop
<code>
function generateFibonacciLoop(n) {
  const sequence = [1, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
</code>

2. Recursive
<code>
function generateFibonacciRecursive(n, sequence = [1, 1]) {
  if (sequence.length === n) {
    return sequence;
  }
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return generateFibonacciRecursive(n, sequence);
}
</code>


Penjelasan lebih lengkap dalam dunia matematika
https://www.mathsisfun.com/numbers/fibonacci-sequence.html
