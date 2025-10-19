/**
 * API client for Next Stop China backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  program?: string;
  message: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  dateOfBirth: string;
}

export interface AcademicInfo {
  currentEducation: string;
  institution?: string;
  gpa?: string;
  graduationYear?: string;
  fieldOfStudy?: string;
}

export interface ProgramInfo {
  degreeLevel: 'bachelors' | 'masters' | 'phd' | 'mbbs' | 'diploma' | 'certificate';
  preferredProgram: string;
  preferredUniversity?: string;
  startDate: string;
}

export interface DocumentsInfo {
  transcript: boolean;
  passport: boolean;
  languageTest: boolean;
  recommendation: boolean;
}

export interface AdditionalInfo {
  scholarshipInterest?: 'yes' | 'no' | 'maybe';
  personalStatement?: string;
  previousExperience?: string;
}

export interface ApplicationFormData {
  personalInfo: PersonalInfo;
  academic: AcademicInfo;
  program: ProgramInfo;
  documents: DocumentsInfo;
  additional: AdditionalInfo;
}

export interface NewsletterData {
  email: string;
  source?: 'homepage' | 'contact_page' | 'apply_page' | 'other';
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  /**
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    return this.request('/forms/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Submit application form
   */
  async submitApplicationForm(data: ApplicationFormData): Promise<ApiResponse> {
    return this.request('/forms/application', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeToNewsletter(data: NewsletterData): Promise<ApiResponse> {
    return this.request('/forms/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Unsubscribe from newsletter
   */
  async unsubscribeFromNewsletter(email: string): Promise<ApiResponse> {
    return this.request('/forms/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();

// Export individual methods for convenience
export const {
  submitContactForm,
  submitApplicationForm,
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  healthCheck,
} = apiClient;

