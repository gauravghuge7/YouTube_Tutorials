public class ternary_search {
   

   public static int ternary(int[] nums, int target) {


      int start = 0;
      int end = nums.length - 1;

      while(start <= end) {

         int mid1 = start + (end - start) / 3;

         int mid2 = end - (end - start) / 3;

         if(nums[mid1] == target) return mid1;

         if(nums[mid2] == target) return mid2;

         if(target < mid1) {
            end = mid1 -1;
         }
         else if(nums[mid2] < target) {
            start = mid2 + 1;
         }
         else {
            start = mid1 + 1;
            end = mid2 - 1;
         }

      }


      return -1;
   }

   public static void main(String[] args) {

      int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};


      System.out.println(ternary(arr, 8));   // 7
   }
}
