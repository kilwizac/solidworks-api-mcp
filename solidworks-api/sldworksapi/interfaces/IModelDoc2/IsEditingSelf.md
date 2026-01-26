---
type: method
interface: IModelDoc2
member: IsEditingSelf
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IAssemblyDoc.EditAssembly
  - IAssemblyDoc.EditPart2
  - IAssemblyDoc.GetEditTarget
  - IAssemblyDoc.GetEditTargetComponent
  - IAssemblyDoc.IGetEditTarget2
keywords:
  - edit
  - context
  - assemblies
  - see
  - also
  - iassemblydoc
  - iseditingself
  - imodeldoc2
  - model
  - doc2
  - editing
  - self
  - boolean
---

# IModelDoc2.IsEditingSelf

Gets whether this model is being edited in the context of another document.

## Signature

```csharp
System.Boolean IsEditingSelf()
```
## Parameters

None.

## Return Value

True if the model document is the active edit target, false if the model document is not the active edit target of this SOLIDWORKS Design session

## See Also

- `IAssemblyDoc.EditAssembly`
- `IAssemblyDoc.EditPart2`
- `IAssemblyDoc.GetEditTarget`
- `IAssemblyDoc.GetEditTargetComponent`
- `IAssemblyDoc.IGetEditTarget2`