---
type: method
interface: IModelDocExtension
member: GetCSYSDistances
returns: System.Boolean
parameters:
  -
    name: TotDistance
    type: System.Double
    description: Distance between origins
  -
    name: XDistance
    type: System.Double
    description: Distance between X axes
  -
    name: YDistance
    type: System.Double
    description: Distance between Y axes
  -
    name: ZDistance
    type: System.Double
    description: Distance between Z axes
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCSYSEulersAngularRotation
  - IModelDocExtension.GetCSYSXYZAngularRotation
keywords:
  - coordinate
  - transform
  - getcsysdistances
  - imodeldocextension
  - model
  - doc
  - extension
  - csys
  - distances
  - tot
  - distance
  - double
  - boolean
---

# IModelDocExtension.GetCSYSDistances

Gets the specified distances between two selected coordinate systems.

## Signature

```csharp
System.Boolean GetCSYSDistances( 
   out System.Double
TotDistance
,
   out System.Double
XDistance
,
   out System.Double
YDistance
,
   out System.Double
ZDistance
)
```
## Parameters

- `TotDistance` (System.Double): Distance between origins
- `XDistance` (System.Double): Distance between X axes
- `YDistance` (System.Double): Distance between Y axes
- `ZDistance` (System.Double): Distance between Z axes

## Return Value

True if distances successfully retrieved, false if not

## Remarks

This method corresponds to the SOLIDWORKS measure tool's calculation of distance between two coordinate systems. See
SOLIDWORKS online help > Fundamentals > Measure Tool
for more information.

## See Also

- `IModelDocExtension.GetCSYSEulersAngularRotation`
- `IModelDocExtension.GetCSYSXYZAngularRotation`