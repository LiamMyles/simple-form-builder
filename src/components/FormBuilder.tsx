import React from "react"

/**
 * This will form the editor/builder for each of the form elements.
 *
 * Each element will be represented by an editor, with options to
 * delete and add additional elements.
 *
 * The interfaces here are duplicated across FormPreview & FormState.
 * But hopefully they help the understanding of the approach.
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
