---
type: property
interface: ISweptFlangeFeatureData
member: Thickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - thickness
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - double
readonly: null
---

# ISweptFlangeFeatureData.Thickness

Gets or sets the sheet metal thickness of this swept flange feature.

## Signature

```csharp
System.Double Thickness {get; set;}
```
## Parameters

None.

## Return Value

Sheet metal thickness

## Remarks

This property is valid only when not creating the swept flange on an existing sheet metal feature.
The setter of this property is valid only if
ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters
is true.
This property gets:
Default thickness if ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters is false.
Custom thickness if ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters is true.