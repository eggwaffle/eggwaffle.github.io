import {createElement, Fragment, useEffect, useState} from 'react'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
/*
export const truncateText = (text: string, maxNum: number) => {
  const textLength = text.length;
  return textLength > maxNum ? `${text.slice(0, maxNum)}...` : text;
};
*/

export const truncateText = (text, maxNum) => {
  const textLength = text.length;
  return textLength > maxNum ? `${text.slice(0, maxNum)}...` : text;
};

function useProcessor(text) {
  const [Content, setContent] = useState(Fragment)

  useEffect(() => {
    unified()
      .use(rehypeParse, {fragment: true})
      .use(rehypeReact, {createElement, Fragment})
      .process(text)
      .then((file) => {
        setContent(file.result)
      })
  }, [text])

  return Content
}

export function HtmlCompiler(text) {
  return useProcessor(text)
}
