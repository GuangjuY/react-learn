import {Pagination, Table} from "antd";
import {useEffect, useState} from "react";

export default function DataTable() {

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setDataSource(data);
        }
        fetchData().then(r => console.log(r))
    }, []);


    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户id',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: '标题1',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '内容',
            dataIndex: 'body',
            key: 'body',
        },
    ];

    // 分页配置
    const paginationConfig = {
        current: 1, // 当前页码
        pageSize: 15, // 每页显示的数据条数
        total: dataSource.length, // 数据总数
        onChange: (page, pageSize) => {
            console.log('Page:', page, 'PageSize:', pageSize);
            // 处理页码变化逻辑
        },
    };

    return (
        <>
            <Table dataSource={dataSource} columns={columns} bordered={true} pagination={paginationConfig}/>
        </>
    )
}