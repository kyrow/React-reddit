import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {Title} from "../CardsList/Card/TextContent/Title";
import {TextContent} from "../CardsList/Card/TextContent";
import ReactDOM from "react-dom";
import {CommentForm} from "../CommentForm";

interface IPost {
  onClose ?:() => void
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    function handleClick(event:MouseEvent){
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }

    }

    document.addEventListener('click',handleClick)

    return()=>{
      document.removeEventListener('click',handleClick)
    }
  },[])

  const node = document.querySelector('#modal_root');
  if (!node) return null

  return ReactDOM.createPortal ((
<div className={styles.post} ref={ref}>
<TextContent/>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, cupiditate debitis dignissimos ea eius enim eum iusto nam nisi nobis nulla perferendis perspiciatis quaerat repellendus sapiente veniam voluptas! Sit.
  </p>
<CommentForm/>
</div>
  ), node);
}
