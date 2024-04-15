// 这里是通俗的解释 详情请前往官方文档查阅
module.exports = {
    ignores: [(commit) => commit.includes('init')], // 忽略提交信息
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 信息以空格开头
        'body-leading-blank': [2, 'always'], // 信息以空格结尾
        'footer-leading-blank': [2, 'always'], // 信息最大长度
        'header-max-length': [2, 'always', 108], // 信息不能未空
        'subject-empty': [2, 'never'], // 信息类型不能未空
        'type-empty': [2, 'never'], // 提交信息的类型 下文有介绍
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能（feature）
                'fix', // 修补bug
                'perf', // 优化相关，比如提升性能、体验
                'style', // 仅仅修改了空格、格式缩进、逗号等，不改变代码逻辑
                'docs', // 文档更新
                'test', // 增加测试
                'refactor', // 重构
                'build', // 构建相关
                'ci', // CI 配置
                'chore', // 其他修改, 比如构建流程、依赖管理
                'revert', // 回滚
                'wip', // 正在进行中的工作
                'workflow', // 工作流相关文件
                'types', // 类型定义文件更改
                'release' // 发布版本
            ]
        ]
    }
};
