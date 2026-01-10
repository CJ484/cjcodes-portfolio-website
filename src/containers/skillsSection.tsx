import { skills } from '@/constant/skills';
export default function SkillsSection() {
	return (
		<section id='skills' className='skillsSection'>
			<div className='container'>
				<div className='skillsSection__content'>
					<h1 className='sectionTitle'>Skills</h1>
					<p className='skillsSection__content__description'>
						My tech stack is focused on building custom web applications, but
						I'm equally comfortable working with WordPress, Webflow, and similar
						site builders. I'm also skilled in SEO optimization—identifying
						keyword opportunities and optimizing images for better performance
						and search visibility.
					</p>
				</div>
				<div className='skills'>
					{skills.map((skill) => (
						<div key={skill.name} className='skills__item'>
							<img
								className='skills__item__image'
								src={skill.image}
								alt={skill.name}
							/>
							<p className='skills__item__name'>{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
