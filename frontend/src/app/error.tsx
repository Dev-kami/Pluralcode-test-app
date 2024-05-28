"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <div>Oopps... Something went wrong</div>
      <div>{error.message}</div>
      <button
        onClick={reset}
        className="py-1.5 px-5 bg-red-700 text-white mt-3 rounded-sm"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
