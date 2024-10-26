/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** Alert
*/

export default function Alert({ text, setText, type = "success" }) {
    const isSuccess = type === "success";

    return (
        <div
            id="alert-3"
            className={`flex items-center p-4 mb-4 rounded-lg ${
                isSuccess
                    ? "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    : "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400"
            }`}
            role="alert"
        >
            {isSuccess ? (
                <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 18.25A8.25 8.25 0 1 0 10 1.75a8.25 8.25 0 0 0 0 16.5ZM8.96 13.71l-2.83-2.83a.75.75 0 1 1 1.06-1.06l2.12 2.12 4.24-4.24a.75.75 0 1 1 1.06 1.06l-5.3 5.3a.75.75 0 0 1-1.06 0Z" />
                </svg>
            ) : (
                <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 13.88a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm1-5.63a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4Z" />
                </svg>
            )}
            <span className="sr-only">{isSuccess ? "Success" : "Error"}</span>
            <div className="ms-3 text-sm font-medium">{text}</div>
            <button
                type="button"
                className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${
                    isSuccess
                        ? "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                        : "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                }`}
                aria-label="Close"
                onClick={() => setText(null)}
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 13"
                    />
                </svg>
            </button>
        </div>
    );
}

