---
type: method
interface: ISheetMetalGaugeTableParameters
member: SetGaugeTablePath
returns: System.Boolean
parameters:
  -
    name: GaugeTablePath
    type: System.String
    description: Full path name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalGaugeTableParameters.GetGaugeTablePath
keywords:
  - setgaugetablepath
  - isheetmetalgaugetableparameters
  - sheet
  - metal
  - gauge
  - table
  - parameters
  - path
  - string
  - boolean
---

# ISheetMetalGaugeTableParameters.SetGaugeTablePath

Sets the full path name of this gauge table.

## Signature

```csharp
System.Boolean SetGaugeTablePath( 
   System.String
GaugeTablePath
)
```
## Parameters

- `GaugeTablePath` (System.String): Full path name

## Return Value

True if gauge table path successfully set, false if not

## Remarks

Installed sheet metal gauge tables are located in
install_dir
\lang\english\Sheet Metal Gauge Tables
.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISheetMetalGaugeTableParameters.GetGaugeTablePath`