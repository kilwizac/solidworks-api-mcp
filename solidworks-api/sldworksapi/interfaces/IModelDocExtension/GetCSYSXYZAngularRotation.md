---
type: method
interface: IModelDocExtension
member: GetCSYSXYZAngularRotation
returns: System.Boolean
parameters:
  -
    name: XAngle
    type: System.Double
    description: Angle of rotation between x axes
  -
    name: YAngle
    type: System.Double
    description: Angle of rotation between y axes
  -
    name: ZAngle
    type: System.Double
    description: Angle of rotation between z axes
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCSYSDistances
  - IModelDocExtension.GetCSYSEulersAngularRotation
keywords:
  - coordinate
  - transform
  - getcsysxyzangularrotation
  - imodeldocextension
  - model
  - doc
  - extension
  - csysxyz
  - angular
  - rotation
  - angle
  - double
  - boolean
---

# IModelDocExtension.GetCSYSXYZAngularRotation

Gets the specified Tait-Bryan angular rotation values that transform one selected coordinate system into another.

## Signature

```csharp
System.Boolean GetCSYSXYZAngularRotation( 
   out System.Double
XAngle
,
   out System.Double
YAngle
,
   out System.Double
ZAngle
)
```
## Parameters

- `XAngle` (System.Double): Angle of rotation between x axes
- `YAngle` (System.Double): Angle of rotation between y axes
- `ZAngle` (System.Double): Angle of rotation between z axes

## Return Value

True if rotation values successfully retrieved, false if not

## Remarks

This method corresponds to the SOLIDWORKS measure tool's calculation of angular rotation between two coordinate systems. See
SOLIDWORKS online help > Fundamentals > Measure Tool
for more information.
Use Wikipedia to learn about Tait-Bryan or Cardan angles.

## See Also

- `IModelDocExtension.GetCSYSDistances`
- `IModelDocExtension.GetCSYSEulersAngularRotation`