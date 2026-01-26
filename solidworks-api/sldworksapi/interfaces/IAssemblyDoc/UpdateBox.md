---
type: method
interface: IAssemblyDoc
member: UpdateBox
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetBox
  - IAssemblyDoc.IGetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - bounding
  - box
  - updatebox
  - assembly
  - doc
  - update
  - void
  - recalculate
  - vb
  - net
  - vba
---

# IAssemblyDoc.UpdateBox

Updates the bounding box for this assembly.

## Signature

```csharp
void UpdateBox()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use this method to help avoid clipping in shaded display mode if the assembly bounds change; for example, if you modify a component location using
IComponent2::Transform2
.

## Examples

- Recalculate Bounding Box (C#) (Recalculate_Bounding_Box_Example_CSharp.htm)
- Recalculate Bounding Box (VB.NET) (Recalculate_Bounding_Box_Example_VBNET.htm)
- Recalculate Bounding Box (VBA) (Recalculate_Bounding_Box_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetBox`
- `IAssemblyDoc.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`