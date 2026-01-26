---
type: method
interface: IModelDocExtension
member: AddOrdinateDimension
returns: System.Int32
parameters:
  -
    name: DimType
    type: System.Int32
    description: Dimension type as defined in swAddOrdinateDims_e
  -
    name: LocX
    type: System.Double
    description: X location for the dimension
  -
    name: LocY
    type: System.Double
    description: Y location for the dimension
  -
    name: LocZ
    type: System.Double
    description: Z location for the dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IDisplayDimension
  - IDrawingDoc.AlignOrdinate
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.EditOrdinate
  - IDrawingDoc.InsertHorizontalOrdinate
  - IDrawingDoc.InsertVerticalOrdinate
  - IModelDoc2.AlignOrdinate
  - IModelDoc2.ReattachOrdinate
  - IModelDocExtension.JogDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - ordinate
  - dimensions
  - display
  - idisplaydimension
  - addordinatedimension
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - dim
  - type
  - int32
  - loc
  - double
  - grid
  - bubble
  - vba
  - create
  - vb
  - net
---

# IModelDocExtension.AddOrdinateDimension

Inserts an ordinate dimension.

## Signature

```csharp
System.Int32 AddOrdinateDimension( 
   System.Int32
DimType
,
   System.Double
LocX
,
   System.Double
LocY
,
   System.Double
LocZ
)
```
## Parameters

- `DimType` (System.Int32): Dimension type as defined in swAddOrdinateDims_e
- `LocX` (System.Double): X location for the dimension
- `LocY` (System.Double): Y location for the dimension
- `LocZ` (System.Double): Z location for the dimension

## Return Value

Error as defined by swCreateOrdDimError_e

## Remarks

Before using this method, select the base entity to act as the datum point for the ordinate dimension and any additional entities to include in the group of ordinate dimensions.
Selections made immediately after calling this method continue to add ordinate dimensions to the group of ordinate dimensions. When you finish adding ordinate dimensions to the group, use
IModelDoc2::SetPickMode
to return to the default selection mode.
Use
IModelDoc2::EditOrdinate
to add ordinate dimensions to an existing group of ordinate dimensions.

## Examples

- Display Grid Bubble (VBA) (Display_Grid_Bubble_Example_VB.htm)
- Create Ordinate Dimensions (C#) (Create_Ordinate_Dimensions_Example_CSharp.htm)
- Create Ordinate Dimensions (VB.NET) (Create_Ordinate_Dimensions_Example_VBNET.htm)
- Create Ordinate Dimensions (VBA) (Create_Ordinate_Dimensions_Example_VB.htm)

## See Also

- `IDisplayDimension`
- `IDrawingDoc.AlignOrdinate`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.EditOrdinate`
- `IDrawingDoc.InsertHorizontalOrdinate`
- `IDrawingDoc.InsertVerticalOrdinate`
- `IModelDoc2.AlignOrdinate`
- `IModelDoc2.ReattachOrdinate`
- `IModelDocExtension.JogDimension`