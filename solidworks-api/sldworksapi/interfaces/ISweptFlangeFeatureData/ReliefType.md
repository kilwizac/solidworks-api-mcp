---
type: property
interface: ISweptFlangeFeatureData
member: ReliefType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - relieftype
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - relief
  - type
  - int32
readonly: null
---

# ISweptFlangeFeatureData.ReliefType

Gets or sets the bend relief type for this swept flange feature.

## Signature

```csharp
System.Int32 ReliefType {get; set;}
```
## Parameters

None.

## Return Value

Bend relief type as defined by swSheetMetalReliefTypes_e

## Remarks

This property is valid:
for regular swept flanges,
- and -
for cylindrical or conical swept flanges only during creation.
The setter of this property is valid only if
ISweptFlangeFeatureData::UseDefaultBendRelief
is false.