package cn.tedu.shoot;

/** 子弹: 是飞行物 */
public class Bullet extends FlyingObject {
	private int speed = 3; //移动的速度
	/** 构造方法 */
	public Bullet(int x,int y){
		image = ShootGame.bullet;   //图片
		width = image.getWidth();   //宽
		height = image.getHeight(); //高
		this.x = x; //随着英雄机位置而定
		this.y = y; //随着英雄机位置而定
	}

	/** 重写step()--走一步 */
	public void step(){
		y-=speed; //y-(向上)
	}

	/** 重写outOfBounds()--检查是否越界 */
	public boolean outOfBounds(){
		return this.y<=-this.height; //子弹的y<=负的子弹的高，即为越界了
	}
}
















