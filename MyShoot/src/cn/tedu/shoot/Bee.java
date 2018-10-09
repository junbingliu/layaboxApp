package cn.tedu.shoot;
import java.util.Random;

/** 小蜜蜂: 是飞行物，也是奖励 */
public class Bee extends FlyingObject implements Award {
	private int xSpeed = 1; //x坐标移动速度
	private int ySpeed = 2; //y坐标移动速度
	private int awardType;  //奖励的类型(0或1)
	/** 构造方法 */
	public Bee(){
		image = ShootGame.bee;      //图片
		width = image.getWidth();   //宽
		height = image.getHeight(); //高
		Random rand = new Random(); //随机数对象
		x = rand.nextInt(ShootGame.WIDTH-this.width); //x:0到(窗口宽-敌机宽)之内的随机数
		y = -this.height; //y:负的小蜜蜂的高
		awardType = rand.nextInt(2); //0到1之间的随机数
	}
	
	/** 重写getType()--获取奖励 */
	public int getType(){
		return awardType; //返回奖励的类型
	}

	/** 重写step()--走一步 */
	public void step(){
		x += xSpeed; //x+(向左或向右)
		y += ySpeed; //y+(向下)
		if(x>=ShootGame.WIDTH-this.width){ //x>=(窗口宽-蜜蜂宽)时
			xSpeed = -1; //+(-1)，为向左
		}
		if(x<=0){ //x<=0时
			xSpeed = 1; //+(1)，为向右
		}
	}

	/** 重写outOfBounds()--检查是否越界 */
	public boolean outOfBounds(){
		return this.y>=ShootGame.HEIGHT; //小蜜蜂的y>=窗口的高，即为越界了
	}
}











