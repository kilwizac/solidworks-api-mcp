---
type: property
interface: ISketchedBendFeatureData
member: UseGaugeTable
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - usegaugetable
  - isketchedbendfeaturedata
  - sketched
  - bend
  - feature
  - data
  - use
  - gauge
  - table
  - boolean
readonly: null
---

# ISketchedBendFeatureData.UseGaugeTable

Gets or sets whether to use available bend radius values from a gauge table for this sketched bend.

## Signature

```csharp
System.Boolean UseGaugeTable {get; set;}
```
## Parameters

None.

## Return Value

True to use available bend radius values from a gauge table, false to not

## Remarks

This property:
is valid only if a gauge table is specified in a parent sheet metal feature (e.g., lofted bend, swept flange, base flange).
is valid only if
ISketchedBendFeatureData::UseDefaultBendRadius
is set to false.
is automatically set to false and cannot be changed if ISketchedBendFeatureData::UseDefaultBendRadius is set to true.
must be set to false in order to set
ISketchedBendFeatureData::BendRadius
.