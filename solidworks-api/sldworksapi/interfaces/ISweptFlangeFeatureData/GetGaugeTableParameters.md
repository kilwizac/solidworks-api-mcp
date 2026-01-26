---
type: method
interface: ISweptFlangeFeatureData
member: GetGaugeTableParameters
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweptFlangeFeatureData.SetGaugeTableParameters
keywords:
  - getgaugetableparameters
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - gauge
  - table
  - parameters
  - object
  - isheetmetalgaugetableparameters
---

# ISweptFlangeFeatureData.GetGaugeTableParameters

Gets the gauge table parameters object.

## Signature

```csharp
System.Object GetGaugeTableParameters()
```
## Parameters

None.

## Return Value

ISheetMetalGaugeTableParameters

## Remarks

This method is valid only if
ISweptFlangeFeatureData::UseGaugeTable
is true.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISweptFlangeFeatureData.SetGaugeTableParameters`