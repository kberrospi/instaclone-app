import { useMatch } from 'react-router-dom';
import { useResolvedPath } from 'react-router-dom';

export const HelperLink = (props: any) => {
  
  const resolved = useResolvedPath(props);
  const match = useMatch({ path: resolved?.pathname, end: true });

  return {
    match
  };
};