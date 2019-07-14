export const messages = {
  br: {
    navigation: {
      dashboard: 'br'
    }
  },
  en: {
    genericErrorMessage:
        'We are experiencing some technical issues with our service. Please try again.',
    currency: {
      EUR: 'euro',
    },
    navigation: {
      dashboard: 'en',
      campaigns: 'Campaigns',
      eCommerce: 'E-commerce',
      reports: 'Reports',
      settings: 'Settings',
    },
    loginPage: {
      pageTitle: 'AdPareto - Sign in',
      title: 'Sign in',
      subtitle: 'with',
      withFacebook: 'Facebook',
      withEmail: 'or use your email',
      registerLink: `You don't have an account? Register here.`,
      form: {
        username: {
          label: 'Email Address',
          required: 'Email is required',
          valid: 'Enter valid email',
        },
        password: {
          label: 'Password',
          required: 'Password is required',
          length: 'Password must contain at least 8 characters',
        },
        remember_me: {
          label: 'Remember Me',
        },
        resetPasswordLink: 'Reset password',
        submit: 'Sign in',
      },
    },
    registerPage: {
      pageTitle: 'AdPareto - Sign up',
      title: 'Sign up',
      subtitle: 'with',
      withEmail: 'or use your email',
      loginLink: `Already have an account? Sign in here.`,
      form: {
        email: {
          label: 'Email Address',
          required: 'Email is required',
          valid: 'Enter valid email',
        },
        password: {
          label: 'Password',
          required: 'Password is required',
          length: 'Password must contain at least 8 characters',
        },
        confirm_password: {
          label: 'Confirm password',
          required: 'Password is required',
          identical: 'Passwords are not the same!',
        },
        terms_and_conditions: {
          label: 'I agree to terms and conditions',
          required: 'You must accept terms and conditions',
        },
        submit: 'Sign up',
      },
      success: {
        title: 'Success',
        subtitle:
            'Your account was created. We have send you an activation link to the email address you provided',
      },
    },
    registerConfirmationSuccessPage: {
      pageTitle: 'AdPareto - Account activated',
      title: 'Your account was activated',
      subtitle:
          'Your account is now active. You can now log in and start using the application.',
      ctaButton: 'Login',
    },
    registerConfirmationFailurePage: {
      pageTitle: 'AdPareto - Invalid activation token',
      title: 'Invalid activation token',
      subtitle:
          'Unfortunately your activation token is invalid. Please make sure you used a proper one from the email.',
    },
    resetPasswordPage: {
      pageTitle: 'AdPareto - Reset password',
      title: 'Reset password',
      loginLink: `Already have an account? Login here.`,
      form: {
        email: {
          label: 'Email Address',
          required: 'Email is required',
          valid: 'Enter valid email',
        },
        submit: 'Reset password',
      },
      success: {
        title: 'Success',
        subtitle:
            'We sent you an email with instructions how you can reset your password.',
      },
    },
    newPasswordPage: {
      pageTitle: 'AdPareto - New password',
      title: 'New password',
      form: {
        password: {
          label: 'Password',
          required: 'Password is required',
          length: 'Password must contain at least 8 characters',
        },
        confirm_password: {
          label: 'Confirm password',
          required: 'Password is required',
          identical: 'Passwords are not the same!',
        },
        submit: 'Send password',
      },
      success: {
        title: 'Success',
        subtitle: 'Your password have been changed. You can now log in.',
        loginButton: 'Login',
      },
    },
    dashboardPage: {
      pageTitle: 'AdPareto - Dashboard',
    },
    subscriptionPackageList: {
      header: 'Choose your package'
    },
    subscriptionPackage: {
      paymentPeriod: 'Monthly',
      subscriptionPackage: {
        chooseButton: 'Choose'
      }
    },
    creditCardData: {
      header: 'Credit card data',
      cardNumber: {
        label: 'Credit card number'
      },
      expiryMonth: {
        label: 'Expiry month'
      },
      expiryYear: {
        label: 'Expiry year'
      },
      cvvCode: {
        label: 'CVV'
      },
      owner: {
        label: 'Card owner'
      }
    },
    paymentPage: {
      savePaymentButton: 'Pay and save credit card data'
    },
    listCampaignsPage: {
      pageTitle: 'AdPareto - Campaigns',
      title: 'Campaigns',
      noData: 'You have no campaigns yet. Click below to create one.',
      createCampaign: 'New Campaign',
      requestError: {
        message:
            'There was an issue fetching your campaigns. Click the button below to try again.',
        retryButton: 'Try again.',
      },
      columns: {
        uuid: 'Campaign Id',
        name: 'Name',
        ends_in: 'Ends in',
        website_name: 'Website',
        products_count: 'Products',
        status: 'Status',
        actions: 'Actions',
      },
    },
    newCampaignPage: {
      pageTitle: 'AdPareto - New Campaign',
      title: 'Automated Campaign',
      saveCampaignButton: 'Save campaign',
      back: 'Go back',
    },
    editCampaignPage: {
      pageTitle: 'AdPareto - Edit Campaign',
      title: 'Edit Campaign',
      back: 'Go back',
      saveCampaignButton: 'Save Campaign'
    },
    viewCampaignPage: {
      pageTitle: 'AdPareto - Campaign Details',
      fetchingCampaign: 'Fetching campaign',
      stoppingCampaign: 'Stopping campaign',
      toolbar: {
        editCampaignButton: 'Edit Campaign',
        stopCampaignButton: 'Stop Campaign',
        backButton: 'Go back',
      },
      summary: {
        title: 'Status',
        budget: 'Budget',
        budgetRatio: '{spent} / {total} {currency}',
        endDate: 'End date',
        currentROI: 'Current ROI',
        ROIValue: '{value} %',
      },
      details: {
        title: 'Summary',
        general: {
          title: 'General',
          type: 'Campaign type',
          website: 'Target website',
          productsAmount: 'Products amount',
        },
        target: {
          title: 'Target',
          localisation: 'Localisation',
          interest: 'Interest',
          ageGroup: 'Age group',
        },
      },
    },
    campaignForm: {
      table: {
        main: 'Main',
        target: 'Target',
        products: 'Produkty'
      }
    },
    campaignMainForm: {
      name: {
        label: 'Name',
        required: 'Set campaign name to identity it'
      },
      website: {
        label: 'Website',
        required: 'Choose one from pages or add new one if none exists'
      },
      budget: {
        label: 'Budget',
        required: 'Budget is required. Currency is the same as your facebook account'
      },
      age_min: {
        label: 'Age min',
        required: 'Set minimum age'
      },
      age_max: {
        label: 'Age max',
        required: 'Set maximum age'
      },
      locations: {
        label: 'Locations',
        required: 'Choose target locations'
      },
      interests: {
        label: 'Interests',
        required: 'Choose target interests'
      }
    },
    listWebsitesPage: {
      pageTitle: 'AdPareto - Websites',
      title: 'Websites',
      noData: 'You have no websites yet. Click below to create one.',
      createWebsite: 'New Website',
      requestError: {
        message:
            'There was an issue fetching your websites. Click the button below to try again.',
        retryButton: 'Try again.',
      },
      columns: {
        uuid: 'Website uuid',
        name: 'Name',
        url: 'Url',
        last_import_date: 'Last import date',
        products_count: 'Products',
        campaigns_count: 'Campaigns',
        actions: 'Actions',
      },
    },
    newWebsitePage: {
      pageTitle: 'AdPareto - New Website',
      saveWebsiteButton: 'Save website',
      title: 'Website',
      back: 'Go back',
    },
    editWebsitePage: {
      pageTitle: 'AdPareto - Edit Website',
      saveWebsiteButton: 'Save website',
      title: 'Edit Website',
      back: 'Go back',
    },
    viewWebsitePage: {
      pageTitle: 'AdPareto - Website Details',
      fetchingWebsite: 'Fetching website',
      stoppingWebsite: 'Stopping campaign',
      toolbar: {
        editWebsiteButton: 'Edit Website',
        websiteProductsButton: 'Website products',
        backButton: 'Go back',
      },
    },
    listProductPage: {
      title: 'Products',
      requestError: {
        message:
            'There was an issue fetching your products. Click the button below to try again.',
        retryButton: 'Try again.',
      },
      renderingFeed: 'We are rendering your feed. Depending on it`s size, it can take from several minutes to several hours. Come back later.',
      renderingFeedFailed: 'Rendering failed.'
    },
    campaignProductsForm: {
      product_chosen_algorithm: {
        auto: {
          label: 'Auto'
        },
        manual: {
          label: 'Manual'
        }
      },
      selectedProducts: {
        count: 'Count',
        showlist: 'Show List',
      }
    },
    campaignVariantsPage: {
      noImageVariants: 'No images provided for those products'
    },
    campaignAdsPage: {
      title: 'Ads',
      back: 'Back',
      startCampaign: 'Star campaign'
    },
    onboardingPage: {
      pageTitle: 'AdPareto - Onboarding',
    },
    welcomePage: {
      pageTitle: 'AdPareto - Welcome',
      header: 'Welcome, just one more thing...',
      description:
          'Thanks you joining us. To get the full benefits from using AdPareto you have to finish just a few short steps. ',
      startButton: `Let's go`,
    },
    donePage: {
      pageTitle: 'AdPareto - Finished',
      header: 'Congratulations',
      description:
          'You are done setting up your account and first account. Go to dashboard to see the gist of your campaigns',
      startButton: 'Finish',
    },
    profilePage: {
      pageTitle: 'AdPareto - Profile',
      header: 'Fill you data',
    },
    profileForm: {
      first_name: {
        label: 'Name',
        required: 'Name is required',
        valid: 'Enter valid name',
      },
      last_name: {
        label: 'Last name',
        required: 'Last name is required',
        valid: 'Enter valid last name',
      },
      name: {
        label: 'Company name',
        required: 'Company name is required',
        valid: 'Enter valid company name',
      },
      tax_number: {
        label: 'NIP',
        required: 'NIP is required',
        valid: 'Enter valid NIP',
      },
      street_name: {
        label: 'Street',
        required: 'Street is required',
        valid: 'Enter valid street',
      },
      street_number: {
        label: 'Building No',
        required: 'Building No is required',
        valid: 'Enter valid building No',
      },
      flat_number: {
        label: 'Local No',
        valid: 'Enter valid local No',
      },
      post_code: {
        label: 'Postal code',
        required: 'Postal code is required',
        valid: 'Enter valid postal code',
      },
      city: {
        label: 'City',
        required: 'City is required',
        valid: 'Enter valid city',
      },
      submit: 'Next',
    },
    websitePage: {
      pageTitle: 'AdPareto - E-commerce',
      header: 'Dane strony www',
    },
    websiteForm: {
      name: {
        label: 'Website name',
        required: 'Name is required',
        valid: 'Enter valid name',
      },
      url: {
        label: 'Website url',
        required: 'Website url is required',
        valid: 'Enter valid url',
        url: 'Website url must be a proper url',
      },
      feed: {
        label: 'Link do feedu produktowego',
        required: 'Link do feedu produktowego is required',
        valid: 'Enter valid Link do feedu produktowego',
        url: 'Link do feedu produktowego must be a proper url',
      },
      skip_feed: {
        label: 'Uzupełnie później',
      },
      submit: 'Next',
      skipFeedConfirmationRequested: `Are you sure you want to skip products feed? You won't be able to create a campaign without it.`,
    },
  },
};
