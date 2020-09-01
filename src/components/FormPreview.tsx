import React from "react"

/**
 * This will mostly just display what the form will look like.
 *
 * There is a chance that this will also allow the user to demo,
 * validation. But with the inputs I chose their will only be
 * optional/required validation.
 *
 * The interfaces here are duplicated across FromBuilder & FormState.
 * But hopefully they help the understanding of the approach.
 *
 */

interface InputValues {
  label: string
  value: boolean
  placeholder?: string //won't be used for the inputs I selected
}

interface FormElement {
  element: "CHECKBOX" | "RADIO"
  title: string
  id: string //Value generated from options for key + htmlFor/for + action reference
  required: boolean //is this form item required
  values: InputValues[]
}
