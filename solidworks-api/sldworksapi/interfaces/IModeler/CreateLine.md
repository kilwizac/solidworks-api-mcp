---
type: method
interface: IModeler
member: CreateLine
returns: System.Object
parameters:
  -
    name: RootPoint
    type: System.Object
    description: Array containing 3 doubles (x, y, z) for the start point of the line
  -
    name: Direction
    type: System.Object
    description: Array containing 3 doubles (x, y, z) for the end point of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateEllipse
  - IModeler.ICreateEllipse
keywords:
  - lines
  - create
  - createline
  - imodeler
  - modeler
  - line
  - root
  - point
  - object
  - direction
  - temporary
  - extruded
  - body
  - vb
  - net
  - vba
---

# IModeler.CreateLine

Creates a line.

## Signature

```csharp
System.Object CreateLine( 
   System.Object
RootPoint
,
   System.Object
Direction
)
```
## Parameters

- `RootPoint` (System.Object): Array containing 3 doubles (x, y, z) for the start point of the line
- `Direction` (System.Object): Array containing 3 doubles (x, y, z) for the end point of the line

## Return Value

Newly created line

## Remarks

If your application uses
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
, then your application must also use
ICurve::CreateTrimmedCurve2
for the curves created by
IModeler::CreateArc
or
IModeler::ICreateArc
and IModeler::CreateLine or
IModeler::ICreateLine
.

## Examples

- Create Temporary Extruded Body (C#) (Create_Temporary_Extruded_Body_Example_CSharp.htm)
- Create Temporary Extruded Body (VB.NET) (Create_Temporary_Extruded_Body_Example_VBNET.htm)
- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)

## See Also

- `IModeler.CreateEllipse`
- `IModeler.ICreateEllipse`