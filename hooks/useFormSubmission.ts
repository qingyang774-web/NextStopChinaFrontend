import { useState } from 'react';
import { apiClient, ApiResponse } from '@/lib/api';

interface UseFormSubmissionOptions {
  onSuccess?: (response: ApiResponse) => void;
  onError?: (error: Error) => void;
}

export function useFormSubmission<T>(options: UseFormSubmissionOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitForm = async (submitFunction: () => Promise<ApiResponse<T>>) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await submitFunction();
      
      if (response.success) {
        setSubmitSuccess(true);
        options.onSuccess?.(response);
      } else {
        throw new Error(response.message || 'Submission failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setSubmitError(errorMessage);
      options.onError?.(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submitForm,
    resetForm,
  };
}

// Specific hooks for each form type
export function useContactFormSubmission(options: UseFormSubmissionOptions = {}) {
  const formSubmission = useFormSubmission(options);

  const submitContactForm = (data: Parameters<typeof apiClient.submitContactForm>[0]) => {
    return formSubmission.submitForm(() => apiClient.submitContactForm(data));
  };

  return {
    ...formSubmission,
    submitContactForm,
  };
}

export function useApplicationFormSubmission(options: UseFormSubmissionOptions = {}) {
  const formSubmission = useFormSubmission(options);

  const submitApplicationForm = (data: Parameters<typeof apiClient.submitApplicationForm>[0]) => {
    return formSubmission.submitForm(() => apiClient.submitApplicationForm(data));
  };

  return {
    ...formSubmission,
    submitApplicationForm,
  };
}

export function useNewsletterSubmission(options: UseFormSubmissionOptions = {}) {
  const formSubmission = useFormSubmission(options);

  const subscribeToNewsletter = (data: Parameters<typeof apiClient.subscribeToNewsletter>[0]) => {
    return formSubmission.submitForm(() => apiClient.subscribeToNewsletter(data));
  };

  return {
    ...formSubmission,
    subscribeToNewsletter,
  };
}

