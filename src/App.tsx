import { useEffect, useState } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const messages = [
  "Hi Jomari",
  "Ang Pogi mo!",
  "Hotshot running in mind nonstop vertigo",
  "Curled plot whiskey in a teapot ethanol",
  "Burnin' like KELT-9b bright heavenly body",
  "Only music can define you and it sounds like ah",
  "D'amalfi in a bar Au in a goose",
  "A photo of me knocked Chuck point black smooth",
  "Ikaw ang minsan sa mga palagi",
  "Ang mitolohiya sa'yo'y maaari (hey)",
  "Shawty you don't need no makeup (ah)",
  "Brown-eyed chick northside beauty stand out",
  "Pretty pretty lady Big Bang doesn't make sense",
  "I see God in your face girl I mean it",
  "Marilag",
  "Ang himala'y sa'yo ibibintang",
  "Haven't felt so divine 'til I looked in your eyes",
  "I see my future",
  "Baby loving you saved me",
  "Dionela lang binabash"
];

const App = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (messageIndex >= messages.length || loading) return;

      setLoading(true); 

      setTimeout(() => {

        toast(`Message ${messageIndex + 1}: ${messages[messageIndex]}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          transition: Slide,
        });

        setMessageIndex((prevIndex) => prevIndex + 1);
        setLoading(false); 
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [messageIndex, loading]);

  return (
    <>
      <div style={{ 
        height: "200vh", 
        padding: "20px", 
        position: "relative", 
        transition: "opacity 0.5s", 
        opacity: loading ? 0.3 : 1 
      }}>
        <h1>Scroll Down to Load Messages</h1>
      </div>

      {loading && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            border: "4px solid white",
            borderTop: "4px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}></div>
          <p style={{ marginTop: "10px" }}>Loading...</p>
        </div>
      )}

      <ToastContainer />


      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default App;
