/*
 
You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building i to building i+1 (0-indexed),

If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

Example 1:


Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders.
Example 2:

Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
Output: 7
Example 3:

Input: heights = [14,3,19,3], bricks = 17, ladders = 0
Output: 3
 

Constraints:

1 <= heights.length <= 105
1 <= heights[i] <= 106
0 <= bricks <= 109
0 <= ladders <= heights.length

*/

package com.leetcode.project_1642_furthest_building_you_can_reach;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;





public class Solution1642 {

    public static void main(String[] args) throws Exception {

        Scanner scan = new Scanner(System.in);

        System.out.println("heights: ");
        int[] heights = Arrays.stream(scan.nextLine()
                                          .split(","))
                                          .mapToInt(Integer::parseInt)
                                          .toArray();
        
        System.out.println("bricks: ");
        int bricks = scan.nextInt();

        System.out.println("ladders: ");
        int ladders = scan.nextInt();

        scan.close();
        
        System.out.println(Arrays.toString(heights) + " " + bricks + " " + ladders);
        
        System.out.println(furthestBuilding(heights, bricks, ladders));
    }
    

    public static int furthestBuilding(int[] heights, int bricks, int ladders) {
        
        int FarthestBuilding = 0;
        

        /* Generate height increase 2D list array with original building numbers and height increases to buildings. */
        
        ArrayList<ArrayList<int[]>> twoCopiesOfHeightDiffs = new ArrayList<ArrayList<int[]>>(0);
        
        twoCopiesOfHeightDiffs = genTwoCopiesOfHeightDiffs(heights);
        
        @SuppressWarnings("unused")
		ArrayList<int[]> heightDiffs = twoCopiesOfHeightDiffs.get(0);
        
        @SuppressWarnings("unused")
		ArrayList<int[]> heightDiffsCopy = twoCopiesOfHeightDiffs.get(1);
        
        
        /* sort copy of height increase 2D list array by heights. */
        

        

        
        /* Add ladders to height increases starting with the set of the biggest height differences and successively move down by one height difference and for each set of height differences, iterate through the height difference list array adding successive brick values, skipping jumps with ladders until maximum value for farthest building reached. */
        
        




        return FarthestBuilding;
    }


    private static ArrayList<ArrayList<int[]>> genTwoCopiesOfHeightDiffs(int[] heights){

        //initialize array for height differences and array locations
        ArrayList<int[]> heightDiffs = new ArrayList<int[]>(0);
        ArrayList<int[]> heightDiffsCopy = new ArrayList<int[]>(0);

        //iterate through array of heights and generate array list of height differences
        for (int i = 0; i < heights.length - 1; i++){
            
            int[] oneBuildingHeightDiff = { i, heights[i + 1] - heights[i] };

            	heightDiffs.add(oneBuildingHeightDiff);
            	heightDiffsCopy.add(oneBuildingHeightDiff);

        }

        ArrayList<ArrayList<int[]>> twoCopiesOfHeightDiffs = new ArrayList<ArrayList<int[]>>(0);
        
        twoCopiesOfHeightDiffs.add(heightDiffs);
        twoCopiesOfHeightDiffs.add(heightDiffsCopy);
        
        
        return twoCopiesOfHeightDiffs;
    }

    
    @SuppressWarnings("unused")
	private static ArrayList<int[]> sortHeightDiffCopy(ArrayList<int[]> heightDiffsCopy){
    	
    		ArrayList<int[]> sortedHeightDiffsCopy = new ArrayList<int[]>(0);
    		
    		
    		
    	
    		return sortedHeightDiffsCopy;
    }

}

	


