import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/Accordion.module.scss';
import cx from 'classnames';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  icon?: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  onToggle,
  icon
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    onToggle?.(nextState);
  };

  return (
    <div className={cx(styles.item, { [styles.open]: isOpen })}>
      <button 
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {icon && (
          <span className={styles.icon} onClick={(e) => e.stopPropagation()}>
            {icon}
          </span>
        )}
        <span className={styles.title}>{title}</span>
        <span className={styles.arrow} aria-hidden="true">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 9L12 16L5 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div 
        className={styles.content}
        ref={contentRef}
        style={{ height: isOpen ? `${contentHeight}px` : '0' }}
      >
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={cx(styles.accordion, className)}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };
