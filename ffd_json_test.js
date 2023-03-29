// https://www.bejson.com 检测json格式、压缩json文本方便trn使用
//指定ID实体画90度扇形
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "fan",
			"deg": 90,
				"range": 12
	},
	"pos": {
		"key": "actor_pos",
			"id": 1073923584
	},
	"facing": {
		"key": "actor_facing",
			"id": 1073923584
	},
	"duration": 2.5
}
//指定ID实体画圈 范围6.05
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": 6.05
	},
	"pos": {
		"key": "actor_pos",
			"id": 1073923584
	},
	"duration": 2.5
}
//指定坐标画圈
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": 6.05
	},
	"pos": [,,,],
	"duration": 7
}
//对指定ID实体距离最远的实体画圈
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": 6
	},
	"pos": {

		"key": "actor_pos",
			"id": {
			"key": "player_by_distance_idx",
				"src": 1073923584,
					"idx": -1
		}
	},
	"duration": 7
}
//指定两个ID实体连线
{
	"cmd": "add_line",
		"color": "enemy",
			"src": {
		"key": "actor_pos",
			"id": 1073923584
	},
	"dst": {
		"key": "actor_pos",
		"id": 1073923584
	},
	"width": 30,
	"duration": 10
}
//引导直线aoe，长度为两个指定实体的距离，面向为两个指定实体的相对面向
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "rect",
			"width": 20,
				"range": {
			"key": "actor_distance",
				"a1": 1073923584,
					"a2": 1073923584

		}
	},
	"pos": {
		"key": "actor_pos",
			"id": 1073923584
	},
	"facing": {
		"key": "actor_relative_facing",
			"src": 1073923584,
				"dst": 1073923584
	},
	"duration": 2.5
}
//清除所有画图
{
	"cmd": "destroy_omen",
		"id": -1
}
