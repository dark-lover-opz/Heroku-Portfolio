var projectLinks = document.getElementsByClassName("project-a");
function ProjectHoverEffect(index, value)
{
    console.log(projectLinks[index]);
    projectLinks[index].childNodes[3].hidden = value;
}

for(var i=0; i<projectLinks.length; i++)
{
    projectLinks[i].addEventListener("pointerenter", ProjectHoverEffect.bind(this, i, false));
    projectLinks[i].addEventListener("pointerleave", ProjectHoverEffect.bind(this, i, true));
    projectLinks[i].childNodes[3].hidden = true;
}