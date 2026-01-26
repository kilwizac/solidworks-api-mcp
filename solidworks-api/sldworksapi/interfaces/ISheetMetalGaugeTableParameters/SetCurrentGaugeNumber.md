---
type: method
interface: ISheetMetalGaugeTableParameters
member: SetCurrentGaugeNumber
returns: System.Boolean
parameters:
  -
    name: GaugeNumber
    type: System.String
    description: Gauge number string (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalGaugeTableParameters.GetCurrentGaugeNumber
  - ISheetMetalGaugeTableParameters.GetGaugeNumberCount
  - ISheetMetalGaugeTableParameters.SetThickness
keywords:
  - setcurrentgaugenumber
  - isheetmetalgaugetableparameters
  - sheet
  - metal
  - gauge
  - table
  - parameters
  - current
  - number
  - string
  - boolean
---

# ISheetMetalGaugeTableParameters.SetCurrentGaugeNumber

Sets the current gauge number in this gauge table.

## Signature

```csharp
System.Boolean SetCurrentGaugeNumber( 
   System.String
GaugeNumber
)
```
## Parameters

- `GaugeNumber` (System.String): Gauge number string (see Remarks )

## Return Value

True if current gauge number successfully set, false if not

## Remarks

Use
ISheetMetalGaugeTableParameters::GetAvailableGaugeNumbers
to determine GaugeNumber.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISheetMetalGaugeTableParameters.GetCurrentGaugeNumber`
- `ISheetMetalGaugeTableParameters.GetGaugeNumberCount`
- `ISheetMetalGaugeTableParameters.SetThickness`