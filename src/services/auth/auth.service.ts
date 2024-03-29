import { SigninFormValues } from '@/components/auth/signin-form'
import { SignupFormValues } from '@/components/auth/signup-form'
import { baseApi } from '@/services/base-api/base-api'
import { User } from '@/services/definitions'

export const authApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      login: build.mutation<
        {
          accessToken: string
        },
        SigninFormValues
      >({
        invalidatesTags: ['me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: build.mutation<void, void>({
        invalidatesTags: ['me'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
        }),
      }),
      me: build.query<User, void>({
        providesTags: ['me'],
        query: () => ({
          url: '/v1/auth/me',
        }),
      }),
      signup: build.mutation<User, Omit<SignupFormValues, 'confirmPassword'>>({
        invalidatesTags: ['me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useSignupMutation } = authApi
