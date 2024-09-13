var _a, _b, _c;
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggleSkillsButton");
    var skillsSection = document.getElementById("Skills");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
(_a = document.getElementById('profileImage')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
    var _a;
    var input = e.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    var preview = document.getElementById('preview');
    if (file)
        preview.src = URL.createObjectURL(file);
});
(_b = document.getElementById('generateResumeForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var form = document.getElementById('ResumeForm');
    if (form) {
        form.requestSubmit();
    }
});
(_c = document.getElementById("ResumeForm")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("Name");
    var EmailElement = document.getElementById("Email");
    var PhoneNumberElement = document.getElementById("PhoneNumber");
    var EducationElement = document.getElementById("Education");
    var ExperienceElement = document.getElementById("Experience");
    var SkillsElement = document.getElementById("SkillsInput");
    var previewImage = document.getElementById('preview').src;
    if (nameElement && EmailElement && PhoneNumberElement && EducationElement && ExperienceElement && SkillsElement) {
        var name_1 = nameElement.value;
        var Email = EmailElement.value;
        var PhoneNumber = PhoneNumberElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var Skills = SkillsElement.value;
        var ResumeGenerator = "<h2>Dynamic Resume</h2>\n                <img src=\"".concat(previewImage, "\" alt=\"Profile Image\" style=\"width: 150px; height: 150px; border-radius: 50%;\"><br>\n\n          <p><strong>Name:</strong> ").concat(name_1, " </p>\n          <p><strong>Email:</strong> ").concat(Email, " </p>\n          <p><strong>Number:</strong> ").concat(PhoneNumber, " </p>\n          <h3>Education</h3>\n          <p>").concat(Education, "</p>\n          <h3>Experience</h3>\n          <p>").concat(Experience, "</p>\n          <h3>Skills</h3> \n          <p>").concat(Skills, "</p>");
        var ResumeGeneratorElement = document.getElementById("ResumeGenerator");
        if (ResumeGeneratorElement) {
            ResumeGeneratorElement.innerHTML = ResumeGenerator;
        }
        else {
            console.error("The Resume Generator Element is Missing");
        }
        var outputElement = document.getElementById("output");
        if (!outputElement) {
            console.error("One or More output Elements are missing");
        }
    }
});
