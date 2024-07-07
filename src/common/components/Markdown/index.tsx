import React, { useState, useEffect } from 'react';
import markdownIt from 'markdown-it';

type MarkdownProps = {
  markdownString: string
}

const MarkdownRenderer = ({ markdownString }: { markdownString: string }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const md = markdownIt({
      html: false
    }); // 你可以在这里配置markdown-it选项  
    const html = md.render(markdownString);
    setHtmlContent(html);
  }, [markdownString]); // 当markdownString改变时触发  

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};


export default (props: MarkdownProps) => {
  const { markdownString } = props
  return <div>
    <MarkdownRenderer markdownString={markdownString} />
  </div>
}