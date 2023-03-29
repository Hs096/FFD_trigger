// https://www.bejson.com 检测json格式、压缩json文本方便trn使用
//指定ID实体画90度扇形-顺劈
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
//指定ID实体画圈 范围6.05-钢铁，分散
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

//指定ID实体画圈，并且随时间增加圈的大小-扩散特效
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": {
			"key": "add",
				"values": [3, {
					"key": "add",
					"values": [6, {
						"key": "mul",
						"values": [{
							"key": "remain"
						}, -1]
					}]
				}]


		}
	},
	"pos": {
		"key": "actor_pos",
			"id": 1073923584
	},
	"duration": 2.5
}
//指定坐标画圈-AOE
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
//对指定ID实体距离最远的实体画圈-地火引导
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

//对指定ID实体距离最远的实体画圈（且该目标不持有指定buff）-地火引导
{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": 8
	},
	"pos": {
		"key": "actor_pos",
			"id": {
			"key": "player_by_distance_idx",
				"src": 1073923584,
					"idx": {
				"key": "if",
					"cond": {
					"key": "actor_has_status",
						"id": {
						"key": "player_by_distance_idx",
							"src": 1073923584,
								"idx": -1
					},
					"status_id": 1578
				},
				"false": -1,
					"true": -3
			}
		}
	},
	"duration": 15
}

{
	"cmd": "add_omen",
		"color": "enemy",
			"shape_scale": {
		"key": "circle",
			"range": 8
	},
	"pos": {
		"key": "actor_pos",
			"id": {
			"key": "player_by_distance_idx",
				"src": 1073923584,
					"idx": {
				"key": "if",
					"cond": {
					"key": "actor_has_status",
						"id": {
						"key": "player_by_distance_idx",
							"src": 1073923584,
								"idx": -1
					},
					"status_id": 1578
				},
				"false": -1,
					"true": -3
			}
		}
	},
	"duration": 15
}
//指定两个ID实体连线-传毒
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
//长度为两个指定实体的距离，面向为两个指定实体的相对面向的矩形-引导直线AOE
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
