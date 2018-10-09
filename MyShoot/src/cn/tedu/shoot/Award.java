package cn.tedu.shoot;
/** 奖励 */
public interface Award {
	public int DOUBLE_FIRE = 0; //火力值
	public int LIFE = 1; //命
	
	/** 获取奖励类型 返回0代表火力值 返回1代表命 */
	public int getType();
}











