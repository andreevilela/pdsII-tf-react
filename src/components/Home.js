export default function Home() {
    return (
        
            <button onClick={validar}>Validar Token</button>
        );
    
}

function validar(ev) {
    alert('Token válido por 5 min.')
    window.location.reload();
  } 