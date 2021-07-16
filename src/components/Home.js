export default function Home() {
    return (
            <div style={{width:"35%"}}>
                <button onClick={validar}>Validar Token</button>
            </div>
            
        );
    
}

function validar(ev) {
    alert('Token válido por 5 min.')
    window.location.reload();
  } 