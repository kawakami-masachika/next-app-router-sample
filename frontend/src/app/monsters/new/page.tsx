'use client';
import { useState } from 'react';

export default function NewMonsterForm() {
  const [formData, setFormData] = useState({
    name: '',
    kind: 'reptile',
    level: 'in_training_1',
    category: 'unknown',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    await fetch('http://localhost:5173/api/monster', {
      method: 'POST', body: JSON.stringify(formData)
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md space-y-4">
      <h2 className="text-xl font-bold">Create New Monster</h2>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Kind Field */}
      <div>
        <label htmlFor="kind" className="block font-medium mb-1">
          Kind:
        </label>
        <select
          id="kind"
          name="kind"
          value={formData.kind}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="reptile">Reptile</option>
        </select>
      </div>

      {/* Level Field */}
      <div>
        <label htmlFor="level" className="block font-medium mb-1">
          Level:
        </label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="in_training_1">In Training 1</option>
          <option value="in_training_2">In Training 2</option>
          <option value="rookie">Rookie</option>
          <option value="champion">Champion</option>
          <option value="ultimate">Ultimate</option>
          <option value="mega">Mega</option>
        </select>
      </div>

      {/* Category Field */}
      <div>
        <label htmlFor="category" className="block font-medium mb-1">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="unknown">Unknown</option>
          <option value="vaccine">Vaccine</option>
          <option value="data">Data</option>
          <option value="virus">Virus</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {/* Message */}
      {message && <p className="text-center text-red-500 mt-2">{message}</p>}
    </form>
  );
}
