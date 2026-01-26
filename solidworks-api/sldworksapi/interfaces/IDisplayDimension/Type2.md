---
type: property
interface: IDisplayDimension
member: Type2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Diametric
  - IDisplayDimension.GetType
keywords:
  - type2
  - idisplaydimension
  - display
  - dimension
  - int32
  - chamfer
  - vb
  - net
  - vba
  - dimxpert
  - dimensions
  - feature
readonly: true
---

# IDisplayDimension.Type2

Gets the type of dimension.

## Signature

```csharp
System.Int32 Type2 {get;}
```
## Parameters

None.

## Return Value

Type of dimension as defined by swDimensionType_e

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Get Chamfer Display Dimension (C#) (Get_Chamfer_Display_Dimension_Example_CSharp.htm)
- Get Chamfer Display Dimension (VB.NET) (Get_Chamfer_Display_Dimension_Example_VBNET.htm)
- Get Chamfer Display Dimension (VBA) (Get_Chamfer_Display_Dimension_Example_VB.htm)
- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IDisplayDimension.Diametric`
- `IDisplayDimension.GetType`