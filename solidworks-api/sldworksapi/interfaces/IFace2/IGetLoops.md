---
type: method
interface: IFace2
member: IGetLoops
returns: Loop2
parameters:
  -
    name: NumberOfLoops
    type: System.Int32
    description: Number of loops on the face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetFirstLoop
  - IFace2.GetLoops
  - IFace2.IGetFirstLoop
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
  - igetloops
  - face2
  - number
  - int32
  - loop2
---

# IFace2.IGetLoops

Gets all of the loops on this face.

## Signature

```csharp
Loop2 IGetLoops( 
   System.Int32
NumberOfLoops
)
```
## Parameters

- `NumberOfLoops` (System.Int32): Number of loops on the face

## Return Value

in-process, unmanaged C++: Pointer to an array of all of the loops on the face (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IFace2::GetLoopCount
to get NumberOfLoops.
If a face has one or more holes on it, then this method gets a loop for the face and a loop for every hole on the face.

## See Also

- `IFace2.GetFirstLoop`
- `IFace2.GetLoops`
- `IFace2.IGetFirstLoop`
- `ILoop2.GetNext`
- `ILoop2.IGetNext`