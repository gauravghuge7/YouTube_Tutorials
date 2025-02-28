
class linear_search {


   public static int linear(int[] nums, int target) {

      for(int i=0; i<nums.length; i++) {

         if(target == nums[i]) {
            return i;
         }
      }

      return -1;
   }

   public static void main(String[] args) {

      int[] nums = {1, 2, 3, 4, 5, 6, 7, 8};


      int ans = linear(nums, 7);    // 6 

      System.out.println("=> "+ans);
   }

}