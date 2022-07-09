import { images } from "../../utils/Images";
import { IUserProps } from "../../utils/Types";

export const formatUserData = (userData: IUserProps) => {
    const { name, email, phone, picture, dob, location } = userData;

    const valuePlaceholder = "Brak danych";

    const formattedPicture = picture && picture.large ? { uri: picture.large } : images.picturePlaceholder;
    const formattedName = name && name.first ? name.first : valuePlaceholder;
    const formattedLastname = name && name.last ? name.last : valuePlaceholder;
    const formattedAge = dob && dob.age ? dob.age.toString() : valuePlaceholder;
    const formattedBirthDate = dob && dob.date ? new Date(dob.date).toLocaleDateString('pl-PL') : valuePlaceholder;
    const formattedPhone = phone ? phone : valuePlaceholder;
    const formattedEmail = email ? email : valuePlaceholder;
    const formattedAddress = location && location.street && location.street.name && location.street.number
        && location.postcode && location.city && location.country
        ? `${location.street.name} ${location.street.number},\n${location.postcode} ${location.city}, ${location.country}`
        : valuePlaceholder;

    return { formattedPicture, formattedName, formattedLastname, formattedAge, formattedBirthDate, formattedPhone, formattedEmail, formattedAddress };
};
