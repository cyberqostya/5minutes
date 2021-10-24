const notComputerBlock = new NotComputer();

// Мобильные?
if (document.documentElement.clientWidth > 768) {
  notComputerBlock.addOnPage();
}