import { Link } from 'react-router-dom';

import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Admissions",
            data: [40, 64, 56, 54, 45, 96, 35, 80, 60, 85, 45, 75],
            backgroundColor: "rgba(99, 102, 241, 0.7)" // Tailwind indigo-500 with opacity
        }
    ]
};

const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Performances",
            data: [33, 53, 85, 41, 44, 65, 52, 70, 80, 50, 60, 75],
            fill: false,
            borderColor: "rgba(99, 102, 241, 0.7)", // Tailwind indigo-500 with opacity
            tension: 0.1
        }
    ]
};

export default function Home() {
    return (
        <>
            <main className="pt-8 px-8 py-6 bg-gradient-to-b from-purple-50 via-indigo-50 to-blue-50 min-h-screen">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 mb-4">
                    Dashboard
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                   

                    <Link to="/getstudent" className="block bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Get Details</h2>
                        <p className="text-indigo-900">
                            By clicking this, you can quickly search for and find details of any specific student. This application makes accessing accurate student information simple and efficient.
                        </p>
                    </Link>

                    <Link to="/about" className="block bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">About</h2>
                        <p className="text-indigo-900">
                            This is the About page. You can contact us anytime for support or inquiries.
                        </p>
                    </Link>
                </section>
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 mb-8 mt-8">
                    Analysis
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    <div
                        className="bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl shadow-lg p-6 transition-shadow duration-300"
                        style={{ minHeight: "300px" }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Bar Chart</h2>
                        <Bar data={barData} />
                    </div>
                    <div
                        className="bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl shadow-lg p-6 transition-shadow duration-300"
                        style={{ minHeight: "300px" }}
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Line Chart</h2>
                        <Line data={lineData} />
                    </div>
                </section>
                
            </main>
        </>
    );
}
