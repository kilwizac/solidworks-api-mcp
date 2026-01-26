---
type: method
interface: ISimpleFilletFeatureData2
member: GetFaces
returns: System.Object
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face as defined in swSimpleFilletWhichFaces_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetFaceCount
  - ISimpleFilletFeatureData2.IGetFaces
  - ISimpleFilletFeatureData2.ISetFaces
  - ISimpleFilletFeatureData2.SetFaces
keywords:
  - getfaces
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
---

# ISimpleFilletFeatureData2.GetFaces

Gets the faces on which to create a simple fillet.

## Signature

```csharp
System.Object GetFaces( 
   System.Int32
WhichFaceList
)
```
## Parameters

- `WhichFaceList` (System.Int32): Face as defined in swSimpleFilletWhichFaces_e

## Return Value

Array of faces

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetFaceCount`
- `ISimpleFilletFeatureData2.IGetFaces`
- `ISimpleFilletFeatureData2.ISetFaces`
- `ISimpleFilletFeatureData2.SetFaces`