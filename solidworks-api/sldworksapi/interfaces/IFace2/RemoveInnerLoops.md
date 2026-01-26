---
type: method
interface: IFace2
member: RemoveInnerLoops
returns: System.Object
parameters:
  -
    name: NumOfLoops
    type: System.Int32
    description: Number of loops to remove
  -
    name: InnerLoopsIn
    type: System.Object
    description: Array of the inner loops to remove
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
  - IFace2.IRemoveInnerLoops
keywords:
  - face
  - see
  - also
  - iface2
  - loops
  - iloop2
  - faces
  - removeinnerloops
  - face2
  - remove
  - inner
  - num
  - int32
  - object
---

# IFace2.RemoveInnerLoops

Removes the inner loops on this face if the face is from a sheet (surface) body.

## Signature

```csharp
System.Object RemoveInnerLoops( 
   System.Int32
NumOfLoops
,
   System.Object
InnerLoopsIn
)
```
## Parameters

- `NumOfLoops` (System.Int32): Number of loops to remove
- `InnerLoopsIn` (System.Object): Array of the inner loops to remove

## Return Value

Resulting face

## See Also

- `IFace2.EnumLoops`
- `IFace2.GetFirstLoop`
- `IFace2.GetLoopCount`
- `IFace2.IGetFirstLoop`
- `IFace2.IRemoveInnerLoops`