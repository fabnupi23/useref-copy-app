import React, { useState, useRef } from 'react'

function CopyApp() {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = () =>{
        const input = inputRef.current;
        input.select();
        document.execCommand('copy');

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

  return (
    <div>
        <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleCopy}>Copiar Texto</button>
        { isCopied && <h1>Copiado</h1>}
        
    </div>
  )
}

export { CopyApp };