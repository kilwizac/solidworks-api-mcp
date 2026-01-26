---
type: method
interface: IDraftFeatureData2
member: ISetFacesToDraft
returns: void
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of faces
  -
    name: FaceArray
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDraftFeatureData2.FacesToDraft
  - IDraftFeatureData2.GetFacesToDraftCount
  - IDraftFeatureData2.IGetFacesToDraft
keywords:
  - isetfacestodraft
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - faces
  - count
  - int16
  - face
  - array
  - face2
  - void
---

# IDraftFeatureData2.ISetFacesToDraft

Sets the faces to which to apply the draft feature.

## Signature

```csharp
void ISetFacesToDraft( 
   System.Int16
Count
,
   ref Face2
FaceArray
)
```
## Parameters

- `Count` (System.Int16): Number of faces
- `FaceArray` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDraftFeatureData2.FacesToDraft`
- `IDraftFeatureData2.GetFacesToDraftCount`
- `IDraftFeatureData2.IGetFacesToDraft`