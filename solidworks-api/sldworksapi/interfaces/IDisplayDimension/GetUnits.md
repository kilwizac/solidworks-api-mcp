---
type: method
interface: IDisplayDimension
member: GetUnits
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetChamferUnits
keywords:
  - getunits
  - idisplaydimension
  - display
  - dimension
  - units
  - int32
---

# IDisplayDimension.GetUnits

Gets the units used by this display dimension.

## Signature

```csharp
System.Int32 GetUnits()
```
## Parameters

None.

## Return Value

Units for this display dimension as defined in swLengthUnit_e or swAngleUnit_e (see Remarks )

## Remarks

A display dimension's units are controlled by a value stored in one of two places:
document setting.
- or -
local display dimension setting.
Use
IDisplayDimension::GetUseDocUnits
to determine whether the display dimension's settings are from the document setting or local display dimension setting.
If the display dimension uses...
Then IDisplayDimension::GetUnits returns...
Document setting
-1
Local display dimension setting
swLengthUnit_e or swAngleUnit_e value
Use
IDisplayDimension::SetUnits
to set the display dimension's unit setting.

## See Also

- `IDisplayDimension.GetChamferUnits`