function MyTable() {

  const data = [
    {id: 1, brand: 'Ford', model: 'Mustang'},
    {id: 2, brand: 'VW', model: 'Beetle'},
    {id: 3, brand: 'Tesla', model: 'Model S'},
  ];

  return(
    <table>
      {
        data.map(item => 
          <tr key={item.id}>
            <td>{item.brand}</td><td>{item.model}</td>
          </tr>
        )
      }
    </table>
  );
}

export default MyTable;