const notComputerBlock = new NotComputer();

if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
  notComputerBlock.addOnPage();
}