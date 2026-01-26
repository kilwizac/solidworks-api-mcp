---
type: property
interface: IThreadFeatureData
member: OffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetdistance
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - offset
  - distance
  - double
readonly: null
---

# IThreadFeatureData.OffsetDistance

Gets or sets the offset of the starting location of the helix of this thread feature.

## Signature

```csharp
System.Double OffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) < Offset of the starting location of the thread helix

## Remarks

This property is valid only if
IThreadFeatureData::Offset
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)