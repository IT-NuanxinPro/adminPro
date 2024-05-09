<template>
    <div class="wrapper-content">
        <el-form :inline="true" :model="searchData" class="search-form">
            <el-form-item>
                <el-input v-model="searchData.title" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="searchData.introduce" placeholder="请输入详情"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="dataList"
            border
            style="width: 100%"
            :header-cell-style="{ background: '#fafafa', color: '#606266' }"
        >
            <el-table-column prop="id" label="序号" align="center" width="180"></el-table-column>
            <el-table-column prop="title" label="名称" align="center" width="180"></el-table-column>
            <el-table-column prop="introduce" label="详情" align="center"></el-table-column>
        </el-table>
        <el-pagination
            class="pagination"
            background
            layout="sizes, prev, pager, next"
            :total="searchData.total"
            :page-size="searchData.pageSize"
            :page-sizes="[5, 10, 15, 20]"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        />
    </div>
</template>

<script setup lang="ts">
import { getProjectList } from '@/api/project';
interface IProject {
    id: number;
    userId: string;
    title: string;
    introduce: string;
}

const tableData = ref<IProject[]>([]);
const searchData = reactive({
    title: '',
    introduce: '',
    currentPage: 1,
    pageSize: 5,
    total: 0
});

const fetchData = () => {
    getProjectList().then((res) => {
        tableData.value = res.data;
        searchData.total = res.data.length;
    });
};

fetchData();

// 实际展示的数据
let dataList = computed(() => {
    return tableData.value.slice(
        (searchData.currentPage - 1) * searchData.pageSize,
        searchData.currentPage * searchData.pageSize
    );
});

const handleCurrentChange = (page: number) => {
    searchData.currentPage = page;
};

const handleSizeChange = (pageSize: number) => {
    searchData.pageSize = pageSize;
};

const onSearch = () => {
    let res: IProject[] = [];
    if (searchData.title || searchData.introduce) {
        if (searchData.title) {
            res = tableData.value.filter((item) => item.title.includes(searchData.title));
        }
        if (searchData.introduce) {
            res = tableData.value.filter((item) => item.introduce.includes(searchData.introduce));
        }
    } else {
        res = tableData.value;
    }
    searchData.currentPage = 1;
    searchData.total = res.length;
    tableData.value = res;
};

watch([() => searchData.title, () => searchData.introduce], () => {
    if (!searchData.title && !searchData.introduce) {
        fetchData();
    }
});
</script>

<style lang="less" scoped>
.wrapper-content {
    display: flex;
    flex-direction: column;

    .pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }
}
</style>
