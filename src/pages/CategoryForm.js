// This is the reusable form component
import React from "react";
const CategoryForm = (props) => (
    <SimpleForm {...props}>
      <TextInput source="name" label="Nome" />
      {props.type === "edit" && <p>This element only shows in edit mode</p>}
    </SimpleForm>
  );
  
  // Edit View Component
  export const CategoryEdit = (props) => (
    <Edit {...props}>
      {/* Reusable form component with type prop set to 'edit' */}
      <CategoryForm type="edit" />
    </Edit>
  );
  
  // Create View Component
  export const CategoryCreate = (props) => (
    <Create {...props}>
      {/* Reusable form component with type prop set to 'create' */}
      <CategoryForm type="create" />
    </Create>
  );

  export default CategoryForm