import { useNavigate } from 'react-router-dom';

// Custom hook to handle navigation between pages
export function withNavigation(Component: any) {
  return (props: any) => <Component {...props} navigate={useNavigate()} />
};