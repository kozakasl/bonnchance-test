const consentForm=document.querySelector('#consent-form');
if(consentForm){
  const plans={
    beauty:{name:'美と健康プラン',url:'https://square.link/u/GyEtFmO9'},
    diet:{name:'ダイエットプラン',url:'https://square.link/u/nYozpdiq'}
  };
  const planKey=new URLSearchParams(window.location.search).get('plan');
  const selectedPlan=plans[planKey]||plans.beauty;
  document.querySelector('#consent-plan-name').textContent=selectedPlan.name;
  document.querySelector('#consent-plan-note').textContent=selectedPlan.name;
  const checks=[...consentForm.querySelectorAll('input[type="checkbox"]')];
  const submit=consentForm.querySelector('.consent-submit');
  const update=()=>{submit.disabled=!checks.every(check=>check.checked)};
  checks.forEach(check=>check.addEventListener('change',update));
  consentForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!checks.every(check=>check.checked))return;
    window.location.href=selectedPlan.url;
  });
}
