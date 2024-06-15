import {Pagination, Table} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DataTable() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    const fetchData = async (page, pageSize) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: pageSize,
                },
            });
            setData(response.data);
            setTotal(parseInt(response.headers['x-total-count']));
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        fetchData(page, pageSize).then(r => console.log(r));
    }, [page, pageSize]);


    const handleTableChange = (pagination) => {
        setPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
        },
    ];


    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey="id"
                onChange={handleTableChange}
            />
            <Pagination
                current={page}
                pageSize={pageSize}
                total={total}
                onChange={(page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                }}
                style={{marginTop: 20, textAlign: 'center'}}
            />
        </div>
    )
}