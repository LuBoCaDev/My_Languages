import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HelloWorld {
    public static void main(String[] args) {

        // Hello world

        System.out.println("Hello, Java!");

        // Variables

        String myString = "This is a string";
        myString = "Here I change the value of the string";
        System.out.println(myString);

        Integer myInt = 7;
        myInt = myInt + 4;
        System.out.println(myInt);
        System.out.println(myInt - 1);

        Double myDouble = 6.5;
        System.out.println(myDouble);

        Float myFloat = 6.5f;
        System.out.println(myFloat);

        System.out.println(myDouble + " " + myString + " " + myFloat + " " + myInt);

        Boolean myBoolean = true;
        myBoolean = false;
        System.out.println(myBoolean);

        myBoolean = null;
        System.out.println(myBoolean);

        // Constantes

        final String myConstant = "This is a constant string";

        // Control 

        myFloat = null;
        if (myFloat != null) {
            System.out.println(myFloat + 10);
            System.out.println("My Float is not null");
        } else {
            System.out.println("My Float is null");
        }

        if (myInt == 11) {
            System.out.println("myInt == 11");
        } else if (myInt == 12) {
            System.out.println("myInt == 12");
        } else {
            System.out.println("The value is neither 11 nor 12");
        }

        // Lists

        List<String> myList = new ArrayList();
        myList.add(myString);
        myList.add(myInt.toString());
        System.out.println(myList);

        // Maps

        Map<String, String> myMap = new HashMap();
        myMap.put("string", myString);
        myMap.put("int", myInt.toString());
        System.out.println(myMap);
        System.out.println(myMap.get("int"));

        // Loops

        for (int index = 0; index < myList.size(); index++) {
            System.out.println(myList.get(index));
        }

        // Classes

        HelloWorld myMain = new HelloWorld();
        System.out.println(myMain.myFunction(5, 2));
        System.out.println(myMain.myFunction(3, 126389));
    }

    // Functions

    public int myFunction(int myFirstNumber, int mySecondNumber) {
        return myFirstNumber + mySecondNumber;
    }

}