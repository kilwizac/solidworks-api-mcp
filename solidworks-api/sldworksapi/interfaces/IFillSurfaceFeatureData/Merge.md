---
type: property
interface: IFillSurfaceFeatureData
member: Merge
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.TryToFormSolid
keywords:
  - merge
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - boolean
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IFillSurfaceFeatureData.Merge

Gets or sets whether or not to merge results.

## Signature

```csharp
System.Boolean Merge {get; set;}
```
## Parameters

None.

## Return Value

True for merged results, false for non-merged results

## Remarks

If the fill surface displays in an unwanted direction while merging results, use
IFillSurfaceFeatureData::ReverseDirection
to reverse the
direction of the fill surface.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)

## See Also

- `IFillSurfaceFeatureData.TryToFormSolid`