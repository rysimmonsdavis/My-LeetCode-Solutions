package problem_1195_fizz_buzz_multithreaded;

import java.util.function.IntConsumer;

public class FizzBuzz {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}


    private int n;

    public FizzBuzz(int n) {
        this.n = n;
        
        
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 != 0) {
                
            };
        };
    }

    // printFizz.run() outputs "fizz".
    public String fizz(Runnable printFizz) throws InterruptedException {
        return "Fizz";
    };

    // printBuzz.run() outputs "buzz".
    public String buzz(Runnable printBuzz) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            if (i % 3 != 0 && i % 5 != 0) {
                return "Buzz";
            };
        };
		return null;
    };

    // printFizzBuzz.run() outputs "fizzbuzz".
    public String fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                return "FizzBuzz";
            };
        };
		return null;
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public String number(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            if (i % 3 != 0 && i % 5 != 0) {
                return String.valueOf(i);
            };
        };
		return null;
    }
}