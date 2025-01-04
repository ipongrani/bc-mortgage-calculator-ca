import { integrations_loanPrincipalWithMortgage } from './integrations/loanPricipalWithMortgage.integration.js';
import { integrations_loanPrincipalWithCMHC } from './integrations/loanPrincipalWithCMHC.integration.js';




describe('Integrations Scenario Testing', () => {
    integrations_loanPrincipalWithMortgage();
    integrations_loanPrincipalWithCMHC()
})

