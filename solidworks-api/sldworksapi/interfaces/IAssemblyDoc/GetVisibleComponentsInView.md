---
type: method
interface: IAssemblyDoc
member: GetVisibleComponentsInView
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
  - IAssemblyDoc.IGetVisibleComponentsInView
keywords:
  - getvisiblecomponentsinview
  - iassemblydoc
  - assembly
  - doc
  - visible
  - components
  - view
  - object
---

# IAssemblyDoc.GetVisibleComponentsInView

Gets a list of visible components in this assembly to save as solid bodies.

## Signature

```csharp
System.Object GetVisibleComponentsInView()
```
## Parameters

None.

## Return Value

Array of visible components in this assembly

## Remarks

One way to save an assembly as a multibody part document is to save the visible components in the assembly document as solid bodies. This method corresponds to the
Exterior Components
option in the
File, Save As
dialog box. For more information about saving assemblies as multibody documents, see SOLIDWORKS Help.

## See Also

- `IAssemblyDoc.IGetVisibleComponentsInView`