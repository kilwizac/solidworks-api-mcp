---
type: property
interface: IFillSurfaceFeatureData
member: OptimizeSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - optimizesurface
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - optimize
  - boolean
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IFillSurfaceFeatureData.OptimizeSurface

Gets or sets whether or not to optimize the patch.

## Signature

```csharp
System.Boolean OptimizeSurface {get; set;}
```
## Parameters

None.

## Return Value

True for optimized patch, false for non-optimized patch

## Remarks

You can only adjust the quality of the resolution of a patch when the patch is not optimized. See
IFillSurfaceFeatureData::ResolutionControl
for details.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)