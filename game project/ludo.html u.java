<!DOCTYPE html>
 <head>
    <body>
        import java.util.Random;
import java.util.Scanner;

public class LudoGame {
    private static final int NUM_PLAYERS = 2;
    private static final int BOARD_SIZE = 20;
    private static final int[] positions = new int[NUM_PLAYERS];
    private static final Random random = new Random();
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Welcome to Ludo Game!");

        boolean gameEnded = false;
        while (!gameEnded) {
            for (int player = 0; player < NUM_PLAYERS; player++) {
                System.out.println("Player " + (player + 1) + "'s turn.");
                int roll = rollDice();
                System.out.println("You rolled a " + roll + ".");
                movePlayer(player, roll);

                printBoard();

                if (positions[player] >= BOARD_SIZE) {
                    System.out.println("Player " + (player + 1) + " wins!");
                    gameEnded = true;
                    break;
                }
            }
        }
        scanner.close();
    }

    private static int rollDice() {
        return random.nextInt(6) + 1; // Roll a die (1-6)
    }

    private static void movePlayer(int player, int roll) {
        positions[player] += roll;
        if (positions[player] > BOARD_SIZE) {
            positions[player] = BOARD_SIZE; // Cap position to the board size
        }
    }

    private static void printBoard() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            boolean occupied = false;
            for (int player = 0; player < NUM_PLAYERS; player++) {
                if (positions[player] == i) {
                    System.out.print((player + 1) + " ");
                    occupied = true;
                }
            }
            if (!occupied) {
                System.out.print(". ");
            }
        }
        System.out.println();
    }
}

    </body>
 </head>

