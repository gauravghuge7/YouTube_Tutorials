public class binary_search {
   
   
   public static int binary(int[] nums, int target) {

      /** 
       *   1) Create start and end pointers
       *   2) traverse whenever start <= end 
       *   3) check nums[mid] == target then return the mid index
       *   4)  target > nums[mid]  => start = mid + 1
       *   5)  else => end = mid -1;
       * 
      */

      int start =0;

      int end = nums.length - 1;

      while(start <= end) {

         int mid = start + (end - start) / 2;

         if(nums[mid] == target) return mid;

         if(nums[mid] < target) {
            start = mid + 1;
         }
         else {
            end = mid -1;
         }
      }


      return -1;
   }

   public static void main(String[] args) {
      
      /**
       *     Array must be sorted 
       */

       int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};

       System.out.println(binary(nums, 8));  // 7

      
   }
}
