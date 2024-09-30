<input 
  type="text" 
  placeholder="Filtrar por región o nombre del plan"
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  style={{
    width: '100%', 
    padding: '0.75rem', 
    marginBottom: '1rem', 
    border: '1px solid #ccc', 
    borderRadius: '4px', 
    fontSize: '1rem'
  }}
/>
