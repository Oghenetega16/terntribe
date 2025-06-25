import { useState } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import Button from "../components/button"

export default function GetInvolved() {

    const [form, setForm] = useState({ name: '', email: '', cause: '' })
    const [errors, setErrors] = useState({ name: '', email: '', cause: '' })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const validateForm = () => {
        const newErrors = {}

        if (!form.name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!form.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!form.cause.trim()) {
            newErrors.cause = "Select a cause"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            alert(`Thank you, ${form.name}, for getting involved in the "${form.cause}" cause!`)
            setForm({ name: '', email: '', cause: '' })
        }
        
    }

    return (
        <section>
            <NavBar />
            <div className="p-10 max-w-xl mx-auto mb-20">
                <h2 className="text-2xl font-bold mb-4 font-poppins capitalize">Get involved</h2>
                <form onSubmit={handleSubmit} className="space-y-4 font-overpass">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full border rounded p-2 focus:outline-none ${errors.name ? 'border-red-600 placeholder:text-red-600': '' }`}
                    />
                    <p className="text-xs text-red-600 -mt-3">{errors.name}</p>

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full border rounded p-2 focus:outline-none ${errors.email ? 'border-red-600 placeholder:text-red-600': '' }`}
                    />
                    <p className="text-xs text-red-600 -mt-3">{errors.email}</p>

                    <select
                        name="cause"
                        value={form.cause}
                        onChange={handleChange}
                        className={`w-full border rounded p-2 focus:outline-none ${errors.cause ? 'border-red-600': '' }`}
                    >
                        <option value="">Select a Cause</option>
                        <option>Education for All</option>
                        <option>Protect the Environment</option>
                        <option>Healthcare Access</option>
                        <option>Gender Equality</option>
                    </select>
                    <p className="text-xs text-red-600 -mt-3">{errors.cause}</p>

                    <Button text="Submit" padding="px-8 py-2"><button type="submit"></button></Button>
                </form>
            </div>
            <Footer />
        </section>
    )
}
