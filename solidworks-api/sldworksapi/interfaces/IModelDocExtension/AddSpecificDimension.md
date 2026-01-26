---
type: method
interface: IModelDocExtension
member: AddSpecificDimension
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of display dimension text
  -
    name: Y
    type: System.Double
    description: Y coordinate of display dimension text
  -
    name: Z
    type: System.Double
    description: Z coordinate of display dimension text
  -
    name: DimensionType
    type: System.Int32
    description: Type of dimension to add as defined in swDimensionType_e (see Remarks )
  -
    name: Error
    type: System.Int32
    description: Result status as defined in swAddSpecificDimension_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddRadialDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDocExtension.AddDimension
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - addspecificdimension
  - imodeldocextension
  - model
  - doc
  - extension
  - specific
  - double
  - type
  - int32
  - error
  - object
  - create
  - sketch
  - vba
  - vb
  - net
---

# IModelDocExtension.AddSpecificDimension

Creates the specified display dimension at the specified location for selected entities.

## Signature

```csharp
System.Object AddSpecificDimension( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Int32
DimensionType
,
   out System.Int32
Error
)
```
## Parameters

- `X` (System.Double): X coordinate of display dimension text
- `Y` (System.Double): Y coordinate of display dimension text
- `Z` (System.Double): Z coordinate of display dimension text
- `DimensionType` (System.Int32): Type of dimension to add as defined in swDimensionType_e (see Remarks )
- `Error` (System.Int32): Result status as defined in swAddSpecificDimension_e

## Return Value

IDisplayDimension (see Remarks )

## Remarks

This method adds specific display dimensions to sketches and drawings. It supports the following from swDimensionType_e:
swAngularDimension
swChamferDimension
swDiameterDimension
swDiametricLinearDimension
swHorLinearDimension
swOrdinateDimension
swRadialDimension
swRadialLinearDimension
swVertLinearDimension
If you specify DimensionType with swDimensionType_e.:
swDiametricLinearDimension, then this method creates a double-distance linear dimension for a selected construction/center line, circle/arc edge/center. After creation, use
IDisplayDimension::Diametric
to display the single-distance linear dimension.
swRadialLinearDimension, then this method creates a single-distance linear dimension for a selected construction/center line, circle/arc edge/center. After creation, use IDisplayDimension::Diametric to display the double-distance linear dimension.
Before calling this method, you must select the entities to dimension.
For example, to create an angular dimension between two intersecting lines in a drawing:
Call
IModelDocExtension::SelectByRay
, specifying the X, Y, and Z coordinates of a ray of the angle you want to dimension.
Call IModelDocExtension::SelectByRay, specifying the X, Y, and Z coordinates of the other ray of the angle you want to dimension.
Call this method, specifying X, Y, and Z with the location coordinates of the display dimension text and specifying DimensionType with swDimensionType_e.swAngularDimension.

## Examples

- Create Specific Dimension in a Sketch (VBA) (Create_Specific_Dimension_Example_VB.htm)
- Create Specific Dimension in a Sketch (VB.NET) (Create_Specific_Dimension_Example_VBNET.htm)
- Create Specific Dimension in a Sketch (C#) (Create_Specific_Dimension_Example_CSharp.htm)

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDocExtension.AddDimension`
- `IModelDocExtension.AddSymmetricDimension`