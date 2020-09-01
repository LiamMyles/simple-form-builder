import React from "react"

/**
 * The form state will be handled with useContext & useReducer
 *
 * This is partly because I think its a nice way of working in
 * one off projects. But it also puts all the update/delete/add
 * logic in one place, and helps keeps things clean.
 *
 * The exported context just needs to wrap the app, and then be
 * used in any component that needs it. With care of rerenders
 * its can be a straight forward method for smaller use cases.
 *
 * If performance starts to become a concern memoizing might need
 * to be looked into. But simply limiting updates to a submit button
 * will counter most issues.
 *
 * Exports a component that takes children to wrap context around app
 *
 * Also likely I would use immer.
 */

// Form element template
interface FormElement {
  element: "CHECKBOX" | "RADIO" | null //Null for initial unused state
  title: string
  id: string //Value generated from options for key + htmlFor/for + action reference
  required: boolean //is this form item required
  values: InputValues[]
}

interface InputValues {
  label: string
  value: boolean
  placeholder?: string //won't be used for the inputs I selected
}

// Update an existing element
interface ActionUpdateElement extends Partial<FormElement> {
  type: "UPDATE"
  id: string
}
//Removed an element using its ID
interface ActionDeleteElement {
  type: "DELETE"
  id: string
}
// Add a blank element template
interface ActionAddElement {
  type: "ADD"
}

type FormReducerActions =
  | ActionUpdateElement
  | ActionDeleteElement
  | ActionAddElement

interface FormReducerState {
  formElements: FormElement[]
}
