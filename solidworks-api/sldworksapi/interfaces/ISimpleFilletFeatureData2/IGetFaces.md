---
type: method
interface: ISimpleFilletFeatureData2
member: IGetFaces
returns: Face2
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face as defined in swSimpleFilletWhichFaces_e
  -
    name: Count
    type: System.Int32
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetFaces
  - ISimpleFilletFeatureData2.ISetFaces
  - ISimpleFilletFeatureData2.SetFaces
keywords:
  - igetfaces
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - faces
  - which
  - face
  - list
  - int32
  - count
  - face2
---

# ISimpleFilletFeatureData2.IGetFaces

Gets the faces on which to create a simple radius fillet.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
WhichFaceList
,
   System.Int32
Count
)
```
## Parameters

- `WhichFaceList` (System.Int32): Face as defined in swSimpleFilletWhichFaces_e
- `Count` (System.Int32): Number of faces

## Return Value

in-process in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISimpleFilletFeatureData2::GetFaceCount
before this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetFaces`
- `ISimpleFilletFeatureData2.ISetFaces`
- `ISimpleFilletFeatureData2.SetFaces`