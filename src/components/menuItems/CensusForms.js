import HouseholdForm from "../forms/HouseholdForm";
import PwdForm from "../forms/PwdForm";
import ResidentForm from "../forms/ResidentForm";
import SingleParentForm from "../forms/SingleParentForm";

const CensusForms = {
    id: 'census-forms',
    title: 'Census Forms',
    type: 'group',
    children: [
        {
            id: 'resident',
            title: 'Resident',
            type: 'item',
            url: '',
        },
        {
            id: 'household',
            title: 'Household',
            type: 'item',
            location: '/HouseholdForm',
        },
        {
            id: 'single-parent',
            title: 'Single Parent',
            type: 'item',
            url: '',
        },
        {
            id: 'pwd',
            title: 'PWD',
            type: 'item',
            url: '',
        },
    ]
};

export default CensusForms;