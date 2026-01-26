---
type: method
interface: IAssemblyDoc
member: IGetEditTarget2
returns: ModelDoc2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetEditTarget
  - IAssemblyDoc.GetEditTargetComponent
  - IModelDoc2.IsEditingSelf
  - ISelectionMgr.IsInEditTarget2
  - ISldWorks.IActiveDoc2
keywords:
  - igetedittarget2
  - iassemblydoc
  - assembly
  - doc
  - edit
  - target2
  - model
  - doc2
---

# IAssemblyDoc.IGetEditTarget2

Gets the model document that is currently being edited.

## Signature

```csharp
ModelDoc2 IGetEditTarget2()
```
## Parameters

None.

## Return Value

IModelDoc2 being edited

## Remarks

This method is useful when the user is performing an in-context edit of a part component because the currently active document returned from
ISldWorks::ActiveDoc
might not be the document that the user is editing. For example, the user can use in-context editing to modify an assembly component. The active document is the assembly, but this method returns the IModelDoc2 for the component being edited.
The IModelDoc2 object returned by this method might be that of the assembly if no part is being in-place edited. In other words, this method returns a valid pointer (non-NULL) even when user is not editing a part in-context.
You can use the IModelDoc2 object returned by this method to determine which assembly component is being edited in-context. In general, you should not use this IModelDoc2 object for feature creation within the component part. Feature creation typically requires the IModelDoc2 of the active document. During feature creation, SOLIDWORKS automatically determines whether the feature should be created and owned by the active assembly, or if it is an in-context edit in which the feature should be created and owned by the component part.
COM applications need to release the IModelDoc2 object returned because this method increments the reference count on the IModelDoc2 object even if the edit target is the active document.

## See Also

- `IAssemblyDoc.GetEditTarget`
- `IAssemblyDoc.GetEditTargetComponent`
- `IModelDoc2.IsEditingSelf`
- `ISelectionMgr.IsInEditTarget2`
- `ISldWorks.IActiveDoc2`