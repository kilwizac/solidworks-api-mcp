---
type: method
interface: ISheetMetalGaugeTableParameters
member: SetRadius
returns: System.Boolean
parameters:
  -
    name: Radius
    type: System.Double
    description: Bend radius
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
  - ISheetMetalGaugeTableParameters.GetCurrentRadius
  - ISheetMetalGaugeTableParameters.GetRadiiCount
  - ISheetMetalGaugeTableParameters.OverrideRadius
  - ISheetMetalGaugeTableParameters.SetThickness
keywords:
  - setradius
  - isheetmetalgaugetableparameters
  - sheet
  - metal
  - gauge
  - table
  - parameters
  - radius
  - double
  - override
  - boolean
---

# ISheetMetalGaugeTableParameters.SetRadius

Sets the bend radius in this gauge table.

## Signature

```csharp
System.Boolean SetRadius( 
   System.Double
Radius
,
   System.Boolean
Override
)
```
## Parameters

- `Radius` (System.Double): Bend radius
- `Override` (System.Boolean): True to override an existing value, false to not (see Remarks )

## Return Value

True if bend radius successfully set, false if not

## Remarks

If Override is:
true, then specify an override bend radius in Radius.
false, then specify Radius using one of the default bend radii for the current gauge number from the gauge table. Use
ISheetMetalGaugeTableParameters::GetAvailableRadii
to choose a value for Radius.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISheetMetalGaugeTableParameters.GetCurrentRadius`
- `ISheetMetalGaugeTableParameters.GetRadiiCount`
- `ISheetMetalGaugeTableParameters.OverrideRadius`
- `ISheetMetalGaugeTableParameters.SetThickness`