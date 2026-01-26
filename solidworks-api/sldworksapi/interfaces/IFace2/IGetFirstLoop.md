---
type: method
interface: IFace2
member: IGetFirstLoop
returns: Loop2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetFirstLoop
  - IFace2.GetLoopCount
  - ILoop2.GetNext
  - ILoop2.IGetNext
keywords:
  - face
  - see
  - also
  - iface2
  - loops
  - iloop2
  - faces
  - igetfirstloop
  - face2
  - first
  - loop
  - loop2
---

# IFace2.IGetFirstLoop

Gets the first loop in this face, which is not necessarily the outer loop.

## Signature

```csharp
Loop2 IGetFirstLoop()
```
## Parameters

None.

## Return Value

Pointer to the first loop

## See Also

- `IFace2.GetFirstLoop`
- `IFace2.GetLoopCount`
- `ILoop2.GetNext`
- `ILoop2.IGetNext`