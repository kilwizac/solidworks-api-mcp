---
type: method
interface: IFace2
member: GetLoopCount
returns: System.Int32
parameters: []
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
  - IFace2.IGetLoops
  - ILoop2
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
  - getloopcount
  - face2
  - loop
  - count
  - int32
  - find
  - outside
  - edges
  - vba
---

# IFace2.GetLoopCount

Gets the number of loops in this face.

## Signature

```csharp
System.Int32 GetLoopCount()
```
## Parameters

None.

## Return Value

Number of loops in this face

## Remarks

Call this method before calling
IFace2::IGetLoops
to determine the size of the array for that method.

## Examples

- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Loops (VBA) (Get_Loops_Example_VB.htm)

## See Also

- `IFace2.GetFirstLoop`
- `IFace2.GetLoops`
- `IFace2.IGetFirstLoop`
- `IFace2.IGetLoops`
- `ILoop2`
- `ILoop2.GetNext`
- `ILoop2.IGetNext`