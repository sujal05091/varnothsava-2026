export default function TestComponent() {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>✅ React is Working!</h1>
      <p>If you can see this, React has successfully loaded.</p>
      <p style={{ marginTop: '20px', color: '#4ade80' }}>Server Status: Connected</p>
    </div>
  );
}
