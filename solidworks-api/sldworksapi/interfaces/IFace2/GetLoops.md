---
type: method
interface: IFace2
member: GetLoops
returns: System.Object
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
  - IFace2.IGetFirstLoop
  - IFace2.IGetLoops
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
  - getloops
  - face2
  - object
---

# IFace2.GetLoops

Gets all of the loops on this face.

## Signature

```csharp
System.Object GetLoops()
```
## Parameters

None.

## Return Value

Array of all of the loops on the face (see Remarks )

## Remarks

If a face has one or more holes on it, then this method gets the one loop for the face and a loop for every hole on the face.

## See Also

- `IFace2.GetFirstLoop`
- `IFace2.GetLoopCount`
- `IFace2.IGetFirstLoop`
- `IFace2.IGetLoops`
- `ILoop2.GetNext`
- `ILoop2.IGetNext`