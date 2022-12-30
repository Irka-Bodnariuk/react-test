import { BackLink } from 'components/BackLink/BackLink';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {product.id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          quaerat facere odit dolorum ipsam tempora optio ducimus est suscipit
          enim incidunt repudiandae, vero quo nesciunt aperiam obcaecati quam
          reprehenderit dignissimos?
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;
