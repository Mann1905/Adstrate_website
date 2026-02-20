import React from 'react';
import './typography.css';

const Typography: React.FC = () => {
  const exampleText = "Lorem ipsum dolor sit amet, consectetur";

  return (
    <div className="typography-page">
      <div className="typography-page__container container">
        <h1 className="typography-page__title">Typography Style Guide</h1>
        
        <div className="typography-page__list">
          <div className="typography-item">
            <span className="typography-item__label">Title/Heading 1</span>
            <h1 className="typography-item__example">{exampleText}</h1>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Blog Title</span>
            <div className="typography-item__example blog-title">{exampleText}</div>
          </div>

        
          <div className="typography-item">
            <span className="typography-item__label">Heading 2</span>
            <h2 className="typography-item__example">{exampleText}</h2>
          </div>

                    <div className="typography-item">
            <span className="typography-item__label">Heading 3</span>
            <h3 className="typography-item__example">{exampleText}</h3>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Paragraph</span>
            <p className="typography-item__example">{exampleText}</p>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Quotes</span>
            <div className="typography-item__example quotes">{exampleText}</div>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Leading</span>
            <div className="typography-item__example leading">{exampleText}</div>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Input Label</span>
            <label className="typography-item__example input-label">{exampleText}</label>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Input Placeholder</span>
            <input 
              type="text" 
              className="typography-item__example typography-item__input" 
              placeholder={exampleText}
              readOnly
            />
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Button Text</span>
            <button className="typography-item__example button-text">{exampleText}</button>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Link Text</span>
            <a href="#" className="typography-item__example link-text">{exampleText}</a>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Link Label</span>
            <a href="#" className="typography-item__example link-label">{exampleText}</a>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Micro Link Text</span>
            <a href="#" className="typography-item__example micro-link-text">{exampleText}</a>
          </div>

          
          <div className="typography-item">
            <span className="typography-item__label">Key Tags</span>
            <span className="typography-item__example key-tags">{exampleText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
