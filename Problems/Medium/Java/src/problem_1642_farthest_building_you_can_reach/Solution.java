package problem_1642_farthest_building_you_can_reach;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) throws Exception {

        int bricks;
        int ladders;
        int[] heights;

        Scanner scan = new Scanner(System.in);

        System.out.print("bricks: ");
        bricks = scan.nextInt();

        System.out.print("ladders: ");
        ladders = scan.nextInt();

        System.out.print("heights: ");
        heights = Arrays.stream(scan.nextLine()
                                          .trim()
                                          .split(" "))
                                          .filter(x -> !x.equals(""))
                                          .mapToInt(Integer::parseInt)
                                          .toArray();
        scan.close();

        System.out.println(heights + " " + bricks + " " + ladders);
    }

    public static int furthestBuilding(int[] heights, int bricks, int ladders) {
        
        int FarthestBuilding = 0;

        //sort 

        //calculate total height difference
        ArrayList<Integer> heightIncreaseArray = generateHeightIncreaseListArray(heights);



        return FarthestBuilding;
    }


    private static ArrayList<Integer> generateHeightIncreaseListArray(int[] heights){

        //initialize sum of height increases
        ArrayList<Integer> heightIncreaseArrayList = new ArrayList<Integer>(0);

        //iterate through array of heights and add up all positive height increases
        for (int i = 0; i < heights.length - 1; i++){

            int heightDifference = heights[i + 1] - heights[i];
            
            if (heightDifference > 0){

                heightIncreaseArrayList.add(heightDifference);
            }
        }

        return heightIncreaseArrayList;
    }



}

