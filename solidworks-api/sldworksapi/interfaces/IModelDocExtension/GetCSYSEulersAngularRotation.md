---
type: method
interface: IModelDocExtension
member: GetCSYSEulersAngularRotation
returns: System.Boolean
parameters:
  -
    name: phiAngle
    type: System.Double
    description: Roll or rotation about the longitudinal axis (see Remarks )
  -
    name: thetaAngle
    type: System.Double
    description: Pitch or rotation about the lateral axis (see Remarks )
  -
    name: psiAngle
    type: System.Double
    description: Yaw or rotation about the vertical axis (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCSYSDistances
  - IModelDocExtension.GetCSYSXYZAngularRotation
keywords:
  - coordinate
  - transform
  - getcsyseulersangularrotation
  - imodeldocextension
  - model
  - doc
  - extension
  - csys
  - eulers
  - angular
  - rotation
  - phi
  - angle
  - double
  - theta
  - psi
  - boolean
---

# IModelDocExtension.GetCSYSEulersAngularRotation

Gets the specified Eulers angular rotation values that transform one selected coordinate system into another.

## Signature

```csharp
System.Boolean GetCSYSEulersAngularRotation( 
   out System.Double
phiAngle
,
   out System.Double
thetaAngle
,
   out System.Double
psiAngle
)
```
## Parameters

- `phiAngle` (System.Double): Roll or rotation about the longitudinal axis (see Remarks )
- `thetaAngle` (System.Double): Pitch or rotation about the lateral axis (see Remarks )
- `psiAngle` (System.Double): Yaw or rotation about the vertical axis (see Remarks )

## Return Value

True if rotation values successfully retrieved, false if not

## Remarks

phiAngle is the roll or rotation about the longitudinal axis. Rolling corresponds to moving one side of an object upward while moving the other side downward (no pitch or yaw).
thetaAngle is the pitch or rotation around the lateral axis. Pitching corresponds to tilting the front of an object up or down (no yaw or roll).
psiAngle is the yaw or rotation about the vertical axis. Yawing corresponds to turning the front of an object left or right (no pitch or roll).
This method corresponds to the SOLIDWORKS measure tool's calculation of angular rotation between two coordinate systems. See
SOLIDWORKS online help > Fundamentals > Measure Tool
for more information.
Use Wikipedia to learn more about Euler's angles.

## See Also

- `IModelDocExtension.GetCSYSDistances`
- `IModelDocExtension.GetCSYSXYZAngularRotation`