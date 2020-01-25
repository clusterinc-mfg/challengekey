import {
    BannerWrapper,
    FieldTitle,
    FieldValue
} from './ProgramInfoBanner.styles'

interface ProgramInfoBannerProps {
    schoolType:string;
    requiredCredits:number
    costPerCredit:number;
    deliveryMode:string;
    degreeType:string;
}

const ProgramInfoBanner = (
    {schoolType, 
    requiredCredits, 
    costPerCredit,
    deliveryMode, 
    degreeType
}:ProgramInfoBannerProps) => (
    <BannerWrapper>
        <FieldTitle>Delivery</FieldTitle>
        <FieldTitle>School Type</FieldTitle>
        <FieldTitle>Degree Level</FieldTitle>
        <FieldTitle>Credits</FieldTitle>
        <FieldTitle>In-State Cost Per Credit</FieldTitle>
        <FieldValue dmode>{deliveryMode}</FieldValue>
        <FieldValue>{schoolType}</FieldValue>
        <FieldValue>{degreeType}</FieldValue>
        <FieldValue>{requiredCredits || 20}</FieldValue>
<FieldValue>${costPerCredit || 40}</FieldValue>
    </BannerWrapper>
)

export default ProgramInfoBanner