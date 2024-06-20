import React, { useState, useEffect } from 'react';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // useEffect to initialize form data
  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required';

    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is invalid';

    if (!formData.age) validationErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) validationErrors.age = 'Age must be a number greater than 0';

    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) validationErrors.guestName = 'Guest Name is required';

    setErrors(validationErrors);

    // Return true if there are no validation errors
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      setSubmittedData(formData);
      setFormData(initialFormData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span>{errors.age}</span>}
        </div>

        <div className="form-group">
          <label>Are you attending with a guest?</label>
          <div className="inline-group">
            <input type="radio" id="yes" name="attendingWithGuest" value="Yes" checked={formData.attendingWithGuest === 'Yes'} onChange={handleChange} />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="attendingWithGuest" value="No" checked={formData.attendingWithGuest === 'No'} onChange={handleChange} />
            <label htmlFor="no">No</label>
          </div>
        </div>

        {formData.attendingWithGuest === 'Yes' && (
          <div className="form-group">
            <label>Guest Name:</label>
            <input type="text" name="guestName" value={formData.guestName} onChange={handleChange} />
            {errors.guestName && <span>{errors.guestName}</span>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="summary">
          <h2>Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Attending with Guest:</strong> {submittedData.attendingWithGuest}</p>
          {submittedData.attendingWithGuest === 'Yes' && (
            <p><strong>Guest Name:</strong> {submittedData.guestName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
