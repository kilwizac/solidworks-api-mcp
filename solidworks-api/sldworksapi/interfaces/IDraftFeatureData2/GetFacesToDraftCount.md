---
type: method
interface: IDraftFeatureData2
member: GetFacesToDraftCount
returns: System.Int16
parameters: []
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
  - getfacestodraftcount
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - faces
  - count
  - int16
---

# IDraftFeatureData2.GetFacesToDraftCount

Gets the number of faces that define the draft feature.

## Signature

```csharp
System.Int16 GetFacesToDraftCount()
```
## Parameters

None.

## Return Value

Number of faces that define the draft feature

## Remarks

Call this method before calling
IDraftFeatureData2::IGetFacesToDraft
to determine the size of the array for that method.

## See Also

- `IDraftFeatureData2.FacesToDraft`
- `IDraftFeatureData2.ISetFacesToDraft`