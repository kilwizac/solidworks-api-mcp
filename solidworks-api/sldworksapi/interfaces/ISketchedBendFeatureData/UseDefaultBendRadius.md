---
type: property
interface: ISketchedBendFeatureData
member: UseDefaultBendRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchedBendFeatureData.BendRadius
keywords:
  - bends
  - radius
  - sketched
  - usedefaultbendradius
  - isketchedbendfeaturedata
  - bend
  - feature
  - data
  - use
  - default
  - boolean
readonly: null
---

# ISketchedBendFeatureData.UseDefaultBendRadius

Gets or sets whether to use the default bend radius of this sketched bend.

## Signature

```csharp
System.Boolean UseDefaultBendRadius {get; set;}
```
## Parameters

None.

## Return Value

True to use the default bend radius, false to specify another bend radius

## Remarks

This property takes precedence over
ISketchedBendFeatureData::UseGaugeTable
. If this property is set to true, then ISketchedBendFeatureData::UseGaugeTable is set to false and cannot be changed.

## Examples

- ISketchedBendFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchedBendFeatureData)

## See Also

- `ISketchedBendFeatureData.BendRadius`