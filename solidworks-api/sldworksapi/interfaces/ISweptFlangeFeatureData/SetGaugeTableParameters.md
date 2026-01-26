---
type: method
interface: ISweptFlangeFeatureData
member: SetGaugeTableParameters
returns: void
parameters:
  -
    name: DispIn
    type: System.Object
    description: ISheetMetalGaugeTableParameters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setgaugetableparameters
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - gauge
  - table
  - parameters
  - disp
  - object
  - void
  - isheetmetalgaugetableparameters
---

# ISweptFlangeFeatureData.SetGaugeTableParameters

Sets the gauge table parameters object.

## Signature

```csharp
void SetGaugeTableParameters( 
   System.Object
DispIn
)
```
## Parameters

- `DispIn` (System.Object): ISheetMetalGaugeTableParameters

## Return Value

Unknown.

## Remarks

This method is valid only if
ISweptFlangeFeatureData::UseGaugeTable
is true.
Use
ISweptFlangeFeatureData::GetGaugeTableParameters
to specify DispIn.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)