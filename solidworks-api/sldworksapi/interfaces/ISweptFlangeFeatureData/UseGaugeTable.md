---
type: property
interface: ISweptFlangeFeatureData
member: UseGaugeTable
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usegaugetable
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - gauge
  - table
  - boolean
  - isheetmetalgaugetableparameters
readonly: null
---

# ISweptFlangeFeatureData.UseGaugeTable

Gets or sets whether to use an Excel gauge table for this swept flange feature.

## Signature

```csharp
System.Boolean UseGaugeTable {get; set;}
```
## Parameters

None.

## Return Value

True to use an Excel gauge table, false to not

## Remarks

This property is valid only:
if
ISweptFlangeFeatureData::UseMaterialSheetMetalParameters
is false,
- and -
when not creating the swept flange on an existing sheet metal feature.
If this property is true, then use
ISweptFlangeFeatureData::GetGaugeTableParameters
and
ISweptFlangeFeatureData::SetGaugeTableParameters
to get and set the gauge table.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)