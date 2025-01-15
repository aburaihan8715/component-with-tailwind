const SocialLogin = () => {
  return (
    <div className="space-y-4">
      {/* google button */}
      <div>
        <button className="w-full flex items-center gap-1 border border-[#06b6d4] rounded-md">
          <span className="inline-block  bg-white p-2 rounded-md">
            <img className="rounded-full" src="/google.png" alt="google" width={30} height={30} />
          </span>
          <span className="flex-1 self-stretch flex justify-center items-center text-white font-semibold bg-[#06b6d4] uppercase">
            login with google
          </span>
        </button>
      </div>

      {/* github button */}
      <div>
        <button className="w-full flex items-center gap-1 border border-[#06b6d4] rounded-md">
          <span className="inline-block bg-white p-2 rounded-md">
            <img className="rounded-full" src="/github.png" alt="github" width={30} height={30} />
          </span>
          <span className="flex-1 self-stretch flex justify-center items-center text-white font-semibold bg-[#06b6d4] uppercase">
            login with github
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
