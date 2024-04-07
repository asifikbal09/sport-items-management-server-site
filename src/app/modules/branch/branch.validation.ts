import { z } from "zod";

const createBranchValidationSchema=z.object({
    body:z.object({
        name:z.string({required_error:"Name is required."}),
        location:z.string({required_error:"Location is required."})
    })
})


export const BranchValidations={
    createBranchValidationSchema,
}