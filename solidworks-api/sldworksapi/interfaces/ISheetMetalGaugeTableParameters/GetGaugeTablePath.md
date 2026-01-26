---
type: method
interface: ISheetMetalGaugeTableParameters
member: GetGaugeTablePath
returns: System.Boolean
parameters:
  -
    name: GaugeTablePath
    type: System.String
    description: Full path name of the gauge table
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalGaugeTableParameters.SetGaugeTablePath
keywords:
  - getgaugetablepath
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

# ISheetMetalGaugeTableParameters.GetGaugeTablePath

Gets the full path name of this gauge table.

## Signature

```csharp
System.Boolean GetGaugeTablePath( 
   out System.String
GaugeTablePath
)
```
## Parameters

- `GaugeTablePath` (System.String): Full path name of the gauge table

## Return Value

True if gauge table path successfully retrieved, false if not

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)

## See Also

- `ISheetMetalGaugeTableParameters.SetGaugeTablePath`