import NavThirdSlice from "@/components/nav/NavThirdSlice";

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <NavThirdSlice />
            <div className="flex mt-20 justify-center h-full">{children}</div>
        </div>
    );
}

export default AuthLayout;
