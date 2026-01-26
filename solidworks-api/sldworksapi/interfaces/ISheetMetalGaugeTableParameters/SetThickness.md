---
type: method
interface: ISheetMetalGaugeTableParameters
member: SetThickness
returns: System.Boolean
parameters:
  -
    name: Thickness
    type: System.Double
    description: Gauge thickness
  -
    name: Override
    type: System.Boolean
    description: True to override an existing value, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalGaugeTableParameters.GetThickness
  - ISheetMetalGaugeTableParameters.OverrideThickness
  - ISheetMetalGaugeTableParameters.ReverseDirection
keywords:
  - setthickness
  - isheetmetalgaugetableparameters
  - sheet
  - metal
  - gauge
  - table
  - parameters
  - thickness
  - double
  - override
  - boolean
---

# ISheetMetalGaugeTableParameters.SetThickness

Sets the gauge thickness in this gauge table.

## Signature

```csharp
System.Boolean SetThickness( 
   System.Double
Thickness
,
   System.Boolean
Override
)
```
## Parameters

- `Thickness` (System.Double): Gauge thickness
- `Override` (System.Boolean): True to override an existing value, false to not (see Remarks )

## Return Value

True if gauge thickness successfully set, false if not

## Remarks

If Override is:
true, then specify Thickness using an override gauge thickness. You should also use
ISheetMetalGaugeTableParameters::SetRadius
to override the bend radius.
false, instead of calling this method use
ISheetMetalGaugeTableParameters::GetAvailableGaugeNumbers
and
ISheetMetalGaugeTableParameters::SetCurrentGaugeNumber
to change the current gauge number. Each gauge number has a default thickness.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISheetMetalGaugeTableParameters.GetThickness`
- `ISheetMetalGaugeTableParameters.OverrideThickness`
- `ISheetMetalGaugeTableParameters.ReverseDirection`