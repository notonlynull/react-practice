import { useState } from "react";
import './accordion.css'
export default function Accordion({title, content}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        {/* Mostra un simbolo per indicare apertura o chiusura */}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {/* Mostra il contenuto solo se isOpen è true */}
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}
