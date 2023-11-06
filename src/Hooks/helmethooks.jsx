import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmethook = ({title}) => {
  return(
    <Helmet>
    <title>{title}</title>
  </Helmet>
  );
};

export default helmethook;