function addValue(value)
{
    document.getElementById('result').value += value;
}
  
function calculate() 
{
    document.getElementById('result').value = eval(document.getElementById('result').value);
}
  
function clearValue() 
{
    document.getElementById('result').value = '';
}