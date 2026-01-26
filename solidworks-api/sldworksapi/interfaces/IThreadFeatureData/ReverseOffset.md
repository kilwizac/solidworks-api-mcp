---
type: property
interface: IThreadFeatureData
member: ReverseOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reverseoffset
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - reverse
  - offset
  - boolean
readonly: null
---

# IThreadFeatureData.ReverseOffset

Gets or sets whether to flip the offset of the helix to the opposite side of the starting entity in this thread feature.

## Signature

```csharp
System.Boolean ReverseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to flip the offset of the helix, false to not (default)

## Remarks

This property is valid only if
IThreadFeatureData::Offset
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)