---
type: property
interface: ISketchedBendFeatureData
member: BendRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - bends
  - radius
  - sketched
  - bendradius
  - isketchedbendfeaturedata
  - bend
  - feature
  - data
  - double
  - usegaugetable
readonly: null
---

# ISketchedBendFeatureData.BendRadius

Gets or sets the bend radius of this sketched bend.

## Signature

```csharp
System.Double BendRadius {get; set;}
```
## Parameters

None.

## Return Value

Bend radius in meters

## Remarks

This property is valid only if
ISketchedBendFeatureData::UseDefaultBendRadius
is false.
To use something other than the default bend radius, set:
ISketchedBendFeatureData::UseDefaultBendRadius to false
- and -
ISketchedBendFeatureData::UseGaugeTable
to false.

## Examples

- ISketchedBendFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchedBendFeatureData)
- ISketchedBendFeatureData::UseGaugeTable (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchedBendFeatureData~UseGaugeTable)