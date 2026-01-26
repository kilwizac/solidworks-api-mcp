---
type: method
interface: IModeler
member: CreateEllipse
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array of 3 doubles describing the center of the ellipse
  -
    name: MajorRadius
    type: System.Double
    description: Major radius of ellipse
  -
    name: MinorRadius
    type: System.Double
    description: Minor radius of ellipse
  -
    name: MajorAxis
    type: System.Object
    description: Array of 3 doubles describing the major axis of the ellipse
  -
    name: MinorAxis
    type: System.Object
    description: Array of 3 doubles describing the minor axis of the ellipse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateArc
  - IModeler.CreateExtrudedBody
  - IModeler.CreateLine
  - IModeler.ICreateArc
  - IModeler.ICreateEllipse
  - IModeler.ICreateLine
keywords:
  - ellipses
  - create
  - createellipse
  - imodeler
  - modeler
  - ellipse
  - center
  - object
  - major
  - radius
  - double
  - minor
  - axis
  - temporary
  - elliptical
  - extrusion
  - vba
  - vb
  - net
---

# IModeler.CreateEllipse

Creates a temporary elliptical curve.

## Signature

```csharp
System.Object CreateEllipse( 
   System.Object
Center
,
   System.Double
MajorRadius
,
   System.Double
MinorRadius
,
   System.Object
MajorAxis
,
   System.Object
MinorAxis
)
```
## Parameters

- `Center` (System.Object): Array of 3 doubles describing the center of the ellipse
- `MajorRadius` (System.Double): Major radius of ellipse
- `MinorRadius` (System.Double): Minor radius of ellipse
- `MajorAxis` (System.Object): Array of 3 doubles describing the major axis of the ellipse
- `MinorAxis` (System.Object): Array of 3 doubles describing the minor axis of the ellipse

## Return Value

Curve

## Examples

- Create Temporary Elliptical Extrusion (VBA) (Create_Temporary_Elliptical_Extrusion_Example_VB.htm)
- Create Temporary Elliptical Extrusion (VB.NET) (Create_Temporary_Elliptical_Extrusion_VBNET.htm)
- Create Temporary Elliptical Extrusion (C#) (Create_Temporary_Elliptical_Extrusion_CSharp.htm)

## See Also

- `IModeler.CreateArc`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateLine`
- `IModeler.ICreateArc`
- `IModeler.ICreateEllipse`
- `IModeler.ICreateLine`