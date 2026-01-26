---
type: method
interface: IFace2
member: IGetNextFace
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetFirstFace
  - IBody2.GetFirstSelectedFace
  - IBody2.IGetFirstFace
  - IBody2.IGetFirstSelectedFace
  - IFace2.GetNextFace
keywords:
  - igetnextface
  - iface2
  - face2
  - next
  - face
  - traverse
  - bodies
---

# IFace2.IGetNextFace

Gets the next face in a body.

## Signature

```csharp
Face2 IGetNextFace()
```
## Parameters

None.

## Return Value

Pointer to the next face in a body

## Examples

- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)

## See Also

- `IBody2.GetFirstFace`
- `IBody2.GetFirstSelectedFace`
- `IBody2.IGetFirstFace`
- `IBody2.IGetFirstSelectedFace`
- `IFace2.GetNextFace`