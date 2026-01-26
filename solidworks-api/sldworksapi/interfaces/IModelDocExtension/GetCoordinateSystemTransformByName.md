---
type: method
interface: IModelDocExtension
member: GetCoordinateSystemTransformByName
returns: MathTransform
parameters:
  -
    name: NameIn
    type: System.String
    description: Name of the coordinate system
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.GetCurrentCoordinateSystemName
  - IModelDoc2.InsertCoordinateSystem
keywords:
  - coordinate
  - transform
  - getcoordinatesystemtransformbyname
  - imodeldocextension
  - model
  - doc
  - extension
  - name
  - string
  - math
  - vba
  - table
  - driven
  - pattern
  - properties
---

# IModelDocExtension.GetCoordinateSystemTransformByName

Gets the transform of the specified coordinate system.

## Signature

```csharp
MathTransform GetCoordinateSystemTransformByName( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Name of the coordinate system

## Return Value

Math transform

## Examples

- Get Coordinate System Transform (VBA) (Get_Coordinate_System_Transform_Example_VB.htm)
- Get Table-driven Pattern Properties (VBA) (Get_Table-driven_Pattern_Properties_Example_VB.htm)

## See Also

- `IModelDoc2.GetCurrentCoordinateSystemName`
- `IModelDoc2.InsertCoordinateSystem`