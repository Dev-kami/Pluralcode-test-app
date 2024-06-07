"use client";
import Button from "@/ui/Button";

function SuccessPage() {
    return (
        <div className="h-screen text-center flex flex-col justify-center items-center space-y-5">
            <h1>Your payment was successful...</h1>
            <Button href="/viewcart" variant="primary">
                Go back to checkout page
            </Button>
        </div>
    );
}

export default SuccessPage;
