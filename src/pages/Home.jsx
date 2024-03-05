import { Helmet } from "react-helmet-async";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    return (
      
      <div style={styles.container}>
        
      <Helmet>
        <title>Home</title>
      </Helmet>
      
        <h1 style={styles.title}>
        Welcome page of the phone book
          <span  role="img" aria-label="Greeting icon" style={{ fontSize: '60px' }}>
            💁‍♀️
          </span>
        </h1>
      </div>
    );
  }
  