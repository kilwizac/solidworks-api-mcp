---
type: method
interface: IModeler
member: ICreateEllipse
returns: Curve
parameters:
  -
    name: Center
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of 3 doubles describing the location of the center of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of 3 doubles describing the major axis of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: MinorAxis
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of 3 doubles describing the minor axis of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateArc
  - IModeler.CreateEllipse
  - IModeler.CreateExtrudedBody
  - IModeler.CreateLine
  - IModeler.ICreateArc
  - IModeler.ICreateLine
keywords:
  - ellipses
  - create
  - icreateellipse
  - imodeler
  - modeler
  - ellipse
  - center
  - double
  - major
  - radius
  - minor
  - axis
  - curve
---

# IModeler.ICreateEllipse

Creates a temporary elliptical curve.

## Signature

```csharp
Curve ICreateEllipse( 
   ref System.Double
Center
,
   System.Double
MajorRadius
,
   System.Double
MinorRadius
,
   ref System.Double
MajorAxis
,
   ref System.Double
MinorAxis
)
```
## Parameters

- `Center` (System.Double): in-process, unmanaged C++: Pointer to an array of 3 doubles describing the location of the center of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `MajorRadius` (System.Double): Major radius of ellipse
- `MinorRadius` (System.Double): Minor radius of ellipse
- `MajorAxis` (System.Double): in-process, unmanaged C++: Pointer to an array of 3 doubles describing the major axis of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `MinorAxis` (System.Double): in-process, unmanaged C++: Pointer to an array of 3 doubles describing the minor axis of the ellipse VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Curve

## See Also

- `IModeler.CreateArc`
- `IModeler.CreateEllipse`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateLine`
- `IModeler.ICreateArc`
- `IModeler.ICreateLine`