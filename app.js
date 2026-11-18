const root=document.getElementById('projects-grid');
function show(filter='all'){
  root.replaceChildren();
  for(const project of PROJECTS.filter(p=>filter==='all'||p.type===filter)){
    const card=document.createElement('article');card.className='project';
    const icon=document.createElement('div');icon.className='project-icon';icon.textContent=project.icon;
    const tag=document.createElement('span');tag.className='project-tag';tag.textContent=project.tag;
    const title=document.createElement('h3');title.textContent=project.name;
    const desc=document.createElement('p');desc.textContent=project.desc;
    const stack=document.createElement('div');stack.className='stack';
    project.stack.forEach(item=>{const span=document.createElement('span');span.textContent=item;stack.append(span)});
    const link=document.createElement('a');link.className='repo';link.href='https://github.com/NolanPace/'+project.repo;link.textContent='View repository ↗';link.target='_blank';link.rel='noopener noreferrer';
    card.append(icon,tag,title,desc,stack,link);root.append(card);
  }
}
show();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));button.classList.add('active');show(button.dataset.filter)}));
const theme=document.getElementById('theme');
theme.addEventListener('click',()=>document.documentElement.classList.toggle('light'));
document.getElementById('year').textContent=new Date().getFullYear();
