---
type: property
interface: IFillSurfaceFeatureData
member: ResolutionControl
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - resolutioncontrol
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - resolution
  - control
  - int32
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IFillSurfaceFeatureData.ResolutionControl

Gets and sets the quality of the resolution of the fill-surface feature.

## Signature

```csharp
System.Int32 ResolutionControl {get; set;}
```
## Parameters

None.

## Return Value

Valid values: 1, 2, and 3 (see Remarks )

## Remarks

Adjusting the quality of the resolution is only available for patches that are not optimized. See
IFillSurfaceFeatureData::OptimizeSurface
for details.
Specifying a higher value:
Increases the number of patches defining the surface
Improves the quality of the surface profile
Increases processing time
Increases the size of the file

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)