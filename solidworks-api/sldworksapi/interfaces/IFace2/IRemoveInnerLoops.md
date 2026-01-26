---
type: method
interface: IFace2
member: IRemoveInnerLoops
returns: Face2
parameters:
  -
    name: NumOfLoops
    type: System.Int32
    description: Number of loops to remove
  -
    name: InnerLoopsIn
    type: Loop2
    description: Pointer to an array of the inner loops to be removed
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.EnumLoops
  - IFace2.GetFirstLoop
  - IFace2.GetLoopCount
  - IFace2.IGetFirstLoop
  - IFace2.RemoveInnerLoops
keywords:
  - face
  - see
  - also
  - iface2
  - loops
  - iloop2
  - faces
  - iremoveinnerloops
  - face2
  - remove
  - inner
  - num
  - int32
  - loop2
---

# IFace2.IRemoveInnerLoops

Removes the inner loops on this face if the face is from a sheet (surface) body.

## Signature

```csharp
Face2 IRemoveInnerLoops( 
   System.Int32
NumOfLoops
,
   ref Loop2
InnerLoopsIn
)
```
## Parameters

- `NumOfLoops` (System.Int32): Number of loops to remove
- `InnerLoopsIn` (Loop2): Pointer to an array of the inner loops to be removed

## Return Value

Pointer to the resulting face

## See Also

- `IFace2.EnumLoops`
- `IFace2.GetFirstLoop`
- `IFace2.GetLoopCount`
- `IFace2.IGetFirstLoop`
- `IFace2.RemoveInnerLoops`