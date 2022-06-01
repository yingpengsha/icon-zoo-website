import { fetchIconList } from '@/apis/icon'
import React, { useEffect, useState } from 'react'

interface Props {
  searchName: string
}

const IconsShow: React.FC<Props> = (props) => {
  const { searchName } = props

  // ======================== list query ========================
  const [list, setList] = useState<API.ICON.IconItemResponse[]>([])
  const [total, setTotal] = useState(0)

  const [loading, setLoading] = useState(false)
  const [listQuery, setListQuery] = useState<API.ListQuery>({
    pageNo: 1,
    pageSize: 10
  })

  const getList = () => {
    setLoading(true)
    fetchIconList({
      ...listQuery,
      name: searchName
    })
      .then(res => {
        setList(res.data.data.map(item => ({...item, path: `http://localhost:4000/file/${item.path}`})))
        setTotal(res.data.total)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getList()
  }, [])
  

  return (
    <div className="flex gap-3">
      {list.map(item => <img width="100px" key={item._id} src={item.path} />)}
    </div>
  )
}

export default IconsShow;