import React, { useState, useEffect } from 'react';

export const EditGuestForm = props => {

    const [guest, setGuest] = useState(props.currentGuest)

    const handleInputChanged = event => {
        const {name, value} = event.target;

        setGuest({...guest, [name]: value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.updateGuest(guest.id, guest);
    }

    useEffect(() => {
        setGuest(props.currentGuest);
    }, [props])

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" name="name" value={guest.name} className="form-control" onChange={handleInputChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input required type="text" name="street" value={guest.street} className="form-control" onChange={handleInputChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input required type="text" name="city" value={guest.city} className="form-control" onChange={handleInputChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input required type="text" name="state" value={guest.state} className="form-control" onChange={handleInputChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input required type="text" name="zip" value={guest.zip} className="form-control" onChange={handleInputChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input required type="text" name="phone" value={guest.phone} className="form-control" onChange={handleInputChanged}/>
            </div>

            <button className="btn btn-primary mr-2" type="submit">Update Guest</button>
            <button className="btn btn-secondary" onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}