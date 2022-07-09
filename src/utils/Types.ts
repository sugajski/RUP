export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type RootStackParamList = {
    Welcome: undefined;
    UsersList: undefined;
    UserDetails: { user: IUserProps };
};

interface IDobProps {
    date: string;
    age: number;
};

interface ICoordinatesProps {
    latitude: string;
    longitude: string;
};

interface IStreetProps {
    name: string;
    number: number;
};

interface ITimezoneProps {
    description: string;
    offset: string;
};

interface ILocationProps {
    city: string;
    coordinates: ICoordinatesProps;
    country: string;
    postcode: number;
    state: string;
    street: IStreetProps;
    timezone: ITimezoneProps;
};

interface ILoginProps {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
};

interface INameProps {
    first: string;
    last: string;
    title: string;
};

interface IPictureProps {
    large: string;
    medium: string;
    thumbnail: string;
};

export interface IUserProps {
    dob: IDobProps;
    email: string;
    location: ILocationProps;
    login: ILoginProps;
    name: INameProps;
    phone: string;
    picture: IPictureProps;
};
