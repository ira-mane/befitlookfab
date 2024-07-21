import React from 'react';

const Booking = () => {
  return (
    <div className="flex justify-center h-screen">
      <iframe
        id="JotFormIFrame-241925105612449"
        title="Appointment Booking Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/241925105612449"
        frameBorder="0"
        className="min-w-full max-w-full h-[720px] border-none"
        // scrolling="no"
      />
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
      <script>
        {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-241925105612449']", "https://form.jotform.com/")`}
      </script>
    </div>
  );
};

export default Booking;



