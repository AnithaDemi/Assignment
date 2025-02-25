document.addEventListener("DOMContentLoaded", function () {
  const bundleHeaders = document.querySelectorAll(".bundle-header");
  const radioButtons = document.querySelectorAll(".radio-btn");
  const optionPanels = document.querySelectorAll(".options-panel");

  bundleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const bundleId = this.dataset.bundle;
      const selectedPanel = document.getElementById(`options-${bundleId}`);
      const selectedRadio = document.getElementById(`bundle-radio-${bundleId}`);

      // Close all other panels
      optionPanels.forEach(panel => {
        if (panel !== selectedPanel) {
          panel.classList.remove("open");
        }
      });

      // Open the selected panel
      selectedPanel.classList.toggle("open");

      // Select the radio button
      selectedRadio.checked = true;

      // Highlight the selected bundle
      document.querySelectorAll(".bundle-container").forEach(container => {
        container.classList.remove("active");
      });
      this.parentElement.classList.add("active");
    });
  });
});
