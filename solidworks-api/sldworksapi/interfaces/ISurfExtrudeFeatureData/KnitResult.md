---
type: property
interface: ISurfExtrudeFeatureData
member: KnitResult
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - knitresult
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - knit
  - result
  - boolean
readonly: null
---

# ISurfExtrudeFeatureData.KnitResult

Gets or sets whether to knit the bodies created by deleting original faces in an extruded surface.

## Signature

```csharp
System.Boolean KnitResult {get; set;}
```
## Parameters

None.

## Return Value

True to knit the bodies created by deleting original faces, false to not (see Remarks )

## Remarks

This property is only available if:
ISurfExtrudeFeatureData::BothDirections
= false.
ISurfExtrudeFeatureData::DeleteOriginalFace
= true.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)