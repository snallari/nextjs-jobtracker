"use client"
import { useForm } from "react-hook-form"
import { ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/material"
import { useRouter } from 'next/navigation';


export default function Login() {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const handleNavigation = () => {
        // Navigate to the dashboard page
        router.push('/dashboard');
    };
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#007FFF",
                        dark: "#0066CC",
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    borderRadius: 1,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <form onSubmit={handleSubmit(() => { handleNavigation() })}>
                    <label>Email</label>
                    <input type="text" {...register("email")} />
                    <label>Password</label>
                    <input type="password" {...register("password")} />
                    <button type="submit">Login</button>
                </form>
            </Box>
        </ThemeProvider>
    )
}