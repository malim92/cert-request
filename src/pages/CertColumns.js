export const CertColumns = [
    {
        header: 'Reference Number',
        accessorKey: 'reference_no',
        enableSorting: true,
    },
    {
        header: 'Address',
        accessorKey: 'address_to',
        enableSorting: true,
    },
    {
        header: "Purpose",
        accessorKey: 'purpose',
        enableColumnFilter: true,
        enableSorting: true,
    },
    {
        header: "Issue Date",
        accessorKey: 'issued_on',
        enableColumnFilter: true,
        Cell: ({ cell }) =>
      {
        if (cell.row.original.status !== 'Done') {
            return null;
          }
          else return cell.row.original.issued_on;
      },
    },
    {
        header: "Status",
        accessorKey: 'status',
        enableColumnFilter: true

    },
];