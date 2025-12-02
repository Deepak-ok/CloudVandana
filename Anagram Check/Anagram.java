import java.util.Arrays;
import java.util.Scanner;

public class Anagram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // User Input
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();

        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();

        // Check 
        boolean result = anagramsCheck(str1, str2);

        System.out.println("Is this word is anagram: " + result);
    }

    // Anagram Function
    public static boolean anagramsCheck(String s1, String s2) {
        // Remove spaces and convert to lowercase
        s1 = s1.replaceAll("\\s", "").toLowerCase();
        s2 = s2.replaceAll("\\s", "").toLowerCase();

        // they check the both lengh of sting
        if (s1.length() != s2.length()) {
            return false;
        }

     
        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();

        // Sort
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        // Compare 
        return Arrays.equals(arr1, arr2);
    }
}
