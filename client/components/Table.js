"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Username",
    selector: "username",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Phone",
    selector: "phone",
    sortable: true,
  },
];

const Table = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedDirection, setSelectedDirection] = useState("ltr");
  const [searchText, setSearchText] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col) => col.selector)
  );
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.username.toLowerCase().includes(searchText.toLowerCase()) ||
      row.email.toLowerCase().includes(searchText.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleRowSelected = ({ selectedCount, allSelected }) => {
    if (allSelected) {
      setSelectedRows(filteredData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleDirectionChange = (event) => {
    setSelectedDirection(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleColumnToggle = (columnId) => {
    if (visibleColumns.includes(columnId)) {
      setVisibleColumns(visibleColumns.filter((col) => col !== columnId));
    } else {
      setVisibleColumns([...visibleColumns, columnId]);
    }
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
  };

  const dynamicColumns = columns.filter((col) =>
    visibleColumns.includes(col.selector)
  );

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Direction:</label>
        <select
          className="px-2 py-1 border rounded"
          value={selectedDirection}
          onChange={handleDirectionChange}
        >
          <option value="ltr">LTR</option>
          <option value="rtl">RTL</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2">Visible Columns:</label>
        {columns.map((col) => (
          <label key={col.selector} className="mr-4">
            <input
              type="checkbox"
              checked={visibleColumns.includes(col.selector)}
              onChange={() => handleColumnToggle(col.selector)}
            />{" "}
            {col.name}
          </label>
        ))}
      </div>
      <div className="mb-4">
        <label className="mr-2">Items per Page:</label>
        <input
          type="number"
          min="1"
          className="px-2 py-1 border rounded"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="mb-4 flex items-center">
          <div>
            <select className="px-2 py-1.5 border border-black rounded outline-0">
              <option value="-1">Bulk actions</option>
              <option value="edit">Edit</option>
              <option value="trash">Move to Trash</option>
            </select>
            <input
              type="submit"
              className="button action px-3 py-1 ml-2 border border-blue-500 rounded-md bg-white"
              value="Apply"
            />
          </div>
          <div>
            <select className="px-2 py-1.5 border border-black rounded outline-0 ml-2">
              <option selected="selected" value="0">
                All dates
              </option>
              <option value="202202">February 2022</option>
              <option value="202202">December 2021</option>
            </select>
            <select className="px-2 py-1.5 border border-black rounded outline-0 ml-2">
              <option selected="selected" value="0">
                All Categories
              </option>
              <option value="210">Audio</option>
              <option value="211">Business</option>
            </select>
            <input
              type="submit"
              className="button action px-3 py-1 ml-2 border border-blue-500 rounded-md bg-white"
              value="Filter"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1.5 border rounded outline-0"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        selectableRows
        selectableRowsComponentProps={{
          selectAllRowsItem: true,
        }}
        onSelectedRowsChange={handleRowSelected}
        pagination
        paginationPerPage={itemsPerPage}
        paginationRowsPerPageOptions={[10, 20, 50, 100]}
        paginationComponentOptions={{
          rowsPerPageText: "Rows per page:",
        }}
        highlightOnHover
        direction={selectedDirection}
      />
    </div>
  );
};

export default Table;
