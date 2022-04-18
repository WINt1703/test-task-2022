import React, {useEffect} from 'react';
import {Stack, ButtonBase, TextField, FormHelperText} from "@mui/material";
import styles from "/styles/uploadphoto.module.css"
import {useFilePicker} from "use-file-picker";
import {NextPage} from "next";
import {Controller, FieldError, UseFormReturn} from 'react-hook-form';
import {FileContent} from "use-file-picker/dist/interfaces";

type UploadPhotoProps = {
    name: string,
    required?: boolean,
    parseError?: (error: FieldError) => string
    helperText?: string,
    margin?: number | string,
    formContext: UseFormReturn<any, any>,
}

const UploadPhoto: NextPage<UploadPhotoProps> = ({   name,
                                                     required,
                                                     parseError,
                                                     helperText,
                                                     margin,
                                                     formContext}) => {
    const [openFileSelector, { filesContent, errors: fileErrors }] = useFilePicker({
        accept: ['.jpg', '.jpeg'],
        readAs: 'DataURL',
        limitFilesConfig: { max: 1 },
        multiple: false,
        maxFileSize: 5,
        imageSizeRestrictions: {
            minHeight: 70,
            minWidth: 70,
        },
    })

    const uploadHandler = () => {
        openFileSelector()
    }

    useEffect(() => {
        formContext.setValue(name, filesContent[0])
    }, [filesContent])

    return (
        <Controller
            rules={{
                required: required ? "Field is required": undefined
            }}
            control={formContext.control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) =>
                <>
                    <Stack width={"100%"} margin={margin} direction={"row"}>
                        <ButtonBase onClick={uploadHandler}
                                    className={styles.button}
                                    type={"button"}>
                            Upload
                        </ButtonBase>

                        <TextField disabled
                                   name={name}
                                   fullWidth
                                   value={(value as FileContent | undefined)?.name || ""}
                                   onChange={onChange}
                                   onBlur={onBlur}
                                   error={invalid || !!fileErrors.length}
                                   required={required}
                                   InputProps={{
                                       className: styles.input,
                                   }}
                                   placeholder={"Upload your photo"}/>
                    </Stack>

                    {
                        error &&
                        <FormHelperText>
                            { error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText }
                        </FormHelperText>
                    }
                </>
            }
        />
    );
};

export default UploadPhoto;