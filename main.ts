document.addEventListener('DOMContentLoaded' , ()=>{
    const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
    const skillsSection = document.getElementById("Skills") as HTMLElement;
      toggleButton.addEventListener('click',()=>{
        if (skillsSection.style.display === 'none'){
          skillsSection.style.display = 'block';
        } else {
          skillsSection.style.display = 'none';
        }
      })
     }
  )

  document.getElementById('profileImage')?.addEventListener('change', (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    const preview = document.getElementById('preview') as HTMLImageElement;
    if (file) preview.src = URL.createObjectURL(file);
});

document.getElementById('generateResumeForm')?.addEventListener('click', () => {
  const form = document.getElementById('ResumeForm') as HTMLFormElement;
  if (form) {
      form.requestSubmit();
  }
});

document.getElementById("ResumeForm")?.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  const nameElement = document.getElementById("Name") as HTMLInputElement;
  const EmailElement = document.getElementById("Email") as HTMLInputElement;
  const PhoneNumberElement = document.getElementById("PhoneNumber") as HTMLInputElement;
  const EducationElement = document.getElementById("Education") as HTMLTextAreaElement;
  const ExperienceElement = document.getElementById("Experience") as HTMLTextAreaElement;
  const SkillsElement = document.getElementById("SkillsInput") as HTMLTextAreaElement;
  const previewImage = (document.getElementById('preview') as HTMLImageElement).src;

  if (nameElement && EmailElement && PhoneNumberElement && EducationElement && ExperienceElement && SkillsElement) {
      const name = nameElement.value;
      const Email = EmailElement.value;
      const PhoneNumber = PhoneNumberElement.value;
      const Education = EducationElement.value;
      const Experience = ExperienceElement.value;
      const Skills = SkillsElement.value;

      const ResumeGenerator = `<h2>Dynamic Resume</h2>
                <img src="${previewImage}" alt="Profile Image" style="width: 150px; height: 150px; border-radius: 50%;"><br>

          <p><strong>Name:</strong> ${name} </p>
          <p><strong>Email:</strong> ${Email} </p>
          <p><strong>Number:</strong> ${PhoneNumber} </p>
          <h3>Education</h3>
          <p>${Education}</p>
          <h3>Experience</h3>
          <p>${Experience}</p>
          <h3>Skills</h3> 
          <p>${Skills}</p>`;

      const ResumeGeneratorElement = document.getElementById("ResumeGenerator");
      if (ResumeGeneratorElement) {
          ResumeGeneratorElement.innerHTML = ResumeGenerator;
      } else {
          console.error("The Resume Generator Element is Missing");
      }

      const outputElement = document.getElementById("output");
      if (!outputElement) {
          console.error("One or More output Elements are missing");
      }
  }
});