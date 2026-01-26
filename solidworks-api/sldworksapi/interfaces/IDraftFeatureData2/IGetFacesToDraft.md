---
type: method
interface: IDraftFeatureData2
member: IGetFacesToDraft
returns: Face2
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDraftFeatureData2.FacesToDraft
  - IDraftFeatureData2.ISetFacesToDraft
keywords:
  - igetfacestodraft
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - faces
  - count
  - int16
  - face2
---

# IDraftFeatureData2.IGetFacesToDraft

Gets the faces that define this draft feature.

## Signature

```csharp
Face2 IGetFacesToDraft( 
   System.Int16
Count
)
```
## Parameters

- `Count` (System.Int16): Number of faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IDraftFeatureData2::GetFacesToDraftCount
to determine the size of returned array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDraftFeatureData2.FacesToDraft`
- `IDraftFeatureData2.ISetFacesToDraft`