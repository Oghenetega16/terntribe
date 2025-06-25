import CauseCard from "./CauseCard"
export default function Features() {

    const causes = [
        {
            image: '/assets/images/education-for-all.jpg',
            title: 'Education for All',
            description: 'Ensure quality education is accessible to all children regardless of their background or economic situation.'
        },
        {
            image: '/assets/images/environmental-protection.jpg',
            title: 'Protect the Environment',
            description: 'Support initiatives that safeguard our planet and ecosystems.'
        },
        {
            image: '/assets/images/healthcare-access.jpg',
            title: 'Healthcare Access',
            description: 'Join efforts to improve access to essential health services.'
        },
        {
            image: '/assets/images/poverty-alleviation.jpg',
            title: 'Poverty Alleviation',
            description: 'Support initiatives that provide microloans, skills training, and essential resources to lift families out of poverty.'
        },
        {
            image: '/assets/images/gender-equality.jpg',
            title: 'Gender Equality',
            description: 'Empower communities to achieve gender parity and inclusion.'
        },
        {
            image: '/assets/images/mental-health.jpg',
            title: 'Mental Health Awareness',
            description: 'Support mental health initiative and increase awareness worldwide.'
        },
    ]

    return (
        <section className="text-cyan-950 mt-5 p-10">
            <h1 className="text-center font-bold text-2xl font-poppins capitalize lg:mt-6">Our impact areas</h1>
                <div className="grid place-content-center">
                    <div className="sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {causes.map((item, index) => {
                            return (
                                <CauseCard key={index} {...item} />
                            )
                        })}
                    </div>
                </div>
        </section>
    )
}