import css from "./NoteForm.module.css"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote, type createNoteOptions } from "../../services/noteService";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";

interface NoteFormProps {
    onClose: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ onClose }) => {
    const noteFormSchema = Yup.object().shape({
        title: Yup.string()
            .min(3, 'title should have at least 3 characters')
            .max(50, 'title should not be more than 50 characters')
            .required('title is required'),
        content: Yup.string()
            .max(500, 'content should not be more than 500 characters'),
        tag: Yup.string().required('tag is required'),
    })

    const noteInitialValues: createNoteOptions = {
        title: '',
        content: '',
        tag: 'Todo',
    }

    const queryClient = useQueryClient();

    const createNoteMutation = useMutation({
        mutationFn: (data: createNoteOptions) => createNote(data),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["notes"] })
            }
        }
    });

    const handleSubmit = (values: createNoteOptions, actions: FormikHelpers<createNoteOptions>) => {
        createNoteMutation.mutate(values);
        console.log('form:', values);
        actions.resetForm();
        onClose();
    };

    return (
        <Formik initialValues={noteInitialValues} onSubmit={handleSubmit} validationSchema={noteFormSchema}>
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor="title">Title</label>
                    <Field id="title" type="text" name="title" className={css.input} />
                    <ErrorMessage component="span" name="title" className={css.error} />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="content">Content</label>
                    <Field
                        as="textarea"
                        id="content"
                        name="content"
                        rows={8}
                        className={css.textarea}
                    />
                    <ErrorMessage component="span" name="content" className={css.error} />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="tag">Tag</label>
                    <Field as="select" id="tag" name="tag" className={css.select}>
                        <option value="Todo">Todo</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Shopping">Shopping</option>
                    </Field>
                    <ErrorMessage component="span" name="tag" className={css.error} />
                </div>

                <div className={css.actions}>
                    <button type="button" className={css.cancelButton} onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={css.submitButton}
                        disabled={false}
                    >
                        Create note
                    </button>
                </div>
            </Form>
        </Formik>
    )
}