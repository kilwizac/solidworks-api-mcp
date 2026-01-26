---
type: property
interface: IRenamedDocumentReferences
member: CompletionAction
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - completionaction
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - completion
  - action
  - int32
  - rename
  - component
  - update
  - vb
  - net
  - vba
readonly: null
---

# IRenamedDocumentReferences.CompletionAction

Gets or sets whether to update references to the renamed file in unopened documents.

## Signature

```csharp
System.Int32 CompletionAction {get; set;}
```
## Parameters

None.

## Return Value

Update references to the renamed file in unopened documents as defined in swRenamedDocumentFinalAction_e

## Remarks

This property is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## Examples

- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)