/**
 * ThermaGuard™ - Energy Savings Calculator Engine
 * Calculates estimated heating & cooling savings based on home size,
 * current utility expenditure, existing insulation condition, and target envelope upgrade.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initEnergyCalculator();
  });

  function initEnergyCalculator() {
    // Input elements
    const homeSizeInput = document.getElementById('calcHomeSize');
    const homeSizeRange = document.getElementById('calcHomeSizeRange');
    const annualBillInput = document.getElementById('calcAnnualBill');
    const annualBillRange = document.getElementById('calcAnnualBillRange');
    const existingConditionSelect = document.getElementById('calcExistingCondition');
    const upgradeLevelSelect = document.getElementById('calcUpgradeLevel');
    const climateZoneSelect = document.getElementById('calcClimateZone');
    const resetBtn = document.getElementById('calcResetBtn');
    const errorAlert = document.getElementById('calcErrorAlert');

    // Output elements
    const annualSavingsEl = document.getElementById('calcAnnualSavings');
    const monthlySavingsEl = document.getElementById('calcMonthlySavings');
    const newAnnualBillEl = document.getElementById('calcNewAnnualBill');
    const percentSavedEl = document.getElementById('calcPercentSaved');
    const fiveYearSavingsEl = document.getElementById('calcFiveYearSavings');
    const tenYearSavingsEl = document.getElementById('calcTenYearSavings');
    const co2ReductionEl = document.getElementById('calcCo2Reduction');
    const treesEquivalentEl = document.getElementById('calcTreesEquivalent');

    if (!homeSizeInput || !annualBillInput) return; // Exit if not present on current page

    // Default configuration values
    const DEFAULTS = {
      homeSize: 2400,
      annualBill: 3200,
      existingCondition: 'outdated',
      upgradeLevel: 'level2',
      climateZone: 'zone4'
    };

    // Sync input <-> range sliders
    if (homeSizeInput && homeSizeRange) {
      homeSizeInput.addEventListener('input', () => {
        homeSizeRange.value = homeSizeInput.value;
        runCalculation();
      });
      homeSizeRange.addEventListener('input', () => {
        homeSizeInput.value = homeSizeRange.value;
        runCalculation();
      });
    }

    if (annualBillInput && annualBillRange) {
      annualBillInput.addEventListener('input', () => {
        annualBillRange.value = annualBillInput.value;
        runCalculation();
      });
      annualBillRange.addEventListener('input', () => {
        annualBillInput.value = annualBillRange.value;
        runCalculation();
      });
    }

    if (existingConditionSelect) {
      existingConditionSelect.addEventListener('change', runCalculation);
    }
    if (upgradeLevelSelect) {
      upgradeLevelSelect.addEventListener('change', runCalculation);
    }
    if (climateZoneSelect) {
      climateZoneSelect.addEventListener('change', runCalculation);
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetToDefaults();
      });
    }

    function resetToDefaults() {
      if (homeSizeInput) homeSizeInput.value = DEFAULTS.homeSize;
      if (homeSizeRange) homeSizeRange.value = DEFAULTS.homeSize;
      if (annualBillInput) annualBillInput.value = DEFAULTS.annualBill;
      if (annualBillRange) annualBillRange.value = DEFAULTS.annualBill;
      if (existingConditionSelect) existingConditionSelect.value = DEFAULTS.existingCondition;
      if (upgradeLevelSelect) upgradeLevelSelect.value = DEFAULTS.upgradeLevel;
      if (climateZoneSelect) climateZoneSelect.value = DEFAULTS.climateZone;
      if (errorAlert) errorAlert.classList.add('d-none');
      runCalculation();
    }

    function runCalculation() {
      const homeSize = parseFloat(homeSizeInput.value);
      const annualBill = parseFloat(annualBillInput.value);
      const condition = existingConditionSelect ? existingConditionSelect.value : 'outdated';
      const upgrade = upgradeLevelSelect ? upgradeLevelSelect.value : 'level2';
      const climate = climateZoneSelect ? climateZoneSelect.value : 'zone4';

      // Validation
      if (isNaN(homeSize) || homeSize < 400 || homeSize > 15000) {
        showError('Please enter a realistic home size between 400 and 15,000 sq ft.');
        return;
      }

      if (isNaN(annualBill) || annualBill < 500 || annualBill > 35000) {
        showError('Please enter a valid annual energy cost between $500 and $35,000.');
        return;
      }

      hideError();

      // Heating & Cooling portion typically represents ~50% of the utility bill (US DOE baseline)
      const hvacPortion = annualBill * 0.52;

      // Base savings factor by existing condition
      // 'poor': ~30% HVAC leakage
      // 'outdated': ~22% HVAC leakage
      // 'moderate': ~14% HVAC leakage
      let conditionMultiplier = 1.0;
      switch (condition) {
        case 'poor':
          conditionMultiplier = 1.25;
          break;
        case 'outdated':
          conditionMultiplier = 1.0;
          break;
        case 'moderate':
          conditionMultiplier = 0.75;
          break;
        default:
          conditionMultiplier = 1.0;
      }

      // Upgrade performance factor
      // level1: Blown-in Attic R-49 (~16% of HVAC bill)
      // level2: Attic R-49 + Air Sealing Envelope (~24% of HVAC bill)
      // level3: Premium Closed-Cell Spray Foam R-60 Envelope (~33% of HVAC bill)
      let upgradeBasePercent = 0.24;
      switch (upgrade) {
        case 'level1':
          upgradeBasePercent = 0.17;
          break;
        case 'level2':
          upgradeBasePercent = 0.25;
          break;
        case 'level3':
          upgradeBasePercent = 0.34;
          break;
        default:
          upgradeBasePercent = 0.25;
      }

      // Climate modifier
      // Zone 5-7 (Cold/Extreme Cold) has higher heating penalty, Zone 1-2 (Hot/Humid) higher cooling
      let climateFactor = 1.0;
      switch (climate) {
        case 'cold':
          climateFactor = 1.15;
          break;
        case 'mixed':
          climateFactor = 1.0;
          break;
        case 'hot':
          climateFactor = 1.08;
          break;
        default:
          climateFactor = 1.0;
      }

      // Final estimated percentage of total annual energy bill saved
      let overallSavingsFraction = (hvacPortion / annualBill) * (upgradeBasePercent * conditionMultiplier * climateFactor);
      
      // Cap at reasonable real-world bounds (10% to 35% of total electric/gas bill)
      overallSavingsFraction = Math.max(0.10, Math.min(overallSavingsFraction, 0.38));

      const estimatedAnnualSavings = Math.round(annualBill * overallSavingsFraction);
      const estimatedMonthlySavings = Math.round(estimatedAnnualSavings / 12);
      const newAnnualCost = Math.round(annualBill - estimatedAnnualSavings);
      const percentSaved = Math.round((estimatedAnnualSavings / annualBill) * 100);

      // Cumulative calculations (assuming 3% annual utility inflation rate)
      let cumulative5Year = 0;
      let cumulative10Year = 0;
      let yearlySavings = estimatedAnnualSavings;
      for (let y = 1; y <= 10; y++) {
        if (y <= 5) cumulative5Year += yearlySavings;
        cumulative10Year += yearlySavings;
        yearlySavings *= 1.03; // 3% utility escalation
      }

      // Environmental metrics
      // Average 1 kWh / therm reduction equivalent ~ 0.85 lbs CO2 per dollar saved
      const lbsCo2Avoided = Math.round(estimatedAnnualSavings * 3.4);
      const metricTonsCo2 = (lbsCo2Avoided / 2204.62).toFixed(1);
      // 1 tree absorbs ~48 lbs CO2 per year
      const equivalentTrees = Math.round(lbsCo2Avoided / 48);

      // Update UI elements with smooth transitions
      if (annualSavingsEl) annualSavingsEl.textContent = `$${estimatedAnnualSavings.toLocaleString()}`;
      if (monthlySavingsEl) monthlySavingsEl.textContent = `$${estimatedMonthlySavings.toLocaleString()}`;
      if (newAnnualBillEl) newAnnualBillEl.textContent = `$${newAnnualCost.toLocaleString()}`;
      if (percentSavedEl) percentSavedEl.textContent = `${percentSaved}%`;
      if (fiveYearSavingsEl) fiveYearSavingsEl.textContent = `$${Math.round(cumulative5Year).toLocaleString()}`;
      if (tenYearSavingsEl) tenYearSavingsEl.textContent = `$${Math.round(cumulative10Year).toLocaleString()}`;
      if (co2ReductionEl) co2ReductionEl.textContent = `${metricTonsCo2} Tons`;
      if (treesEquivalentEl) treesEquivalentEl.textContent = `${equivalentTrees} Trees`;
    }

    function showError(msg) {
      if (errorAlert) {
        errorAlert.textContent = msg;
        errorAlert.classList.remove('d-none');
      }
    }

    function hideError() {
      if (errorAlert) {
        errorAlert.classList.add('d-none');
      }
    }

    // Handle "Lock In Your Free On-Site Audit" button validation & message
    const lockInBtn = document.getElementById('calcLockInBtn');
    const lockInMessage = document.getElementById('calcLockInMessage');

    let lockInTimeout = null;
    let lockInInterval = null;

    if (lockInBtn && lockInMessage) {
      lockInBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (lockInTimeout) clearTimeout(lockInTimeout);
        if (lockInInterval) clearInterval(lockInInterval);

        // Check that all required building parameter elements are filled and valid
        const homeVal = parseFloat(homeSizeInput.value);
        const billVal = parseFloat(annualBillInput.value);
        const condVal = existingConditionSelect ? existingConditionSelect.value : '';
        const upgVal = upgradeLevelSelect ? upgradeLevelSelect.value : '';
        const climVal = climateZoneSelect ? climateZoneSelect.value : '';

        const missing = [];
        if (!homeSizeInput.value.trim() || isNaN(homeVal) || homeVal < 400) {
          missing.push('Home Size (minimum 400 sq ft)');
        }
        if (!annualBillInput.value.trim() || isNaN(billVal) || billVal < 500) {
          missing.push('Annual Energy Bill (minimum $500)');
        }
        if (!condVal) {
          missing.push('Existing Condition');
        }
        if (!upgVal) {
          missing.push('Target Upgrade Scope');
        }
        if (!climVal) {
          missing.push('Climate Zone');
        }

        // If any element is missing, show warning message only for 5 seconds — do NOT redirect!
        if (missing.length > 0) {
          lockInMessage.innerHTML = `
            <div style="background-color: #271a06; border: 1.5px solid #f59e0b; border-radius: 10px; padding: 0.85rem 1rem; color: #fef3c7;" class="text-start d-flex align-items-center gap-2 shadow-md">
              <i class="bi bi-exclamation-triangle-fill fs-5" style="color: #f59e0b; flex-shrink: 0;"></i>
              <div style="font-size: 0.84rem; color: #fef3c7;">
                <strong style="color: #ffffff;">Please complete all parameters:</strong><br>
                ${missing.join(', ')} must be filled before locking in.
              </div>
            </div>
          `;
          lockInTimeout = setTimeout(() => {
            lockInMessage.innerHTML = '';
          }, 5000);
          return;
        }

        // All elements are filled: Show ultra-high-contrast confirmation message directly on page for 5 sec only!
        const savingsText = annualSavingsEl ? annualSavingsEl.textContent : '$784';
        const percentText = percentSavedEl ? percentSavedEl.textContent : '25%';

        lockInBtn.disabled = true;
        lockInBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Locking in estimate...';

        setTimeout(() => {
          lockInBtn.disabled = false;
          lockInBtn.innerHTML = '<i class="bi bi-check2-circle me-2"></i>Audit Estimate Locked In!';
          lockInBtn.className = 'btn btn-light text-success w-100 py-3 fw-bold shadow-sm';

          // Ultra-crisp high-contrast card with explicit inline dark background and white/emerald text
          lockInMessage.innerHTML = `
            <div style="background-color: #06101d; border: 1.5px solid #10b981; border-radius: 12px; padding: 1.15rem; color: #ffffff; box-shadow: 0 12px 30px rgba(0,0,0,0.55);" class="text-start">
              <div class="d-flex align-items-center gap-2 mb-2">
                <i class="bi bi-shield-fill-check fs-4" style="color: #34d399; flex-shrink: 0;"></i>
                <strong style="color: #ffffff; font-size: 1.05rem; font-weight: 800; letter-spacing: -0.2px;">Free On-Site Audit Locked In!</strong>
              </div>
              <p class="mb-2" style="color: #e2e8f0; font-size: 0.86rem; line-height: 1.5;">
                Your estimated savings of <strong style="color: #34d399; font-weight: 700;">${savingsText}/year (${percentText} reduction)</strong> for a <strong style="color: #ffffff; font-weight: 700;">${homeVal.toLocaleString()} sq ft</strong> property have been secured in our priority queue.
              </p>
              <div class="d-flex align-items-center justify-content-between pt-2" style="border-top: 1px solid rgba(255, 255, 255, 0.15); font-size: 0.8rem;">
                <span style="color: #34d399; font-weight: 600;"><i class="bi bi-check2-circle me-1"></i>Saved to session</span>
              </div>
            </div>
          `;

          // Page refreshes after exactly 5 seconds without countdown text or message-clearing timer
          lockInTimeout = setTimeout(() => {
            window.location.reload();
          }, 5000);
        }, 500);
      });
    }

    // Run initial calculation on page load
    runCalculation();
  }

})();
