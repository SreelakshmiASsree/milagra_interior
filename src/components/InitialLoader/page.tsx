export default function InitialLoader() {
  return (
    <>
      <div className="fixed inset-0 z-[100] flex justify-center items-center bg-white">
        <div className="w-16 h-16 border-4 border-[#eda633] border-t-transparent rounded-full animate-spin" />
      </div>

      <style>
        {`
          .animate-spin {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
