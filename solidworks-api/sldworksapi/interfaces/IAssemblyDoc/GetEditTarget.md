---
type: method
interface: IAssemblyDoc
member: GetEditTarget
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetEditTargetComponent
  - IAssemblyDoc.IGetEditTarget2
  - IModelDoc2.IsEditingSelf
  - ISelectionMgr.IsInEditTarget2
  - ISldWorks.ActiveDoc
keywords:
  - getedittarget
  - iassemblydoc
  - assembly
  - doc
  - edit
  - target
  - object
  - suppress
  - component
  - feature
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetEditTarget

Gets the model document that is currently being edited.

## Signature

```csharp
System.Object GetEditTarget()
```
## Parameters

None.

## Return Value

Object for the model document being edited

## Remarks

This method is useful when the user is performing an in-context edit of a part component because the currently active document returned from
ISldWorks::ActiveDoc
might not be the document that the user is editing. For example, the user can use in-context editing to modify an assembly component. The active document is the assembly, but this method returns the IModelDoc2 for the component being edited.
The IModelDoc2 object returned by this method might be that of the assembly if no part is being in-place edited. In other words, this method returns a valid pointer (non-NULL) even when user is not editing a part in-context.
You can use the IModelDoc2 object returned by this method to determine which assembly component is being edited in-context. In general, you should not use this IModelDoc2 object for feature creation within the component part. Feature creation typically requires the IModelDoc2 of the active document. During feature creation, SOLIDWORKS automatically determines whether the feature should be created and owned by the active assembly, or if it is an in-context edit in which the feature should be created and owned by the component part.

## Examples

- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetEditTargetComponent`
- `IAssemblyDoc.IGetEditTarget2`
- `IModelDoc2.IsEditingSelf`
- `ISelectionMgr.IsInEditTarget2`
- `ISldWorks.ActiveDoc`