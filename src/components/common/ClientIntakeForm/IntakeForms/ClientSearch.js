//    WARNING!!!!!!!!!!!
// Commented out because it's not used anywhere in the application

// import React, { useEffect, useState } from 'react';
// import { Select } from 'antd';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import { client } from '../../../../state/actions';

// const ClientSearch = props => {
//   const options = [];
//   const [clientOptions, setClientOptions] = useState([]);
//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/api/clients/')
//       .then(response => {
//         console.log(response);
//         response.data.forEach(client => {
//           options.push({
//             label: `${client.first_name} ${client.last_name}`,
//             value: client.id,
//           });
//           console.log(options);
//         });
//         setClientOptions(options);
//       })
//       .catch(error => {
//         alert('ERROR ' + JSON.stringify(error));
//       });
//   }, []);

//   const handleSelect = client => {
//     props.setClient({ id: client.value, name: client.label, status: null });
//   };

//   return (
//     <div className="searchBarContainer">
//       <Select
//         showSearch
//         placeholder="Select a client"
//         optionFilterProp="children"
//         filterOption={(input, option) =>
//           option.children.toLowerCase().includes(input.toLowerCase())
//         }
//         options={clientOptions}
//         onSelect={(value, client) => handleSelect(client)}
//       ></Select>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     client: state.client,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setClient: clientData => dispatch(client.setClient(clientData)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ClientSearch);
