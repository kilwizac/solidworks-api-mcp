---
type: method
interface: IModelDocExtension
member: RenameDocument
returns: System.Int32
parameters:
  -
    name: NewName
    type: System.String
    description: New name for the component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - rename
  - components
  - see
  - also
  - icomponent2
  - documents
  - document
  - renamedocument
  - imodeldocextension
  - model
  - doc
  - extension
  - new
  - name
  - string
  - int32
  - save
  - assembly
  - vb
  - net
  - vba
  - component
  - update
  - references
---

# IModelDocExtension.RenameDocument

Temporarily renames the selected component using the specified name.

## Signature

```csharp
System.Int32 RenameDocument( 
   System.String
NewName
)
```
## Parameters

- `NewName` (System.String): New name for the component

## Return Value

Status of temporarily renaming the component as defined in swRenameDocumentError_e (see Remarks )

## Remarks

If this method returns swRenameDocumentError_e.swRenameDocumentError_None, then the new name of the component is shown in the FeatureManager design tree and the file name of the component changes in memory. All currently open documents that reference the renamed file are updated to reference the new file name.
To:
get whether the document has renamed components, call
IModelDocExtension::HasRenamedDocuments
.
to avoid
an error when attempting to save the document without first saving its references, use
IRenamedDocumentReferences
to update references to the renamed component in unopened documents.
permanently rename the component,
save
the document.
See the SOLIDWORKS Help for details about renaming components.

## Examples

- Rename Components and Save Assembly (C#) (Rename_Components_and_Save_Assembly_Example_CSharp.htm)
- Rename Components and Save Assembly (VB.NET) (Rename_Components_and_Save_Assembly_Example_VBNET.htm)
- Rename Components and Save Assembly (VBA) (Rename_Components_and_Save_Assembly_Example_VB.htm)
- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)