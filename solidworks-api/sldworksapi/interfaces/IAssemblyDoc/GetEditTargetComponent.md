---
type: method
interface: IAssemblyDoc
member: GetEditTargetComponent
returns: Component2
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
  - IAssemblyDoc.IGetEditTarget
  - IModelDoc2.IsEditingSelf
keywords:
  - getedittargetcomponent
  - iassemblydoc
  - assembly
  - doc
  - edit
  - target
  - component
  - component2
  - reorganize
  - components
  - vba
---

# IAssemblyDoc.GetEditTargetComponent

Gets the component that is currently being edited.

## Signature

```csharp
Component2 GetEditTargetComponent()
```
## Parameters

None.

## Return Value

IComponent2 being edited

## Examples

- Reorganize Components (VBA) (Reorganize_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetEditTarget`
- `IAssemblyDoc.IGetEditTarget`
- `IModelDoc2.IsEditingSelf`