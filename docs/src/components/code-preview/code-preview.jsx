import React from 'react';
import classNames from 'classnames';
import JsxParser from 'react-jsx-parser';
import { CodePreviewDisplay, CodePreviewBlock } from '../code-preview';
import './code-preview.scss';

const CodePreview = props => {
  const { codeString, bgColor, fullWidth } = props;

  const parseCode = string => {
    return <JsxParser renderInWrapper={false} jsx={string} />;
  };

  const cssClasses = {
    codePreview: classNames(`CodePreview`),
  };

  return (
    <div className={cssClasses['codePreview']}>
      <CodePreviewDisplay fullWidth={fullWidth} bgColor={bgColor}>
        {parseCode(codeString)}
      </CodePreviewDisplay>
      <CodePreviewBlock {...props} />
    </div>
  );
};

export default CodePreview;