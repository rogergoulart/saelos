import * as types from './action-types'
import * as notifications from '../notifications'

export const fetchingOpportunity = () => ({
  type: types.FETCHING_SINGLE_OPPORTUNITY
})

export const fetchingOpportunitySuccess = (payload) => ({
  type: types.FETCHING_SINGLE_OPPORTUNITY_SUCCESS,
  data: payload
})

export const fetchingOpportunityFailure = () => ({
  type: types.FETCHING_SINGLE_OPPORTUNITY_FAILURE
})

export const fetchingOpportunities = (payload) => {
  notifications.onFetchingOpportunities()

  return {
    type: types.FETCHING_OPPORTUNITIES,
    data: payload
  }
}

export const fetchingOpportunitiesSuccess = (payload) => {
  notifications.onFetchingOpportunitiesSuccess()

  return {
    type: types.FETCHING_OPPORTUNITIES_SUCCESS,
    data: payload
  }
}

export const fetchingOpportunitiesFailure = () => ({
  type: types.FETCHING_OPPORTUNITIES_FAILURE
})

export const postingOpportunity = () => ({
  type: types.POSTING_OPPORTUNITY
})

export const postingOpportunitySuccess = (payload) => {
  notifications.onOpportunitySave(payload.data)

  return {
    type: types.POSTING_OPPORTUNITY_SUCCESS,
    data: payload
  }
}

export const postingOpportunityFailure = () => ({
  type: types.POSTING_OPPORTUNITY_FAILURE
})

export const deletingOpportunity = () => ({
  type: types.DELETING_OPPORTUNITY
})

export const deletingOpportunitySuccess = (payload) => ({
  type: types.DELETING_OPPORTUNITY_SUCCESS,
  data: payload
})

export const deletingOpportunityFailure = () => ({
  type: types.DELETING_OPPORTUNITY_FAILURE
})

export const fetchingCustomFieldsForOpportunities = () => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_OPPORTUNITIES
})

export const fetchingCustomFieldsForOpportunitiesSuccess = (payload) => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_OPPORTUNITIES_SUCCESS,
  data: payload
})

export const fetchingCustomFieldsForOpportunitiesFailure = () => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_OPPORTUNITIES_FAILURE
})

export const editingOpportunity = () => ({
  type: types.EDITING_OPPORTUNITY
})

export const editingOpportunityFinished = () => ({
  type: types.EDITING_OPPORTUNITY_FINISHED
})
