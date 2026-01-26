---
type: method
interface: ISheet
member: SetZoneMargin
returns: System.Boolean
parameters:
  -
    name: ZoneMarginType
    type: System.Int32
    description: Margin type as defined in swZoneMargin_e
  -
    name: MarginValue
    type: System.Double
    description: Margin
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - setzonemargin
  - isheet
  - sheet
  - zone
  - margin
  - type
  - int32
  - value
  - double
  - boolean
---

# ISheet.SetZoneMargin

Sets the specified zone margin.

## Signature

```csharp
System.Boolean SetZoneMargin( 
   System.Int32
ZoneMarginType
,
   System.Double
MarginValue
)
```
## Parameters

- `ZoneMarginType` (System.Int32): Margin type as defined in swZoneMargin_e
- `MarginValue` (System.Double): Margin

## Return Value

True if zone margin successfully set, false if not