import React from 'react';
import { Guest } from '../Guest/Guest';

export const GuestList = (props) => {


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.guests.length > 0 ? (
                        props.guests.map(guest => (
                            <tr key={guest.id}>
                                <td>
                                    <Guest guest={guest} />
                                </td>
                                <td className="align-middle">
                                    <button type="button" className="btn btn-warning mr-2" onClick={() => props.editGuest(guest)}>Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => props.deleteGuest(guest.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No Guests</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}