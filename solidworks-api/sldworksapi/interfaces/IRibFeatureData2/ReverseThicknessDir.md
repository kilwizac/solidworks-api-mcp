---
type: property
interface: IRibFeatureData2
member: ReverseThicknessDir
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversethicknessdir
  - iribfeaturedata2
  - rib
  - feature
  - data2
  - reverse
  - thickness
  - dir
  - boolean
readonly: null
---

# IRibFeatureData2.ReverseThicknessDir

Gets or sets whether the extrusion is on the reverse side of this single-sided rib.

## Signature

```csharp
System.Boolean ReverseThicknessDir {get; set;}
```
## Parameters

None.

## Return Value

True if this single-sided rib is extruded on the reverse side, false if not

## Remarks

This property is valid only when
IRibFeatureData2::IsTwoSided
is set to false.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)