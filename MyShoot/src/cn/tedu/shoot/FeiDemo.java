package cn.tedu.shoot;

public class FeiDemo {
	public static void main(String[] args) {
		/*
		 * 1.递归应用率极低，性能的急剧下降
		 * 2.原则上:能不用就不用，非它不可时再用
		 */
		
		//斐波那契数列:
		//  1 1 2 3 5 8 13 21 34 55 89
		int num = f(7);
		System.out.println(num);
	}
	
	/*
	 * 递归两个特点:
	 * 1.自己调自己
	 * 2.一定会有一个结束条件
	 */
	public static int f(int n){
		if(n==1 || n==2){
			return 1;
		}else{
			return f(n-1)+f(n-2);
		}
		/*
		 * f9=f8+f7------------------34
		 * f8=f7+f6------------------21
		 * f7=f6+f5------------------13
		 *    f6=f5+f4---------------8
		 *       f5=f4+f3------------5
		 *          f4=f3+f2---------3
		 *             f3=f2+f1------2
		 *                1  1              
		 */
	}
	
	
	
	
	
}





















