---
type: method
interface: ISimpleFilletFeatureData2
member: SetFaces
returns: void
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face as defined in swSimpleFilletWhichFaces_e
  -
    name: FaceList
    type: System.Object
    description: Array of faces of size Count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetFaceCount
  - ISimpleFilletFeatureData2.GetFaces
  - ISimpleFilletFeatureData2.IGetFaces
  - ISimpleFilletFeatureData2.ISetFaces
keywords:
  - setfaces
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
  - object
  - void
---

# ISimpleFilletFeatureData2.SetFaces

Sets the faces on which to create a simple fillet.

## Signature

```csharp
void SetFaces( 
   System.Int32
WhichFaceList
,
   System.Object
FaceList
)
```
## Parameters

- `WhichFaceList` (System.Int32): Face as defined in swSimpleFilletWhichFaces_e
- `FaceList` (System.Object): Array of faces of size Count

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetFaceCount`
- `ISimpleFilletFeatureData2.GetFaces`
- `ISimpleFilletFeatureData2.IGetFaces`
- `ISimpleFilletFeatureData2.ISetFaces`