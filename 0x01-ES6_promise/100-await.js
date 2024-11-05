import {uploadPhoto, createUser} from './utils';

export default function asyncUploadUser() {
    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        return {
            photo: photo,
            user: user,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }
}
