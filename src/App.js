
function App() {
  return (
    <div>
      <h1>Hi, I'm Priscila</h1>
      <img src="/images/IMG-20230326-WA0016(1).jpg" alt='Image of Priscila' style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
      <h2>About Me</h2>
      <p data-testid="biography" style={{ fontFamily: 'monospace' }}>
        _____________________________________
        _____________________________________
        _____________________________________
        _____________________________________
      </p>
      <a className='link-to-github' href="https://github.com/P-RF" aria-label='GitHub' style={{ marginRight: '1rem' }}>GitHub</a>
      <a className='link-to-linkedin' href="https://www.linkedin.com/in/priscilarf/" aria-label='LinkedIn'>LinkedIn</a>
    </div>
  );
}

export default App;
