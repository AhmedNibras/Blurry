import "./UserList.css";
import { userRows } from '../../../dummyData';
import { useState } from "react";
import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';


export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
          field: 'user',
          headerName: 'User',
          width: 200, renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.user}
              </div>
                );}
    },

    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
    },
    {
      field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <>
                <button className="userListEdit">Edit</button>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
    }
  ];
    

  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
      />
    </div>
  );

}



